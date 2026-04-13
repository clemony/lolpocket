const keywordMatchers: Array<[string, RegExp]> = [
  ["patch", /\bpatch\b/i],
  ["patch-notes", /\bpatch notes?\b/i],
  ["pbe", /\bpbe\b/i],
  ["bug", /\bbug(s|fix(es)?)?\b/i],
  ["skins", /\bskin(s)?\b/i],
  ["esports", /\besports?\b/i],
  ["lck", /\blck\b/i],
  ["lpl", /\blpl\b/i],
  ["lec", /\blec\b/i],
  ["lcs", /\blcs\b/i],
  ["msi", /\bmsi\b/i],
  ["worlds", /\bworlds?\b/i],
  ["roster", /\broster(s)?\b/i],
  ["guide", /\bguide(s)?\b/i],
  ["build", /\bbuild(s)?\b/i],
  ["runes", /\brune(s)?\b/i],
  ["items", /\bitem(s)?\b/i],
  ["champion", /\bchamp(ion)?s?\b/i],
  ["arena", /\barena\b/i],
  ["swarm", /\bswarm\b/i]
]

const NON_ALPHANUMERIC_RE = /[^a-z0-9]+/g
const TRIM_DASHES_RE = /^-+|-+$/g

function slugifyKeyword(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(NON_ALPHANUMERIC_RE, "-")
    .replace(TRIM_DASHES_RE, "")
}

export function deriveFeedKeywords(input: {
  flair?: string | null
  subreddit: string
  title: string
}): string[] {
  const tags = new Set<string>(["reddit", slugifyKeyword(input.subreddit)])
  const haystack = `${input.title} ${input.flair ?? ""}`

  if (input.flair) {
    const flair = slugifyKeyword(input.flair)
    if (flair) tags.add(flair)
  }

  for (const [keyword, pattern] of keywordMatchers) {
    if (pattern.test(haystack)) tags.add(keyword)
  }

  return [...tags].sort((a, b) => a.localeCompare(b))
}
