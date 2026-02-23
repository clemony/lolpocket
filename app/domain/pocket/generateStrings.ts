//
import { generate } from "random-words"
import { championIndex } from "#shared/constants/champions/championIndex"
import { itemIndex } from "#shared/constants/items/itemIndex"

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
  "ARAM Main",
  "Auto Filled",
  "Ban Phase",
  "Baron Steal",
  "Big Brain",
  "Blaze It",
  "Blue Side Diff",
  "Boosted",
  "Bot Gap",
  "Bobbles",
  "Bush Cheese",
  "Chatbanned",
  "Clapped",
  "Clown Fiesta",
  "Coinflip",
  "Cooked",
  "Cook",
  "CSing",
  "Cracked",
  "Dive Fiesta",
  "Diff",
  "Drag Timer",
  "Draft Diff",
  "FF15",
  "Filled",
  "Gamer Juice",
  "GGEZ",
  "Giga Chad",
  "GOAT",
  "GOATED",
  "Gold Funnel",
  "HAM",
  "Hardstuck",
  "Hypercarry",
  "Inting",
  "Inting Sion",
  "Jungle Gap",
  "KDA Farmer",
  "Kite Back",
  "Lag Spike",
  "Lucker Dog",
  "Mid Gap",
  "Minion Block",
  "Minions",
  "Nooblord",
  "Omega Tilt",
  "One Combo",
  "One Trick",
  "Outplayed",
  "Outscaled",
  "Peel",
  "Perma Ban",
  "Poggers",
  "Power Spike",
  "Proxy",
  "Rage Quit",
  "Roam Gap",
  "Roaming",
  "Scaling Comp",
  "Smurf",
  "Solo Bolo",
  "Solo Q",
  "Split Pusher",
  "Spike",
  "Supp Gap",
  "Team Gap",
  "Tilted",
  "Top Gap",
  "Tower Dive",
  "Towers",
  "Turbo Fed",
  "Vision Score",
  "Ward Hop",
  "xD",
  "Zoning Ult",
].sort()

// Pick a random element from an array
function getRandomElement<T>(array: T[]): T {
  return (array[Math.floor(Math.random() * array.length)] ?? array[0]) as T
}

// Strip unwanted words/characters and split into clean words
function cleanName(name: string): string[] {
  return name
    .replace(/\b(the|of)\b/gi, "")
    .replace(/\./g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

// Generate random words between given limits
function generateWords(min: number, max: number): string {
  let result = ""
  while (result.length < 4 || result.length > 16) {
    result = generate({ join: " ", max, min })
  }
  return capitalize(result)
}

// Shared word generation logic
export function generateName(): string {
  const championWords = championIndex.map((item) => item.name)

  const itemWords = itemIndex.map((item) => item.name)

  const leagueWords = [...championWords, ...itemWords, ...moreWords]
  const leagueWord = getRandomElement(leagueWords)

  const generate = generateWords(1, 3)
  let generated: string[] = generate.split(" ")
  generated = generated.map((a) => capitalize(a))
  const shuffled = [leagueWord, ...generated].sort(() => Math.random() - 0.5)
  console.log("💠 - generateName - shuffled:", shuffled)

  return capitalize(shuffled.splice(0, 3).join(" "))
}
