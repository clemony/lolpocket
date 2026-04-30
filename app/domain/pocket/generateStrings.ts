import { championIndex } from "#shared/constants/champions/championIndex"
import { itemIndex } from "#shared/constants/items/itemIndex"

const leadingArticles = ["My", "This", "The"]
const middleArticles = ["the", "my", "this"]
const vowelSound = /^[aeiou]/i

const modifiers = [
  "Apex",
  "Autofilled",
  "Big Brain",
  "Blessed",
  "Boosted",
  "Budget",
  "Calculated",
  "Certified",
  "Chatbanned",
  "Clapped",
  "Clean",
  "Coinflip",
  "Cooked",
  "Cosmic",
  "Cracked",
  "Cursed",
  "Delusional",
  "Desperate",
  "Dirty",
  "Doomed",
  "Draft",
  "Elder",
  "Emergency",
  "Fed",
  "Filled",
  "Forbidden",
  "Giga",
  "Goated",
  "Greedy",
  "Hidden",
  "Hextech",
  "Illegal",
  "Inting",
  "Juiced",
  "Lucker Dog",
  "Lucky",
  "Nooblord",
  "Omega",
  "Perma Ban",
  "Premium",
  "Questionable",
  "Roaming",
  "Scaling",
  "Secret",
  "Shameless",
  "Sigma",
  "Smurf",
  "Sweaty",
  "Tilted",
  "Turbo",
  "Unhinged",
  "Zoning"
]

const suffixes = [
  "Agenda",
  "Archive",
  "Arc",
  "Bobbles",
  "Club",
  "Committee",
  "Collection",
  "Combo",
  "Comp",
  "Cult",
  "Department",
  "Diary",
  "Diff",
  "Era",
  "Experiment",
  "Factory",
  "Fiesta",
  "Gap",
  "Incident",
  "Institute",
  "Main",
  "Manifesto",
  "Mayhem",
  "Moment",
  "Museum",
  "Phase",
  "Plan",
  "Power",
  "Protocol",
  "Score",
  "Simulator",
  "Situation",
  "Spike",
  "Steal",
  "Support Group",
  "Therapy",
  "Theory",
  "University"
]

const moreWords = [
  "😘",
  "👏",
  "👮‍♂️",
  "👩‍🌾",
  "🫶",
  "🤡",
  "👌",
  "💪",
  "🥵",
  "🫠",
  "💦",
  "🪤",
  "⛺️",
  "🦐",
  "😉",
  "200 IQ",
  "200 Years",
  "All Chat",
  "Ace",
  "ARAM Main",
  "Mayhem",
  "Arena",
  "Autofilled",
  "Ban",
  "Phase",
  "Baron",
  "Steal",
  "Big Brain",
  "Blaze It",
  "Blue",
  "Red",
  "Map",
  "Boosted",
  "Bot",
  "Bobbles",
  "Bounty",
  "Brain Off",
  "Brush",
  "Bush",
  "Cheese",
  "Chatbanned",
  "Clapped",
  "Clown Fiesta",
  "Clown Car",
  "Coinflip",
  "Cooked",
  "Cook",
  "Cooldown",
  "Copium",
  "CSing",
  "Cracked",
  "Dive",
  "Fiesta",
  "Diff",
  "Drag Timer",
  "Draft Diff",
  "Disengage",
  "Engage",
  "FF15",
  "Filled",
  "Flash",
  "Fog",
  "Gamer",
  "Gank",
  "Juiced",
  "GGEZ",
  "Chad",
  "GG",
  "Giga Chad",
  "GOAT",
  "GOATED",
  "Gold",
  "Funnel",
  "HAM",
  "Hopium",
  "Hypercarry",
  "Ignite",
  "Inhib",
  "Inting",
  "Inting",
  "Invade",
  "Jungle",
  "Keyboard Diff",
  "Gap",
  "KDA",
  "Farmer",
  "Kite",
  "Snowball",
  "Apex",
  "???",
  "Lag",
  "Lane",
  "Limit Test",
  "Lucker Dog",
  "Mid",
  "Minion Block",
  "Minions",
  "Nooblord",
  "Omega",
  "Sigma",
  "Tilt",
  "Combo",
  "One-hit",
  "One shot",
  "Combobreaker",
  "Objective",
  "Mama",
  "Baby kitty",
  "One trick",
  "Outplayed",
  "Outscaled",
  "Oops",
  "Peel",
  "Perma Ban",
  "Pentakill",
  "Pick",
  "Playable",
  "Poggers",
  "Power",
  "Proxy",
  "Rage",
  "Quit",
  "Alt + F4",
  "Recall",
  "Reportable",
  "Reset",
  "Roam",
  "Roaming",
  "Scaling",
  "Comp",
  "Shutdown",
  "Side Quest",
  "Skill Issue",
  "Skillshot",
  "Skirmish",
  "Smite",
  "Smurf",
  "Diff",
  "Solo",
  "Solo Q",
  "Surely",
  "Split",
  "Pusher",
  "Spike",
  "Support",
  "Team",
  "Tilted",
  "Top",
  "Tower",
  "Dive",
  "Teleport",
  "Trust Me",
  "Turbo",
  "Unlucky",
  "Fed",
  "Vision",
  "Wave",
  "Winnable",
  "Score",
  "Worth",
  "Ward Hop",
  "xD",
  "Zoning Ult"
].sort()

function getRandomElement<T>(array: T[]): T {
  return (array[Math.floor(Math.random() * array.length)] ?? array[0]) as T
}

const fillerWords = /\b(the|of)\b/gi
const punctuation = /[.']/g
const whitespace = /\s+/

function cleanWords(name: string): string[] {
  return name
    .replace(fillerWords, "")
    .replace(punctuation, "")
    .trim()
    .split(whitespace)
    .filter(Boolean)
}

function titleCase(value: string): string {
  return cleanWords(value)
    .map((word) => capitalize(word))
    .join(" ")
}

function getLeagueWords(): string[] {
  const championWords = championIndex.map((item) => cleanWords(item.name).join(" "))
  const itemWords = itemIndex.map((item) => cleanWords(item.name).join(" "))

  return [...championWords, ...itemWords, ...moreWords].map(titleCase).filter(Boolean)
}

function getLeadingArticle(nextWord: string): string {
  const indefiniteArticle = vowelSound.test(nextWord) ? "An" : "A"

  return getRandomElement([indefiniteArticle, ...leadingArticles])
}

function buildTitle(): string {
  const leagueWords = getLeagueWords()
  const middleArticle = getRandomElement(middleArticles)
  const modifier = getRandomElement(modifiers)
  const article = getLeadingArticle(modifier)
  const leagueWord = getRandomElement(leagueWords)
  const secondLeagueWord = getRandomElement(leagueWords.filter((word) => word !== leagueWord))
  const suffix = getRandomElement(suffixes)

  const formats = [
    () => `${modifier} ${leagueWord}`,
    () => `${modifier} ${leagueWord} ${suffix}`,
    () => `${leagueWord} ${suffix}`,
    () => `${article} ${modifier} ${leagueWord}`,
    () => `${article} ${modifier} ${leagueWord} ${suffix}`,
    () => `${leagueWord} ${middleArticle} ${secondLeagueWord}`,
    () => `${leagueWord} ${middleArticle} ${modifier} ${suffix}`
  ]

  return getRandomElement(formats)()
}

export function generateName(): string {
  return buildTitle()
}
