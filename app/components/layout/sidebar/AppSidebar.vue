<script lang="ts" setup>
const sidebarWrapper = shallowRef<HTMLElement | null>(null)
const trigger = useTemplateRef<HTMLElement>('trigger')
const slug = computed (() => getSummonerSlug(as().account))
const { isOutside } = useMouseInElement(sidebarWrapper)
const triggerHovered = useElementHover(trigger, {
  delayEnter: 200,
  delayLeave: 100,
})

watch(() => isOutside.value, (newVal) => {
  console.log('🌱 - newVal:', newVal)
  if (newVal === true)
    ui().sidebarOpen = false
})

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
</script>

<template>
  <!-- component sheet content -->
  <div
    ref="sidebarWrapper"
    class=" ">
    <button
      ref="trigger"
      :class="cn('fixed group/trigger hover:border-l-3 hover:border-l-neutral transition-all duration-200 h-screen z-30 w-4 top-0 left-0', { 'pointer-events-none': ui().sidebarOpen })">
    </button>
    <Sheet
      v-model:open="ui().sidebarOpen"
      :modal="false">
      <SheetTrigger as-child>
        <slot />
      </SheetTrigger>
      <SheetContent
        side="left"
        class="!z-15 left-0  border-t-0  !min-w-110 shadow-none drop-shadow-md p-0 drop-shadow-black/9 border-l-0 border-b3 flex flex-col ">
        <DialogHeader>
          <DialogTitle class="sr-only">
            lolpocket
          </DialogTitle>
          <DialogDescription class="sr-only">
            Navigate your pocket.
          </DialogDescription>

          <div class="bg-tint-b2/40 h-30 grid relative">
            <div class="tabs tabs-lift relative  tab-menu tabs-lg self-end ">
              <Separator class="absolute bottom-0 bg-b3/60" />
              <div class="tab tab-active relative w-29 h-15">
                <SummonerIcon class="size-22 absolute top-3 relative rounded-lg">
                  <span class="absolute badge badge-sm text-0 bg-b1/92 backdrop-blur bottom-0.5">
                    <SummonerLevel />
                  </span>
                </SummonerIcon>
              </div>
              <div class="tab hover:!bg-transparent cursor-default !text-bc !pt-4 justify-start grow h-15">
                <SummonerName
                  as="h2"
                  class="dst pl-1 text-bc/80" />
                <SummonerTag class="pl-1 italic" />
              </div>
            </div>
          </div>
          <div class="h-9   grid grid-cols-4 pr-4 pl-29 gap-3 max-w-full">
            <Button
              v-for="btn in btns"
              :key="btn.name"
              v-tippy="{ content: btn.name, theme: 'base', placement: 'bottom' }"
              variant="ghost"
              tabindex="-1"
              class="size-full "
              hover="btn"
              @click="handleAction(btn.action)">
              <icon
                :name="btn.icon"
                class="size-4.5" />
            </Button>
          </div>
        </DialogHeader>

        <aside>
          <div class="py-2 flex flex-col gap-2">
            <div class=" px-3 space-y-1 w-full">
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
            <PocketPanel />
            <NavPanel />
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  </div>
</template>

<style scoped>
.tab {
  --tab-border-color: var(--color-b3) !important;
  --tab-border-colors: var(--color-b3) !important;
  --tab-radius-min: 0.6rem !important;
}
</style>
