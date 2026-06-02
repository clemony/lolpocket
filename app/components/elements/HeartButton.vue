<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<
    ButtonProps & {
      class?: HTMLAttributes["class"]
      side?: Side
      checked: boolean
      tooltipText?: string
    }
  >(),
  {
    variant: "outline",
    size: "sm",
    side: "bottom"
  }
)

const forwarded = reactiveOmit(props, "class", "checked", "tooltipText", "side")
const checked = defineModel<boolean>("checked")

onMounted(() => {
  checked.value = props.checked
})
</script>

<template>
  <LazyUTooltip :content="{ side }" as-child :text="props.tooltipText">
    <UButton
      :data-checked="props.checked"
      v-bind="forwarded"
      :icon="
        props.checked === true
          ? 'i-streamline-heart-solid'
          : 'i-streamline-heart'
      "
      as="label"
      :label="props.label"
      :disabled="props.disabled"
      :ui="{
        ...props?.ui,
        base: cn('', props.ui?.base, {
          'shadow-none inset-shadow-xs': props.disabled
        }),
        label: cn('font-semibold', props.ui?.label),
        leadingIcon: cn(
          'size-4! scale-98 **:stroke-[1.5]!',
          checked && props.color === 'neutral' ? 'light:text-dom-200/90' : '',
          checked ? 'animate-heartbeat text-dom-400/90!' : 'text-pc',
          props.ui?.leadingIcon
        )
      }">
      <input type="checkbox" :checked="checked" class="peer absolute hidden" />
      <span class="font-semibold text-pc!">{{ props.label }}</span>
    </UButton>
  </LazyUTooltip>
</template>
