<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    ButtonProps & {
      modelValue?: boolean
    }
  >(),
  {
    variant: "outline",
    size: "sm",
    side: "bottom",
  }
)

const forwarded = reactiveOmit(props, "class", "modelValue")
const modelValue = defineModel<boolean>("modelValue", { default: false })

onMounted(() => {
  if (props.modelValue) modelValue.value = props.modelValue
})
</script>

<template>
  <UButton
    :data-checked="props.modelValue"
    v-bind="forwarded"
    :icon="props.modelValue === true ? 'i-heart-fill' : 'i-heart'"
    as="label"
    :label="props.label"
    :disabled="props.disabled"
    :ui="{
      ...props?.ui,
      base: cn(
        '',
        {
          'shadow-none inset-shadow-xs': props.disabled,
        },
        props.ui?.base
      ),
      label: cn('font-semibold', props.ui?.label),
      leadingIcon: cn(
        'size-4! scale-98 **:stroke-[11%]! group-checked/btn:animate-heartbeat group-checked/btn:text-dom-400/90!',
        modelValue && props.color === 'neutral' ? 'light:text-dom-200/90' : '',
        props.ui?.leadingIcon
      ),
    }">
    <input v-model="modelValue" type="checkbox" class="peer absolute hidden" />
    <slot :model-value>
      <span v-if="props?.label" class="font-semibold text-pc!">{{
        props.label
      }}</span>
    </slot>
  </UButton>
</template>
