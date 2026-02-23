<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { Primitive, useForwardProps } from "reka-ui"
import { tv } from "tailwind-variants"

const props = withDefaults(defineProps<SeparatorProps>(), {
  placement: "start",
  underline: false,
  labelPlacement: "start",
})

const separatorVariants = tv({
  slots: {
    root: "relative flex w-full shrink-0 items-center",
    wrapper: "flex flex-nowrap items-center gap-1",
    leading: "order-first",
    trailing: "",
    label: "pointer-events-none font-medium whitespace-nowrap select-none",
    separator: "pointer-events-none flex-1 shrink-0 grow bg-current",
  },
  variants: {
    color: {
      n5: {
        label: "text-n5/60",
        separator: "bg-n5/20",
      },
      neutral: {
        label: "text-nc/50 group-hover/collapse:text-nc!",
        separator: "bg-nc/10",
      },
      p2: {
        label: "text-pc",
        separator: "bg-p2",
      },
      p3: {
        label: "text-pc",
        separator: "bg-p3/80",
      },
      p4: {
        label: "text-pc",
        separator: "bg-p4",
      },
    },
    underline: {
      true: {
        label: "text-pc/60! group-hover/btn:text-pc! group-hover/btn:underline",
        separator: "group-hover/collapse:brightness-86",
        leading: "**:text-pc/60! group-hover/btn:**:text-pc!",
      },
    },
    labelVisible: {
      true: {},
      false: {
        label: "hidden",
      },
    },
    placement: {
      center: {},
      end: {},
      start: {},
    },
    labelPlacement: {
      center: {},
      end: {},
      start: {},
    },
    orientation: {
      vertical: {
        root: "flex-col justify-center",
        wrapper: "flex flex-col items-center",
        separator: "h-full w-px",
      },
      horizontal: {
        root: "flex items-center",
        wrapper: "flex items-center",
        separator: "h-px w-full",
      },
    },
    size: {
      xs: {
        label: "text-2xs font-medium",
      },
      sm: {
        label: "text-xs font-medium",
      },
      md: {
        label: "text-sm font-medium",
      },
      lg: {
        label: "text-md font-medium",
      },
    },
  },
  compoundVariants: [
    {
      placement: "start",
      labelPlacement: "end",
      class: {
        wrapper: "order-last",
        separator: "order-1",
        leading: "order-first",
      },
    },
    {
      placement: "start",
      labelPlacement: "start",
      class: {
        wrapper: "order-1 mr-2",
        leading: "order-first",
        separator: "order-last",
      },
    },
    {
      placement: "start",
      labelPlacement: "center",
      class: {
        wrapper: "order-2 mx-2",
        separator: "order-1",
        leading: "order-first",
      },
    },
  ],
  defaultVariants: {
    color: "p3",
    placement: "start",
    size: "md",
    orientation: "horizontal",
  },
})

type SeparatorColor = "n5" | "neutral" | "p2" | "p3" | "p4"
type SeparatorPlacement = "start" | "center" | "end"
type SeparatorOrientation = "horizontal" | "vertical"
type SeparatorSize = "xs" | "sm" | "md" | "lg"

interface SeparatorProps {
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
      | "wrapper"
      | "leading"
      | "trailing"
      | "label"
      | "separator"
      | "leadingIcon"
      | "trailingIcon",
      string
    >
  >
  trailingIcon?: string
  leadingIcon?: string
}

const styles = computed(() =>
  separatorVariants({
    color: props.color,
    placement: props.placement,
    size: props.size,
    orientation: props.orientation,
    underline: props.underline,
    labelVisible: Boolean(props.label),
    labelPlacement: props.labelPlacement,
  })
)
</script>

<template>
  <div :class="cn(styles.root({ class: [props.ui?.root, props.class] }))">
    <span :class="styles.separator({ class: props.ui?.separator })" />

    <Icon
      v-if="props.leadingIcon"
      :name="props.leadingIcon"
      :class="styles.leading({ class: props.ui?.leadingIcon })" />

    <div
      v-if="props.label"
      :class="styles.wrapper({ class: props.ui?.wrapper })">
      <span
        :class="styles.label({ class: [props.ui?.label, props.labelClass] })">
        {{ props.label }}
      </span>
    </div>

    <span
      v-if="props.placement === 'center'"
      :class="styles.separator({ class: props.ui?.separator })" />

    <Icon
      v-if="props.trailingIcon"
      :name="props.trailingIcon"
      :class="styles.trailing({ class: props.ui?.trailing })" />
  </div>
</template>
