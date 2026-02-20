<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { Primitive, useForwardProps } from "reka-ui"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

type SeparatorProps = VariantProps<typeof separatorVariants>
const props: Record<string, any> = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes["class"]
      labelClass?: HTMLAttributes["class"]
      label?: string
      color?: SeparatorProps["color"]
      placement?: SeparatorProps["placement"]
      size?: SeparatorProps["size"]
      orientation?: SeparatorProps["orientation"]
      ui?: Record<string, string>
      underline?: boolean
    }
  >(),
  {
    underline: false,
  }
)

const forwarded = reactiveOmit(omitUIProps(props))

const separatorVariants = tv({
  slots: {
    root: "relative flex w-full shrink-0 items-center",
    wrapper: "flex flex-nowrap items-center gap-1",
    leading: "order-first",
    label: cn(
      "pointer-events-none font-medium whitespace-nowrap select-none",
      props.ui?.label
    ),
    separator: cn(
      "pointer-events-none flex-1 shrink-0 bg-current",
      props.ui?.separator
    ),
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
    },
    underline: {
      true: {
        label: "text-pc/60! group-hover/btn:text-pc! group-hover/btn:underline",
        separator: "group-hover/collapse:brightness-86",
        leading: "**:text-pc/60! group-hover/btn:**:text-pc!",
      },
    },
    placement: {
      center: { wrapper: "order-2 ml-2", separator: "order-1" },
      end: { wrapper: "order-last", separator: "order-first" },
      start: { wrapper: "order-first mr-2", separator: "order-last" },
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
        separator: "",
        root: "",
      },
      sm: {
        label: "text-xs font-medium",
        separator: "",
        root: "",
      },
      md: {
        label: "text-sm font-medium",
        separator: "",
        root: "",
      },
      lg: {
        label: "text-md font-medium",
        separator: "",
        root: "",
      },
    },
  },
  defaultVariants: {
    color: "p3",
    placement: "start",
    size: "md",
    orientation: "horizontal",
  },
})

const styles = separatorVariants({
  color: props.color,
  placement: props.placement,
  size: props.size,
  orientation: props.orientation,
  underline: props.underline,
})

const { label, separator, root, wrapper, leading } = styles
</script>

<template>
  <Primitive v-bind="forwarded" :class="cn(root(), props.class)">
    <span :class="separator()" />
    <div :class="wrapper()">
      <slot name="leading" :class="leading()" />
      <span v-if="props.label" :class="label()">
        {{ props.label }}
      </span>
      <slot name="trailing" />
    </div>

    <!-- Second separator (for center placement only) -->
    <span v-if="props.placement === 'center'" :class="separator()" />
    <slot />
  </Primitive>
</template>
