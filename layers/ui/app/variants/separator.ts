export type SeparatorColor =
  | "base"
  | "neutral"
  | "secondary"
  | "tertiary"
  | "p4"
export type SeparatorPosition = "start" | "center" | "end"
export type SeparatorOrientation = "horizontal" | "vertical"
export type SeparatorSize = "xs" | "sm" | "md" | "lg"

export interface SeparatorProps {
  class?: HTMLAttributes["class"]
  labelClass?: HTMLAttributes["class"]
  label?: string
  color?: SeparatorColor
  position?: SeparatorPosition
  size?: SeparatorSize
  orientation?: SeparatorOrientation
  underline?: boolean
  labelPosition?: SeparatorPosition
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
