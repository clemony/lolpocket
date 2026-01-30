<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import type { VariantProps } from 'tailwind-variants'
import { Separator } from 'reka-ui'
import { tv } from 'tailwind-variants'

type SeparatorVariants = VariantProps<typeof separatorVariants>

const props = withDefaults(
  defineProps<
    SeparatorProps & {
      class?: HTMLAttributes['class']
      labelClass?: HTMLAttributes['class']
      label?: string
      color?: SeparatorVariants['color']
      placement?: SeparatorVariants['placement']
      size?: SeparatorVariants['size']
    }
  >(),
  {
    color: 'base',
  }
)

const separatorVariants = tv({
  defaultVariants: {
    color: 'base',
    placement: 'start',
    size: 0,
  },
  slots: {
    label: 'text-xxs! font-medium whitespace-nowrap select-none',
    separator: 'flex-1 shrink-0 bg-current',
    wrapper: 'relative flex w-full shrink-0 items-center',
  },
  variants: {
    color: {
      b3: {
        label: 'text-bc/60',
        separator: 'bg-b3',
      },
      base: {
        label: 'text-bc/60',
        separator: 'bg-b3/60',
      },
      neutral: {
        label: 'text-nc/50',
        separator: 'bg-nc/10',
      },
    },
    placement: {
      center: { label: 'order-2 ml-2', separator: 'order-1' },
      end: { label: 'order-last', separator: 'order-first' },
      start: { label: 'order-first mr-2', separator: 'order-last' },
    },
    size: {
      0: { wrapper: 'h-px' },
      1: { wrapper: 'h-2' },
      2: { wrapper: 'h-4' },
      3: { wrapper: 'h-5' },
      4: { wrapper: 'h-6' },
    },
  },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const styles = separatorVariants({
  color: props.color,
  placement: props.placement,
  size: props.size,
})

const { label, separator, wrapper } = styles
</script>

<template>
  <div
    :class="
      cn(
        wrapper(),
        props.orientation === 'vertical'
          ? 'h-full w-px flex-col justify-center'
          : 'h-px w-full flex-row items-center',
        props.class,
        'pointer-events-none',
      )
    "
  >
    <!-- First separator -->
    <Separator
      v-bind="delegatedProps"
      :orientation="props.orientation"
      :class="
        cn(
          separator(),
          props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
        )
      "
    />

    <!-- Label -->
    <span v-if="props.label" :class="cn(label(), labelClass)">
      {{ props.label }}
    </span>

    <!-- Second separator (for center placement only) -->
    <Separator
      v-if="props.placement === 'center'"
      v-bind="delegatedProps"
      :orientation="props.orientation"
      :class="
        cn(
          separator(),
          props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
        )
      "
    />
    <slot />
  </div>
</template>
