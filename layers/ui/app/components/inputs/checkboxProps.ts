import type { CheckboxGroupProps } from "@nuxt/ui"

export const checkboxProps = {
  indicator: "hidden",
  color: "default",
  variant: "select",
  ui: {
    fieldset: cn("flex flex-col gap-y-0.5 pt-0 pb-2"),
    item: "py-0! hover:bg-p1! px-3 h-9.5! items-center gap-2.5 has-checked:bg-p2/80 checked:bg-p2/80 checked:px-3 shadow-none drop-shadow-none checked:gap-2.5 checked:border-0! border-0 ring-0 noise-0!  group/item",
    wrapper: "w-full justify-start",
    container: "hidden",
    label:
      " flex h-full w-fit items-center gap-2.5 rounded-lg px-0 py-1 text-start  group-hover/x:no-underline"
  }
} satisfies CheckboxGroupProps

export const checkboxIcon = {
  wrapper:
    "noise relative grid size-4 place-items-center rounded-full bg-neutral shadow-xs ring ring-n4 ring-offset-1 ring-offset-n0 drop-shadow-xs group-has-checked/item:bg-p0 group-has-checked/item:ring-offset-p0 group-checked/item:ring-offset-p0  group-checked/item:ring-p0 group-checked/item:bg-p0 group-has-checked/x:ring-p0",
  icon: "absolute size-4 text-nc **:stroke-2 group-has-checked/x:text-pc group-checked/item:text-pc"
}
