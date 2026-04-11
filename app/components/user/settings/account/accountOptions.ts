import { description } from "valibot"

export const accountOptions = {
  username: {
    label: "Username",
    description:
      "Used to identify you and your account. Your main display name if you haven't connected a Riot account."
  },
  email: {
    label: "Email",
    description:
      "Receive password reset and update messages, or use as your main login method."
  },
  accounts: {
    label: "Connected Accounts",
    description: "Manage the accounts used to log in to lolpocket."
  },
  block: {
    label: "Block Users",
    description:
      "Soulless mageseeker bullying your behind? Search them up and add to the  list to cast the block spell. How magical!"
  },
  blocked: {
    label: "Blocked",
    title: "Empty",
    icon: "i-mingcute-empty-box-line",
    description:
      "Any users you block will show up here. They'll be unallowed to contact you through lolpocket."
  },
  clearLocal: {
    label: "Clear Local Match Data",
    description:
      "Remove stored data from your browser's cache. If you're having issues updating matches, you can try this or contact me.",
    text: "Match data is cached in your browser's internal database to limit strain on Riot's API servers. This data is not permanent. Most modern browsers automatically clear data as it becomes stale or unused over time."
  }
}
