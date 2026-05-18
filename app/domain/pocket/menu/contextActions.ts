import type { ButtonProps } from "@nuxt/ui"

export const pocketSidebarContextUi = {
  content: "z-90 max-w-66 min-w-44 overflow-hidden",
  viewport: "max-w-66",
  separator: "",
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
    itemLeadingIcon: " **:stroke-[2.5%]! "
  }
})

export function collapseAllBtn(collapseAllFolders: () => void): ButtonProps {
  return {
    icon: "i-collapse-all",
    square: true,
    variant: "ghost",
    ui: {
      leadingIcon: "scale-94  "
    },
    label: "Collapse all folders",
    onClick: () => collapseAllFolders()
  }
}
