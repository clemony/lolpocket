import type { ButtonProps, CheckboxGroupProps } from "@nuxt/ui"
import type { SeparatorProps } from "~~/layers/ui/app/variants/separator"

export const collapseProps = {
  ui: {
    root: "w-full  not-group-first/collapse:mt-1  relative   ",
    content:
      "z-0 max-h-90 overflow-y-scroll closed:border-transparent border-b border-p3   "
  }
}

export const separatorProps: SeparatorProps = {
  size: "md",
  labelPosition: "start",
  trailingIcon: "i-up",
  ui: {
    separator: "opacity-0   group-closed/btn:opacity-100 ",
    label: "font-medium opacity-60 group-hover/btn:opacity-100",
    trailingIcon:
      "group-hover/btn:**:text-n0  absolute transition-rotate size-4.5 text-n5/60 duration-200 **:stroke-[2.4] group-open/collapse:-rotate-180"
  }
}

export const btnProps: ButtonProps = {
  size: "lg",
  variant: "link",
  block: true,
  ui: {
    base: "pr-px -mb-1"
  }
}
