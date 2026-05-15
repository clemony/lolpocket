import type { HTMLAttributes } from "vue"

export interface IconSet {
  key: string
  label: string
  open: string
  closed: string
  icon?: string
  class?: string
  ui?: {
    open?: string
    closed?: string
  }
}
export type IconKey = keyof typeof iconSets

export const iconSets: Record<string, IconSet> = {
  folder: {
    key: "folder",
    label: "Folder",
    open: "i-folder-open",
    closed: "i-folder",
    icon: "i-folder"
  },
  pin: {
    key: "pin",
    label: "Pin",
    icon: "i-pin",
    open: "i-pin",
    closed: "i-unpin",
    class: ""
  },
  archive: {
    key: "archive",
    label: "Archive",
    open: "i-archive-restore",
    closed: "i-archive",
    icon: "i-archive"
  },
  trash: {
    key: "trash",
    label: "Trash",
    open: "i-trash-simple",
    closed: "i-trash",
    icon: "i-trash"
  },
  tear: {
    key: "tear",
    label: "Tear",
    open: "i-tabler-droplet-half-2-filled",
    closed: "i-tabler-droplet",
    icon: "i-tabler-droplet"
  },
  box: {
    key: "box",
    label: "Box",
    open: "i-tabler-brand-codesandbox",
    closed: "i-tabler-box",
    icon: "i-tabler-box"
  },
  heart: {
    key: "heart",
    label: "Heart",
    icon: "i-proicons-heart",
    open: "i-proicons-heart",
    closed: "i-proicons-heart-stylistic", //i-ri-hearts-line,
    class: " scale-110",
    ui: {
      open: "  scale-110",
      closed: " scale-110"
    }
  },
  live: {
    key: "live",
    label: "Live",
    open: "i-tabler-activity-heartbeat",
    closed: "i-tabler-line-dotted",
    icon: "i-tabler-line-dotted"
  },
  plant: {
    key: "plant",
    label: "Plant",
    open: "i-tabler-flower",
    closed: "i-tabler-seedling",
    icon: "i-tabler-seedling"
  },
  run: {
    key: "run",
    label: "Run",
    open: "i-fa7-solid-person-falling-burst",
    closed: "i-fa7-solid-running",
    icon: "i-fa7-solid-running"
  },
  cookie: {
    key: "cookie",
    label: "Cookie",
    open: "i-iconoir-half-cookie",
    closed: "i-iconoir-cookie",
    icon: "i-iconoir-cookie",
    class: "",
    ui: {
      open: "",
      closed: ""
    }
  },
  cloud: {
    key: "cloud",
    label: "Cloud",
    open: "i-lucide-cloud-lightning",
    closed: "i-lucide-cloud",
    icon: "i-lucide-cloud",
    class: "translate-y-0.5",
    ui: {
      open: "translate-y-0.5"
    }
  },
  time: {
    key: "time",
    label: "Time",
    open: "i-lucide-sun",
    closed: "i-lucide-moon-star",
    icon: "i-lucide-moon-star"
  },
  apple: {
    key: "apple",
    label: "Apple",
    open: "i-lucide-lab-apple-core",
    closed: "i-lucide-apple",
    icon: "i-lucide-apple"
  },
  hat: {
    key: "hat",
    label: "Hat",
    open: "i-lucide-lab-hat-baseball",
    closed: "i-lucide-lab-hat-beanie",
    icon: "i-lucide-lab-hat-beanie"
  },
  tealight: {
    key: "tealight",
    label: "Tealight",
    open: "i-lucide-lab-candle-tealight-lit",
    closed: "i-lucide-lab-candle-tealight",
    icon: "i-lucide-lab-candle-tealight"
  },
  tea: {
    key: "tea",
    label: "Tea",
    open: "i-lucide-lab-mug-teabag",
    closed: "i-lucide-lab-mug",
    icon: "i-lucide-lab-mug",
    class: " scale-108    ",
    ui: {
      open: " scale-108    ",
      closed: " scale-108   "
    }
  },
  bull: {
    key: "bull",
    label: "Can't Milk Those",
    open: "i-lucide-lab-cow-udder-droplets",
    closed: "i-lucide-lab-bull-head",
    icon: "i-lucide-lab-bull-head"
  },
  lotion: {
    key: "lotion",
    label: "Lotion",
    open: "i-streamline-sharp-hand-washing",
    closed: "i-lucide-soap-dispenser-droplet",
    icon: "i-lucide-soap-dispenser-droplet",
    class: "",
    ui: {
      open: " scale-120  stroke-[3.8]"
    }
  },
  candle: {
    key: "candle",
    label: "Candle",
    open: "i-lucide-lab-candle-holder-lit",
    closed: "i-lucide-lab-candle-holder",
    icon: "i-lucide-lab-candle-holder"
  },
  undies: {
    key: "undies",
    label: "Undies",
    open: "i-lucide-lab-shorts-boxer",
    closed: "i-lucide-lab-shirt-t",
    icon: "i-lucide-lab-shirt-t"
  }
}
