<script lang="ts" setup>
const slug = computed (() => getSummonerSlug(as().account) || null)

const layout = shallowRef<HTMLElement>(null)
const trigger = useTemplateRef<HTMLElement>('trigger')

const hovered = refAutoReset<boolean>(false, 700)
const open = shallowRef<boolean>(false)

const { isOutside } = useMouseInElement(layout)

watch(() => isOutside.value, (newVal) => {
<<<<<<< HEAD
  if (newVal === true) {
    setTimeout(() => {
      if (isOutside.value) {
        open.value = false
        ui().sidebarOpen = false
        hovered.value = false
      }
    }, 300)
  }
}, { immediate: false })

watch(() => hovered.value, (newVal) => {
  console.log('🌱 - newVal:', newVal)
  if (newVal === true)
    ui().sidebarOpen = true
})

watch(() => hovered.value, (newVal) => {
  if (newVal === true) {
    setTimeout(() => {
      if (hovered.value) {
        ui().sidebarOpen = true
        hovered.value = false
      }
    }, 600)
  }
})
=======
  console.log('🌱 - newVal:', newVal)
  if (newVal === true)
    ui().sidebarOpen = false
}, { immediate: false })

watch(() => triggerHovered.value, (newVal) => {
  if (newVal === true)
    ui().sidebarOpen = true
})
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <Sheet
    v-model:open="ui().sidebarOpen"
    :modal="false">
<<<<<<< HEAD
    <div
      :class="cn(' pointer-events-none grid place-items-center  fixed group/trigger transition-all duration-200 h-screen z-30 w-8 top-0 left-0', { 'pointer-events-none hidden': ui().sidebarOpen && !hovered })">
      <button
        ref="trigger"
        class="pointer-events-auto grid h-32 w-full place-items-center "
        @focusin="hovered = true"
        @mouseenter="hovered = true">
        <span class="bg-tint-b3/50 border-b3 h-full w-3 rounded-full border" />
      </button>
    </div>
=======
    <button
      ref="trigger"
      :class="cn(' opacity-0 hover:opacity-0 fixed group/trigger hover:border-l-3 hover:border-l-neutral transition-all duration-200 h-[calc(100vh-45px)] z-30 w-8 top-15 left-0', { 'pointer-events-none hidden': ui().sidebarOpen })">
    </button>
>>>>>>> refs/remotes/origin/main
    <SheetTrigger as-child>
      <slot />
    </SheetTrigger>
    <SheetPortal>
      <SheetOverlay />
      <SheetContent
        side="left"
<<<<<<< HEAD
        :class="cn('p-0 !z-15 left-0 border-y-1 border-r rounded-r-xl !min-w-110 w-110 shadow-none drop-shadow-md  drop-shadow-black/9 border-l-0 border-b3', { '-translate-x-102': hovered })">
        <div
          ref="layout"
          class="grid size-full grid-cols-[45px_1fr] items-center">
          <!-- handle -->
          <div
            class="pointer-events-auto absolute right-0 z-2 my-auto grid h-32 w-8 place-items-center self-center ">
            <span class="bg-tint-b3/50 border-b3 h-full w-3 rounded-full border" />
          </div>

          <!-- required header (hidden) -->
          <HiddenDialogHeader
            title="lolpocket"
            desc="Navigate your pocket."
            class="sr-only absolute" />

          <!-- logo -->
          <div class="border-r-b3/80 flex h-screen w-full  flex-col items-center gap-y-3 border-r pt-3">
            <h1 class="dss mb-1">
              LP
            </h1>
            <BtnLink
              v-for="pocket in ps().pockets.filter(p => p.location.pinned)"
              :key="pocket.key"
              :to="`/pocket/${pocket.key}`"
              size="c-md"
              class="overflow-hidden border-none p-0 "
              variant="neutral">
              <PocketIcon
                :img="pocket.icon"
                class="size-full scale-120" />
            </BtnLink>
          </div>

          <div
            class=" scrollbar-hidden relative flex h-screen w-full flex-col  overflow-hidden pt-16 pr-2 ">
            <!-- search buttton -->

            <SearchBox class="fx-0 mr-1 ml-3 h-11 justify-between *:first:gap-4" />

            <!-- summoner linkies -->
            <div class="mt-5 space-y-1 px-3">
              <SidebarBtnLink
                item="nexus"
                class="text-4 !gap-3 px-3.5 [&_svg]:size-5.5 " />
              <SidebarBtnLink
                v-if="slug"
                :link="`/summoner/${slug}`"
                class="text-4 !gap-2.5 px-3.5 ">
                <icon
                  name="history"
                  class="size-5" />
                Summoner Profile
              </SidebarBtnLink>
            </div>

            <NavPanel />
            <!-- summoner menu -->

            <SidebarUser v-model:open="open" />
          </div>
=======
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
>>>>>>> refs/remotes/origin/main
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
