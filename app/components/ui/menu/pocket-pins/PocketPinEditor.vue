<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'
import type { DraggableEvent } from 'vue-draggable-plus'
import { VueDraggable } from 'vue-draggable-plus'

const ps = usePocketStore()
const as = useAccountStore()
const allKeys = computed (() => [...ps.pockets.map(p => p.key).filter(p => !as.userAccount.pockets.pinned.includes(p))])
console.log('💠 - allKeys:', allKeys)

// as.userAccount.pockets.pinned = []
const pocketKeys = ref(allKeys.value)
const pinnedKeys = ref([...as.userAccount.pockets.pinned])

function addPin(e, from, to) {
  const data = from[e.oldDraggableIndex]
  from.splice(e.oldDraggableIndex, 1)
  to.splice(e.newDraggableIndex, 0, data)
}

watch(() => allKeys.value, (newVal) => {
  if (newVal)
    pocketKeys.value = newVal
})

const editor = [
  {
    name: 'All',
    model: pocketKeys.value,
    from: as.userAccount.pockets.pinned,
    value: pocketKeys.value,
    class: 'col-start-1',
    indicatorClass: '-translate-x-9.5   z-3"',
    iconClass: 'rotate-90 *:text-b1',
    viewportClass: '-translate-y-129.5 -translate-x-58.5 w-20',
  },
  {
    name: 'Pinned',
    model: pinnedKeys.value,
    from: pocketKeys.value,
    value: as.userAccount.pockets.pinned,
    class: 'col-start-3 max-h-76',
    indicatorClass: 'translate-x-88   z-3',
    iconClass: '-rotate-90 *:text-b1',
    viewportClass: '-translate-y-130 translate-x-58.75',
  },
]
</script>

<template>
  <ResponsiveDialog>
    <ResponsiveDialogTrigger>
      <slot />
    </ResponsiveDialogTrigger>

    <LazyResponsiveDialogContent side="bottom" class="w-180 min-w-180 h-136 focus:outline-none flex flex-col gap-10 px-7 ">
      <ResponsiveDialogHeader title="Edit Pocket Pins" description="Select and organize your favorite pockets for easy access." class="[&_h1]:text-6" />

      <div class="grid grid-cols-[1fr_28px_1fr] w-full h-110">
        <NavigationMenu
          v-for="column, i in editor"
          :key="i"
          disable-pointer-leave-close
          orientation="vertical"
          :delay-duration="1200"
          :skip-delay-duration="0"
          :class="cn('min-w-full max-w-full size-full relative  max-h-100', column.class)">
          <div class="w-full justify-between items-center rounded-t-box border-t border-x border-b3/60 overflow-hidden flex -z-1 no-drag absolute bg-b2/40 z-1 py-2 backdrop-blur-md top-0 left-0  px-6">
            <h4 class="text-4 ">
              {{ column.name }}
            </h4>

            <div v-if="i == 1" class="flex items-center drop-shadow-xs   join **:font-semibold rounded-lg    **:text-3 h-5.5  ">
              <div class="join-item badge badge-n1 border-[color-mix(var(--color-n1),var(--color-white)_20%)]">
                <span class="z-1">
                  {{ as.userAccount.pockets.pinned.length }}
                </span>
              </div>

              <span class="flex items-center badge border-b4 join-item z-0">
                <!-- <icon name="slash" class="size-4.5 " /> -->
                5
              </span>
            </div>
          </div>

          <VueDraggable
            v-model="column.model"
            ghost-class=""

            drag-class=""
            group="keys"
            target=".target"
            chosen-class=""
            filter=".no-drag"
            :sortable="false"
            class="w-full z-0  h-full *:w-full inset-shadow-sm inset-shadow-black/3 field-box"
            @add="addPin($event, column.from, column.value)">
            <NavigationMenuList

              class="flex flex-col scrollbar-hidden  max-h-100 gap-1 w-full h-100 px-2 pb-2 pt-9.5 items-start justify-start overflow-y-auto target">
              <PocketPeek v-for="pocketKey in column.value" :key="pocketKey" :pocket-key="pocketKey" />

              <NavigationMenuIndicator orientation="vertical" :class="column.indicatorClass" :icon-class="column.iconClass" />
            </NavigationMenuList>

            <NavigationMenuViewport align="start" :class="column.viewportClass" />
          </VueDraggable>
        </NavigationMenu>

        <div class="w-full grid place-items-center dst h-100 opacity-40 row-start-1 col-start-2">
          <icon name="tdesign:swap" class="" />
        </div>
      </div>
    </LazyResponsiveDialogContent>
  </ResponsiveDialog>
</template>