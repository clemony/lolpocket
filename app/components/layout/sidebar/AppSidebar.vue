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

/* watch(() => isOutside.value, (newVal) => {
  console.log('🌱 - newVal:', newVal)
  if (newVal === true)
    ui().sidebarOpen = false
}, { immediate: false }) */

watch(() => triggerHovered.value, (newVal) => {
  if (newVal === true)
    ui().sidebarOpen = true
})

const btns = [
  {
    name: 'Account',
    action: () => navigateTo('/settings/account'),
    icon: 'at',
  },
  {
    name: 'Settings',
    action: () => navigateTo('/settings'),
    icon: 'gear',
  },
  {
    name: 'Inbox',
    action: () => navigateTo('/account/inbox'),
    icon: 'mail',
  },
  {
    name: 'Search',
    action: () => ui().commandOpen = true,
    icon: 'search',
  },
]

function handleAction(action: () => void) {
  ui().sidebarOpen = false
  action()
}

const pinned = computed(() => {
  const p = ps().pockets.filter(p => p.location.pinned)
  console.log('🌱 - p:', p)
  return [p.slice(0, 3), p.slice(3, 7)]
})
</script>

<template>
  <Sheet
    v-model:open="ui().sidebarOpen"
    :modal="false">
    <button
      ref="trigger"
      :class="cn(' opacity-0 hover:opacity-0 fixed group/trigger hover:border-l-3 hover:border-l-neutral transition-all duration-200 h-screen z-30 w-10 top-0 left-0', { 'pointer-events-none hidden': ui().sidebarOpen })">
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
          class="absolute h-screen inset-0 px-3   scrollbar-hidden  scrollbar-none  py-3 flex flex-col gap-5">
          <div class="w-full px-1">
            <h1 class="dss">
              LP
            </h1>
          </div>

          <!-- search buttton -->
          <SearchBox class="justify-between h-11 *:first:gap-4" />

          <!-- summoner linkies -->
          <div class="space-y-1 my-2">
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

          <DropdownMenuSeparator class="-mx-3" />
          <!-- pockets -->
          <div class=" px-1 pb-0 gap-2 grid auto-rows-min ">
            <PocketPanel :pinned />
            <Collapsible
              v-model:open="ui().collapseStates.panel.pocket">
              <CollapsibleContent class=" gap-2 grid auto-rows-min ">
                <PocketPanel :pinned />
              </CollapsibleContent>
              <CollapsibleTrigger
                class="w-full mt-1 justify-end group/b"
                @mouseover="hovered = true"
                @mouseleave="hovered = false"
                @blur="hovered = false"
                @focus="hovered = true">
                <Button
                  class="relative  *:transition-all *:duration-200"
                  shape="square"
                  :variant="hovered ? 'btn' : 'ghost'"
                  size="xs">
                  <icon
                    name="more"
                    class="group-open/b:opacity-0 absolute" />
                  <icon
                    name="minus"
                    class="group-open/b:opacity-50 opacity-0 scale-x-0 group-open/b:scale-x-100 absolute" />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>

          <DropdownMenuSeparator class="-mx-3 -mt-3" />
          <NavPanel />
          <!-- summoner menu -->

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
