<script lang="ts" setup>
import type { ButtonProps, KbdProps } from "@nuxt/ui"

const props = defineProps<{
  kbds?: KbdProps["value"][]
  kbd?: KbdProps
  button?: ButtonProps
  modelValue: string | undefined
}>()

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
      ...props.kbd,
      variant: props?.kbd?.variant || "ghost",
      size: props?.kbd?.size || "lg",
      square: true,
      ui: {
        base: cn(
          "text-md! text-n5 group-hover/i:text-n1!",
          props.kbd?.ui?.base
        ),
      },
    }) as KbdProps
)
</script>

<template>
  <div
    v-if="props.modelValue === undefined"
    v-auto-animate
    class="flex items-center -space-x-px">
    <UKbd v-for="k in kbds" v-bind="kbd" :key="k" :value="k" />
  </div>
  <div v-else v-auto-animate class="flex items-center">
    <LazyInputClear v-bind="btnProps" @clear-input="emit('clearInput')" />
  </div>
</template>
