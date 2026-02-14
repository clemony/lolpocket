<script setup lang="ts">
import { ListboxContent, ListboxRoot } from "reka-ui"

definePageMeta({
  title: "Theme",
  description: "Choose your app interface colors.",
  icon: "swatch",
  listClass: "**:stroke-[1.5] !size-4.75 -mr-0.25",
  path: "/settings/theme",
})

const mode = useColorMode()
function handleChange(theme: string) {
  const { settings } = storeToRefs(user())
  if (settings.value?.theme) settings.value.theme = theme

  mode.preference = theme
}
</script>

<template>
  <URadioGroup
    class="z-0 w-full py-4"
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
