<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  as,
  ui,
  variant = "soft"
} = defineProps<{
  as?: ButtonProps["as"]
  variant?: ButtonProps["variant"]
  ui?: ButtonProps["ui"]
}>()

const { tools } = useApp().routes
</script>

<template>
  <UButton
    v-for="item in tools"
    :key="item.label"
    :as
    :icon="item.icon"
    :ui="{
      base: cn(
        'btn-custom h-fit! w-full items-start justify-start gap-2 px-3 py-2 text-start',
        ui?.base
      ),
      leadingIcon: cn('mt-1.5 size-4.5', ui?.leadingIcon)
    }"
    :variant>
    <div :class="cn('flex flex-col', ui?.label)">
      <span class="font-semibold!">{{ item.label }}</span>
      <span class="text-xs opacity-50">{{ item.description }}</span>
    </div>
  </UButton>
</template>
