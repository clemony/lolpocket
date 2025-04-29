<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot, VisuallyHidden } from 'reka-ui'

const as = useAccountStore()
function handleChange(theme) {
  as.dataTheme = theme
  as.themeClass = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <Sheet>
    <SheetTrigger class="btn btn-lg btn-ghost w-full justify-start text-start">
      <icon name="codicon:color-mode" class=" dst mr-2 text-bc/70" />
      <span class="grow flex items-center text-3 tracking-tight font-medium">
        Theme
      </span>
      <icon name="right-sm" class="size-6" />
    </SheetTrigger>
    <LazyNestedSheetContent class="w-120 min-w-120 h-screen max-h-screen overflow-hidden p-0">
      <SheetHeader>
        <NestedSheetTitle>
          Themes
        </NestedSheetTitle>
        <VisuallyHidden>
          <SheetDescription>
            Choose a new look for your ui.
          </SheetDescription>
        </VisuallyHidden>
      </SheetHeader>

      <ListboxRoot v-model:model-value="as.dataTheme" class="w-full overflow-y-scroll overscroll-auto z-0 pb-4 px-6 h-screen max-h-screen " :multiple="false" @entry-focus.prevent @update:model-value="handleChange(as.dataTheme)">
        <ListboxContent class="w-full grid  pt-20 gap-6">
          <ListboxItem v-for="theme in themes" :key="theme.name" :value="theme.name" class=" grid gap-3 rounded-box cursor-pointer  focus:outline-0 hover:border-b3  hover:bg-b3/30  py-1.5   shrink-0 w-full items-center  dst" :class="{ 'bg-b2 border-b3 shadow-sm inset-shadow-sides bg-noise inset-shadow-b3/10': theme.name == as.dataTheme }">
            <ThemeCard :theme="theme" />
          </ListboxItem>
        </ListboxContent>
      </ListboxRoot>
    </LazyNestedSheetContent>
  </Sheet>
</template>