<script setup lang="ts">
import { ListboxContent, ListboxRoot } from 'reka-ui'

const as = useAccountStore()
function handleChange(theme) {
  as.settings.theme = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <ListboxRoot
    v-model:model-value="as.settings.theme"
    class="w-full  py-4   z-0 "
    :multiple="false"
    @entry-focus.prevent
    @update:model-value="handleChange(as.settings.theme)">
    <ListboxContent class="w-full grid p-1 gap-6  grid-cols-2">
      <ThemeCard
        v-for="theme in themes"
        :key="theme.name"
        :theme="theme"
        :active-theme="as.settings.theme" />
    </ListboxContent>
  </ListboxRoot>
</template>