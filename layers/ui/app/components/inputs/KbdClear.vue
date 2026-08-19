<script lang="ts" setup>
import type { ButtonProps, KbdProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    KbdProps & {
      kbds?: KbdProps["value"][]
      button?: ButtonProps
      modelValue: string | undefined
      square?: boolean
    }
  >(),
  {
    color: "transparent",
    variant: "ghost",
    size: "lg",
    square: true,
  }
)

const emit = defineEmits(["clearInput"])

const btnProps = computed<ButtonProps>(() => ({
  ...props.button,
  variant: "ghost",
  ui: {
    ...props.button?.ui,
    base: cn(
      "rounded-lg border border-transparent hover:border-p5 hover:shadow-xs [&_svg]:hover:opacity-60",
      props.button?.ui?.base
    ),
  },
  color: "transparent",
}))
const kbd = computed<KbdProps>(
  () =>
    ({
      variant: props?.variant,
      size: props?.size,
      square: props?.square,
      ui: {
        base: cn("text-md! text-n5 group-hover/i:text-n1!", props.ui?.base),
      },
    }) as KbdProps
)
</script>

<template>
  <div
    v-if="props.modelValue === undefined || !props.modelValue"
    v-auto-animate
    :class="
      cn('flex items-center -space-x-px', {
        'space-x-px':
          props.variant !== 'ghost' || props.color !== 'transparent',
      })
    ">
    <UKbd v-for="k in kbds" v-bind="kbd" :key="k" :value="k" />
  </div>
  <div v-else v-auto-animate class="flex items-center">
    <LazyInputClear v-bind="btnProps" @clear-input="emit('clearInput')" />
  </div>
</template>
