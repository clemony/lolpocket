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
      checked: ComputedRef<boolean>
      tooltipText?: string
    }
  >(),
  {
    variant: "outline",
    size: "sm",
    side: "bottom"
  }
)

const emit = defineEmits(["update:modelValue"])
const forwarded = reactiveOmit(props, "class")
</script>

<template>
  <LazyUTooltip :content="{ side }" as-child :text="props.tooltipText">
    <UButton
      v-bind="forwarded"
      :icon="
        props.checked.value === true
          ? 'i-streamline-heart-solid'
          : 'i-streamline-heart'
      "
      as="label"
      :ui="{
        ...props?.ui,
        base: cn(
          'w-10 justify-center gap-0 shadow-sm',
          props.checked.value && props.color === 'neutral'
            ? 'light:**:text-dom-200/90!'
            : '',
          props.checked.value ? '**:text-dom-400/90! ' : '',
          props.ui?.base
        ),
        label: cn('group-hover/btn:underline', props.ui?.label),
        leadingIcon: cn(
          'absolute size-4! scale-98 **:stroke-[1.5]!',
          props.checked.value && props.color === 'neutral'
            ? 'light:text-dom-200/90'
            : '',
          props.checked.value
            ? 'animate-heartbeat text-dom-400/90!'
            : 'text-pc',
          props.ui?.leadingIcon
        )
      }"
      @click="$emit('update:modelValue', !props.checked.value)">
      <input
        type="checkbox"
        :checked="props.checked.value"
        class="peer hidden" />
    </UButton>
  </LazyUTooltip>
</template>
