export interface MapPosition {
  color: string
  label: string
  icon: string
}
export const mapPositions = [
  {
    color: "var(--color-n5)",
    label: "all",
    icon: "i-role-all",
  },

  {
    color: "var(--color-domination)",
    label: "top",
    icon: "i-role-top",
  },

  {
    color: "var(--color-resolve)",
    label: "jungle",
    icon: "i-role-jungle",
  },

  {
    color: "var(--color-sorcery)",
    label: "middle",
    icon: "i-role-middle",
  },

  {
    color: "var(--color-precision)",
    label: "bottom",
    icon: "i-role-bottom",
  },

  {
    color: "var(--color-inspiration)",
    label: "support",
    icon: "i-role-support",
  },
]
