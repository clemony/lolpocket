<script setup lang="ts">
import { colorModes } from "#layers/ui/app/config/colorMode"
definePageMeta({
  title: "Theme",
  description: "Choose your app interface colors.",
  icon: "swatch",
  order: 4,
  path: "/settings/theme",
  prefix: "Settings",
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
  <URadioGroup
    :ui="{ fieldset: 'grid grid-cols-2 gap-2' }"
    :multiple="false"
    selection-behavior="replace"
    :items="colorModes"
    variant="card"
    @entry-focus.prevent
    @update:model-value="(e) => handleChange(e)">
    <template #label="item">
      <ThemeCard class="" :mode="item.item" />
    </template>
  </URadioGroup>
</template>
