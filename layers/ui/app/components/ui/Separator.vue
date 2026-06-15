<script setup lang="ts">
import { tv } from "tailwind-variants"
import type { SeparatorProps } from "~~/layers/ui/app/variants/separator"

const props = withDefaults(
  defineProps<
    SeparatorProps & {
      trailing?: string
    }
  >(),
  {
    position: "start",
    underline: false,
    labelPosition: "start",
  }
)

const separatorVariants = tv({
  slots: {
    root: "relative flex w-full max-w-full shrink-0 items-center",
    leading: "order-first",
    trailingIcon: "grid size-4 shrink-0 self-center justify-self-center",
    trailing:
      "pointer-events-none flex flex-nowrap items-center gap-1 font-medium whitespace-nowrap select-none",
    label:
      "pointer-events-none flex flex-nowrap items-center gap-1 font-medium whitespace-nowrap select-none",
    separator: "pointer-events-none flex-1 shrink-0 grow bg-current",
  },
  variants: {
    color: {
      base: {
        label: "text-pc",
        trailing: "text-pc",
        separator: "bg-p1",
      },
      neutral: {
        label: "text-nc/50",
        separator: "bg-nc/10",
        trailing: "text-nc/50",
      },
      secondary: {
        label: "text-pc",
        trailing: "text-pc",
        separator: "bg-p2",
      },
      tertiary: {
        label: "text-pc",
        trailing: "text-pc",
        separator: "bg-p3/80",
      },
      p4: {
        label: "text-pc",
        trailing: "text-pc",
        separator: "bg-p4/60",
      },
    },
    underline: {
      true: {
        label: "text-pc/60 group-hover/btn:text-pc group-hover/btn:underline",
        separator: "group-hover/collapse:brightness-86",
        leading: "**:text-pc/60 group-hover/btn:**:text-pc",
      },
    },
    labelVisible: {
      true: {},
      false: {
        label: "hidden",
      },
    },
    position: {
      center: {},
      end: {},
      start: {},
    },
    labelPosition: {
      center: {},
      end: {},
      start: {},
    },
    orientation: {
      vertical: {
        root: "flex-col justify-center",
        label: "flex flex-col items-center",
        separator: "h-full w-px",
      },
      horizontal: {
        root: "flex items-center",
        label: "flex items-center",
        separator: "h-px max-h-px w-full",
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
      position: "start",
      labelPosition: "end",
      class: {
        label: "order-last ml-3",
        separator: "order-1",
        leading: "order-first mr-1",
      },
    },
    {
      position: "start",
      labelPosition: "start",
      class: {
        label: "order-1 mr-2",
        leading: "order-first",
        separator: "order-2",
        trailing: "order-3 ml-2",
      },
    },
    {
      position: "start",
      labelPosition: "center",
      class: {
        label: "order-2 mx-2",
        separator: "order-1",
        leading: "order-first",
      },
    },
  ],
  defaultVariants: {
    color: "tertiary",
    position: "start",
    labelPosition: "start",
    size: "md",
    orientation: "horizontal",
  },
})

const styles = computed(() =>
  separatorVariants({
    color: props.color,
    position: props.position,
    size: props.size,
    orientation: props.orientation,
    underline: props.underline,
    labelVisible: Boolean(props.label),
    labelPosition: props.labelPosition,
  })
)
</script>

<template>
  <div :class="cn(styles.root({ class: [props.ui?.root] }), props.class)">
    <span :class="styles.separator({ class: props.ui?.separator })" />

    <Icon
      v-if="props.leadingIcon"
      :name="props.leadingIcon"
      :class="styles.leading({ class: props.ui?.leadingIcon })" />

    <span v-if="props.label" :class="cn(styles.label(), props.ui?.label)">
      <slot name="label"
        ><span>{{ props.label }}</span></slot
      >
    </span>

    <span
      v-if="props.position === 'center'"
      :class="styles.separator({ class: props.ui?.separator })" />

    <slot name="trailing">
      <span
        v-if="props.trailingIcon || props.trailing"
        :class="styles.trailing({ class: props.ui?.trailing })">
        <span v-if="props.trailing">{{ props.trailing }}</span>
        <Icon
          v-if="props.trailingIcon"
          :name="props.trailingIcon"
          :class="styles.trailingIcon({ class: props.ui?.trailingIcon })" />
      </span>
    </slot>
  </div>
</template>
