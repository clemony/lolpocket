<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  size = "md",
  ui,
  as,
  variant = "ghost"
} = defineProps<{
  ui?: Record<string, HTMLAttributes["class"]>
  size?: ButtonProps["size"]
  as?: ButtonProps["as"]
  variant?: ButtonProps["variant"]
}>()

const { library } = useRoutes()
</script>

<template>
  <UButton
    v-for="item in library"
    :key="item.label"
    :size
    :as
    :icon="item.icon"
    :variant
    :label="item.label"
    :to="item?.to"
    :ui="{
      base: cn('w-full', ui?.base),
      label: cn('grow', ui?.label),
      leadingIcon: cn(
        '',
        item.label === 'Spells'
          ? '**:stroke-[1.8]'
          : item.label === 'Runes'
            ? 'scale-110'
            : '',
        ui?.leadingIcon
      )
    }" />
</template>
