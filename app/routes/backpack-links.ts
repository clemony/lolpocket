export const backpackLinks: LinkObject[] = [
  {
    name: "Backpack",
    link: "/backpack",

    icon: {
      name: "i-lol-backpack-outline-bold",
    },
    blurb:
      '<p class="leading-5 text-pretty">Your main <i><b>pocket</b></i> storage tool. Magically keeps pockets safe and warm in list and grid form.</p>',
  },
  {
    name: "Trash",
    link: "/backpack/trash",

    icon: {
      name: "trash",
    },
    blurb: "Self deletes after 30 days.",
  },
  {
    name: "Archive",
    link: "/backpack/archive",

    icon: {
      name: "archive",
    },
    blurb: "Outdated or unfinished.",
  },
]

export const pinnedLink: LinkObject = {
  name: "Pinned",
  link: "/pockets/pinned",

  icon: {
    name: "teenyicons:attach-outline",
  },
}
