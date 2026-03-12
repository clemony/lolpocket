import { defineTask } from "nitropack/runtime"
import { refreshLeagueofLegendsRedditFeed } from "~~/server/domain/feed/reddit"

export default defineTask({
  meta: {
    description: "Refresh the League of Legends Reddit link feed.",
  },
  async run() {
    const result = await refreshLeagueofLegendsRedditFeed()

    return {
      result,
    }
  },
})
