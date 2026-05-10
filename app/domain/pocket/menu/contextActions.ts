export const pocketSidebarContextUi = {
  content: "z-90 max-w-66 min-w-44 overflow-hidden",
  viewport: "max-w-66",
  separator: "border-p3 bg-p3 mix-blend-darken",
  group: "",
  itemLabel: "truncate pr-3"
}

export const newPocketContext = (label: string) => ({
  label: `New pocket in \"${label}\"`,
  icon: "i-add",

  ui: { leadingIcon: "**:stroke-[2.4]! scale-150" }
})

export const contextOpen = (label: string) => ({
  label: `Open "${label}"`,
  icon: "i-ui-open",
  ui: {
    itemLeadingIcon: " **:stroke-[0.8]"
  }
})
