<script lang="ts" setup>
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const layout = shallowRef<HTMLElement>(null)
const trigger = useTemplateRef<HTMLElement>('trigger')
const slug = computed (() => getSummonerSlug(as().account))
const hovered = ref<boolean>(false)
const { isOutside } = useMouseInElement(layout)
const triggerHovered = useElementHover(trigger, {
  delayEnter: 100,
  delayLeave: 100,
})

watch(() => isOutside.value, (newVal) => {
  console.log('🌱 - newVal:', newVal)
  if (newVal === true)
    ui().sidebarOpen = false
}, { immediate: false })

watch(() => triggerHovered.value, (newVal) => {
  if (newVal === true)
    ui().sidebarOpen = true
})
</script>

<template>
  <Sheet
    v-model:open="ui().sidebarOpen"
    :modal="false">
    <button
      ref="trigger"
      :class="cn(' opacity-0 hover:opacity-0 fixed group/trigger hover:border-l-3 hover:border-l-neutral transition-all duration-200 h-[calc(100vh-45px)] z-30 w-8 top-15 left-0', { 'pointer-events-none hidden': ui().sidebarOpen })">
    </button>
    <SheetTrigger as-child>
      <slot />
    </SheetTrigger>
    <SheetPortal>
      <SheetOverlay />
      <SheetContent
        side="left"
        class="p-0 !z-15 left-0  border-t-0  !min-w-100 shadow-none drop-shadow-md  drop-shadow-black/9 border-l-0 border-b3">
        <!-- required header (hidden) -->
        <HiddenDialogHeader
          title="lolpocket"
          desc="Navigate your pocket."
          class="sr-only" />
        <div
          ref="layout"
          class="absolute h-screen inset-0 px-2   scrollbar-hidden  scrollbar-none  pt-3 flex flex-col ">
          <div class="w-full px-1 mb-5">
            <h1 class="dss">
              LP
            </h1>
          </div>

          <!-- search buttton -->

          <SearchBox class="justify-between h-11 mx-1 fx-0 *:first:gap-4" />

          <!-- summoner linkies -->
          <div class="space-y-1 px-1 mb-4.5 mt-7">
            <SidebarBtnLink
              item="nexus"
              class="px-3.5 !gap-3 h-11" />
            <SidebarBtnLink
              v-if="slug"
              :link="`/summoner/${slug}`"
              class="px-3.5  h-11">
              <icon
                name="history"
                class="size-4.75" />
              Summoner Profile
            </SidebarBtnLink>
          </div>

          <NavPanel />
          <DropdownMenuSeparator class="-mx-3 mb-1" />
          <PocketPanel />
          <!-- summoner menu -->
          <DropdownMenuSeparator class="-mx-3  my-0" />

          <SidebarUser />
        </div>
      </SheetContent>
    </SheetPortal>
  </Sheet>
</template>

<style scoped>
.tab {
  --tab-border-color: var(--color-b3) !important;
  --tab-border-colors: var(--color-b3) !important;
  --tab-radius-min: 0.6rem !important;
}
</style>
