import { ArrowUpRight, Flame, FolderGit2, Star, Users } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

// Rendered server-side from live GitHub data (revalidated hourly) instead of
// third-party stat-image services, which proved unreliable.
type ContributionDay = { date: string; count: number; level: number };
type GitHubData = {
  followers: number;
  publicRepos: number;
  stars: number;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: ContributionDay[][];
  languages: { name: string; pct: number }[];
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#818cf8",
  JavaScript: "#a78bfa",
  "C++": "#c4b5fd",
  Java: "#6366f1",
  Go: "#8b5cf6",
  HTML: "#7dd3fc",
  CSS: "#a5b4fc",
};
const FALLBACK_COLORS = ["#818cf8", "#a78bfa", "#c4b5fd", "#6366f1", "#8b5cf6"];

async function getGitHubData(user: string): Promise<GitHubData | null> {
  const opts = {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  };
  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`, opts),
      fetch(`https://api.github.com/users/${user}/repos?per_page=100`, opts),
      fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`, {
        next: { revalidate: 3600 },
      }),
    ]);
    if (!userRes.ok || !contribRes.ok) return null;

    const profile = await userRes.json();
    const repos: { language: string | null; stargazers_count: number; fork: boolean }[] =
      reposRes.ok ? await reposRes.json() : [];
    const contrib: { total: { lastYear: number }; contributions: ContributionDay[] } =
      await contribRes.json();

    const days = contrib.contributions;
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

    // Streaks over the last year (current streak tolerates an empty today)
    let current = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) current++;
      else if (i === days.length - 1) continue;
      else break;
    }
    let longest = 0;
    let run = 0;
    for (const d of days) {
      run = d.count > 0 ? run + 1 : 0;
      if (run > longest) longest = run;
    }

    const langCount = new Map<string, number>();
    let stars = 0;
    for (const r of repos) {
      stars += r.stargazers_count;
      if (r.language && !r.fork)
        langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
    }
    const totalLang = [...langCount.values()].reduce((a, b) => a + b, 0) || 1;
    const languages = [...langCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, n]) => ({ name, pct: Math.round((n / totalLang) * 100) }));

    return {
      followers: profile.followers ?? 0,
      publicRepos: profile.public_repos ?? 0,
      stars,
      totalContributions: contrib.total.lastYear,
      currentStreak: current,
      longestStreak: longest,
      weeks,
      languages,
    };
  } catch {
    return null;
  }
}

const LEVEL_CLASSES = [
  "bg-elev/[0.05]",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

export default async function GitHubSection() {
  const u = site.githubUser;
  const data = await getGitHubData(u);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="panel p-6 md:p-12">
        <SectionHeading title="On GitHub" eyebrow="Open source" />

        <Reveal>
          <div className="card overflow-hidden rounded-2xl p-5 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {data
                  ? `${data.totalContributions} contributions in the last year`
                  : "Contribution graph"}
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex items-center gap-1 text-sm text-accent"
              >
                @{u} <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="mt-5 overflow-x-auto">
              {data ? (
                <div className="flex min-w-[640px] gap-[3px]">
                  {data.weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <span
                          key={day.date}
                          title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                          className={`h-[10px] w-[10px] rounded-[2px] ${LEVEL_CLASSES[Math.min(day.level, 4)]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-6 text-sm text-muted">
                  Live stats are taking a break — see the full activity on{" "}
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-accent"
                  >
                    github.com/{u}
                  </a>
                  .
                </p>
              )}
            </div>
            {data && (
              <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[10px] text-muted">
                Less
                {LEVEL_CLASSES.map((c) => (
                  <span key={c} className={`h-[10px] w-[10px] rounded-[2px] ${c}`} />
                ))}
                More
              </div>
            )}
          </div>
        </Reveal>

        {data && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="card h-full rounded-2xl p-5 md:p-7">
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                  At a glance
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Flame, value: `${data.currentStreak}d`, label: "Current streak" },
                    { icon: Flame, value: `${data.longestStreak}d`, label: "Longest streak" },
                    { icon: FolderGit2, value: data.publicRepos, label: "Public repos" },
                    data.stars > 0
                      ? { icon: Star, value: data.stars, label: "Stars earned" }
                      : { icon: Users, value: data.followers, label: "Followers" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-elev/[0.03] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <s.icon size={14} className="text-accent" />
                        <span className="grad-text text-xl font-semibold">
                          {s.value}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card h-full rounded-2xl p-5 md:p-7">
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                  Most used languages
                </p>
                <div className="flex flex-col gap-4">
                  {data.languages.map((l, i) => (
                    <div key={l.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-foreground/85">{l.name}</span>
                        <span className="font-mono text-muted">{l.pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-elev/[0.05]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${l.pct}%`,
                            background:
                              LANG_COLORS[l.name] ??
                              FALLBACK_COLORS[i % FALLBACK_COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
