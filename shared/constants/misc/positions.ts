export interface MapPosition {
  color: string
  label: string
  icon: string
}
export const mapPositions = [
  {
    color: "var(--color-n5)",
    label: "all",
    icon: "i-lp-all"
  },

  {
    color: "var(--color-domination)",
    label: "top",
    icon: "i-lp-top"
  },

  {
    color: "var(--color-res)",
    label: "jungle",
    icon: "i-lp-jungle"
  },

  {
    color: "var(--color-sorc)",
    label: "mid",
    icon: "i-lp-mid"
  },

  {
    color: "var(--color-pre)",
    label: "bot",
    icon: "i-lp-bot"
  },

  {
    color: "var(--color-insp)",
    label: "support",
    icon: "i-lp-support"
  }
]
