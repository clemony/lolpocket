export const steps = [
  // jan 11 2025
  {
    title: "Create a Pocket",
    component: defineAsyncComponent(() => import("./CreatePocket.vue")),
    description:
      "Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro use. Pockets can be linked to champions or a general role.",
  },
  {
    title: "Craft a Build",
    component: defineAsyncComponent(() => import("./CraftBuild.vue")),
    description:
      "Choose a champion, group of champions—or even just a position. Organize items into full builds or pool them by situation. Theorycraft some new things to try, or pull out your old favorites. Create rune sets, and grab some summoner spells.",
  },
  {
    title: "Play Games",
    component: defineAsyncComponent(() => import("./PlayGames.vue")),
    description:
      "Send your fully cooked pockets to the rift. Export directly to the league client so your builds show up in game. Then, do what you're best at: Queue up and grind some LP.",
  },
  {
    title: "Analyze Results",
    component: defineAsyncComponent(() => import("./AnalyzeResults.vue")),
    description:
      "With a connected Riot Account, advanced statistics give you insight into the best items and champions for your specific playstyle. The meta may tell you Triforce Yuumi is 82% winrate—but according to your data, you seem to do better with a Moonstone. Easily see where meta slaving away helps or harms.",
  },
]
