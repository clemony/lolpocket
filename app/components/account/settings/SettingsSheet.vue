<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot, VisuallyHidden } from 'reka-ui'
import {
  DrawerClose,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from 'vaul-vue'

const as = useAccountStore()
function handleChange(theme) {
  as.dataTheme = theme
  as.themeClass = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <Drawer direction="right">
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>

    <LazyDrawerContent side="right">
      <div class="grid max-w-140 h-screen max-h-screen gap-6 px-0 pt-6 overflow-hidden ">
        <DrawerHeader>
          <DrawerTitle>
            Settings
          </DrawerTitle>

          <VisuallyHidden>
            <DrawerDescription>Modify Account Details</DrawerDescription>
          </VisuallyHidden>
        </DrawerHeader>

        <SettingsAccount />

        <div class="w-full h-full px-6">
          <SettingsGeneral />

          <p class="font-semibold tracking-tight  text-5 w-full h-6 border-b border-b-b3 text-end -mb-6">
            Themes
          </p>
        </div>

        <ListboxRoot v-model:model-value="as.dataTheme" class="w-full   overflow-y-scroll overscroll-auto z-0 " :multiple="false" @entry-focus.prevent @update:model-value="handleChange(as.dataTheme)">
          <ListboxContent class="w-full grid py-8 gap-6  px-6">
            <ListboxItem v-for="theme in themes" :key="theme.name" :value="theme.name" class=" grid gap-3 rounded-box cursor-pointer  focus:outline-0 hover:border-b3  hover:bg-b3/30  py-1.5   shrink-0 w-full items-center  dst" :class="{ 'bg-b2 border-b3 shadow-sm inset-shadow-sides bg-noise inset-shadow-b3/10': theme.name == as.dataTheme }">
              <ThemeCard :theme="theme" />
            </ListboxItem>
          </ListboxContent>
        </ListboxRoot>

        <div class="h-8" />

        <div class="w-full left-0 justify-end grid border-t-b3/60 border-t  py-5 px-4  bg-b2/20 backdrop-blur-md  absolute bottom-0">
          <button class="btn btn-neutral px-8">
            Save
          </button>
        </div>
      </div>
    </LazyDrawerContent>
  </Drawer>
</template>