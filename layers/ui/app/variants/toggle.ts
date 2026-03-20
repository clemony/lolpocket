import type { ToggleProps } from "reka-ui"
import type buttonTheme from "~~/layers/ui/app/theme/button"

export type ButtonColor = keyof typeof buttonTheme.variants.color
export type ButtonVariant = keyof typeof buttonTheme.variants.variant
export type ButtonSize = keyof typeof buttonTheme.variants.size

export type ToggleButtonProps = ToggleProps & {
  class?: HTMLAttributes["class"]
  activeClass?: string
  inactiveClass?: string
  ui?: {
    base?: string
    label?: string
    leadingIcon?: string
    trailingIcon?: string
  }
  label?: string
  icon?: string
  trailingIcon?: string
  color?: ButtonColor
  activeColor?: ButtonColor
  variant?: ButtonVariant
  activeVariant?: ButtonVariant
  size?: ButtonSize
  square?: boolean
  rounded?: boolean
}
