<script lang="ts" setup>
const layout = shallowRef<HTMLElement>(null)
const trigger = useTemplateRef<HTMLElement>('trigger')
const slug = computed (() => getSummonerSlug(as().account))
const hovered = ref<boolean>(false)
const { isOutside } = useMouseInElement(layout)

const triggerHovered = useElementHover(trigger, {
  delayEnter: 600,
  delayLeave: 100,
})

watch(() => isOutside.value, (newVal) => {
  if (newVal === true) {
    ui().sidebarOpen = false
    hovered.value = false
  }
}, { immediate: false })

watch(() => hovered.value, (newVal) => {
  if (newVal === true)
    ui().sidebarOpen = true
})

watch(() => triggerHovered.value, (newVal) => {
  if (newVal === true) {
    ui().sidebarOpen = true
    hovered.value = false
  }
})
</script>

<template>
  <Sheet
    v-model:open="ui().sidebarOpen"
    :modal="false">
    <div
      :class="cn(' pointer-events-none grid place-items-center  fixed group/trigger transition-all duration-200 h-screen z-30 w-8 top-0 left-0', { 'pointer-events-none hidden': ui().sidebarOpen && !hovered })">
      <button
        ref="trigger"
        class="h-32 w-full grid place-items-center pointer-events-auto "
        @focusin="hovered = true"
        @mouseenter="hovered = true">
        <span class="h-full rounded-full w-3 bg-tint-b3/50 border-b3 border" />
      </button>
    </div>
    <SheetTrigger as-child>
      <slot />
    </SheetTrigger>
    <SheetPortal>
      <SheetOverlay />
      <SheetContent
        side="left"
        :class="cn('p-0 !z-15 left-0 border-y-1 border-r rounded-r-xl !min-w-110 w-110 shadow-none drop-shadow-md  drop-shadow-black/9 border-l-0 border-b3', { '-translate-x-102': hovered })">
        <div
          ref="layout"
          class="size-full grid grid-cols-[45px_1fr] items-center">
          <!-- handle -->
          <div
            class="h-32 z-2 self-center w-8 absolute right-0 my-auto grid place-items-center pointer-events-auto ">
            <span class="h-full rounded-full w-3 bg-tint-b3/50 border-b3 border" />
          </div>

          <!-- required header (hidden) -->
          <HiddenDialogHeader
            title="lolpocket"
            desc="Navigate your pocket."
            class="sr-only absolute" />

          <!-- logo -->
          <div class="h-screen flex flex-col items-center  border-r border-r-b3/80 gap-y-3 pt-3 w-full">
            <h1 class="dss mb-1">
              LP
            </h1>
            <BtnLink
              v-for="pocket in ps().pockets.filter(p => p.location.pinned)"
              :key="pocket.key"
              :to="`/pocket/${pocket.key}`"
              size="c-md"
              class="p-0 overflow-hidden border-none "
              variant="neutral">
              <PocketIcon
                :img="pocket.icon"
                class="size-full scale-120" />
            </BtnLink>
          </div>

          <div
            class=" h-screen w-full pr-2 overflow-hidden relative scrollbar-hidden  pt-16 flex flex-col ">
            <!-- search buttton -->

            <SearchBox class="justify-between h-11 ml-3 mr-1 fx-0 *:first:gap-4" />

            <!-- summoner linkies -->
            <div class="space-y-1 px-3 mt-5">
              <SidebarBtnLink
                item="nexus"
                class="px-3.5 !gap-3 text-4 [&_svg]:size-5.5 " />
              <SidebarBtnLink
                v-if="slug"
                :link="`/summoner/${slug}`"
                class="px-3.5 !gap-2.5 text-4 ">
                <icon
                  name="history"
                  class="size-5" />
                Summoner Profile
              </SidebarBtnLink>
            </div>

            <NavPanel />
            <!-- summoner menu -->
            <SidebarUser />
          </div>
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
