export type SeparatorColor = "base" | "neutral" | "secondary" | "tertiary"
export type SeparatorPlacement = "start" | "center" | "end"
export type SeparatorOrientation = "horizontal" | "vertical"
export type SeparatorSize = "xs" | "sm" | "md" | "lg"

export interface SeparatorProps {
  class?: HTMLAttributes["class"]
  labelClass?: HTMLAttributes["class"]
  label?: string
  color?: SeparatorColor
  placement?: SeparatorPlacement
  size?: SeparatorSize
  orientation?: SeparatorOrientation
  underline?: boolean
  labelPlacement?: SeparatorPlacement
  ui?: Partial<
    Record<
      | "root"
      | "label"
      | "leading"
      | "separator"
      | "trailing"
      | "leadingIcon"
      | "trailingIcon",
      string
    >
  >
  trailingIcon?: string
  leadingIcon?: string
}
