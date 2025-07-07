<script setup lang="ts">
import { ListboxContent, ListboxRoot } from 'reka-ui'

const as = useAccountStore()
function handleChange(theme) {
  as.dataTheme = theme
  as.themeClass = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
        <ListboxRoot v-model:model-value="as.dataTheme" class="w-full  py-4   z-0 " :multiple="false" @entry-focus.prevent @update:model-value="handleChange(as.dataTheme)">
          <ListboxContent class="w-full grid p-1 gap-6  grid-cols-2">
            <ThemeCard :theme="theme"  v-for="theme in themes" :key="theme.name" :active-theme="as.dataTheme" />
          </ListboxContent>
        </ListboxRoot>
</template>