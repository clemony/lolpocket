<script setup lang="ts">
import { colorModes } from "#layers/ui/app/config/colorMode"
import type { RadioGroupItemProps } from "reka-ui"
definePageMeta({
  title: "Theme",
  description: "Choose your app interface colors.",
  icon: "swatch",
  order: 4,
  path: "/settings/theme",
  prefix: "Settings"
})

const mode = useColorMode()
function handleChange(theme: string) {
  const { settings } = storeToRefs(user())
  if (settings.value?.theme) settings.value.theme = theme

  mode.preference = theme
}

const items = computed(() => colorModes.map((c) => ({ ui: { item: c } })))
</script>

<template>
  <div class="flex w-xl flex-wrap gap-6">
    <ThemeCard v-for="item in colorModes" :key="item" :mode="item" />
  </div>
</template>
