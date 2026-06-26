<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const props = withDefaults(defineProps<ButtonProps & {}>(), {
  icon: "i-filter",
  size: "md",
  variant: "ghost",
})

const delegated = reactiveOmit(props, "class", "label")

const open = shallowRef<boolean>(false)
</script>

<template>
  <UDropdownMenu v-model:open="open">
    <UTooltip :disabled="open" arrow :text="label">
      <UButton
        v-bind="delegated"
        :aria-label="props.label"
        :ui="{
          ...props.ui,
          leadingIcon: cn('size-4!', props.ui?.leadingIcon),
          base: cn(
            'anchor size-10! rounded-xl px-3 hover:shadow-none!',
            props.ui?.base
          ),
        }" />
    </UTooltip>
    <template #content> </template>
  </UDropdownMenu>
</template>
