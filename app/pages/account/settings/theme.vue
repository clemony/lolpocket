<script setup lang="ts">
import { themes } from '#shared/appdata'
import { ListboxContent, ListboxRoot } from 'reka-ui'

definePageMeta({
  name: 'theme',
  path: '/settings/theme',
  icon: 'gear',
  description: 'Choose your app interface colors.',
})

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
    selection-behavior="replace"

    @entry-focus.prevent
    @update:model-value="handleChange(as.settings.theme)">
    <ListboxContent class="w-fit grid gap-y-10 gap-x-14 grid-cols-2 ">
      <ListboxItem
        v-for="theme in themes"
        :key="theme.name"
        :value="theme.name"
        class="grid size-full !border-transparent group/label  h-max items-center ">
        <ThemeCard
          class=" "
          :theme="theme"
          :active-theme="as.settings.theme" />
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>