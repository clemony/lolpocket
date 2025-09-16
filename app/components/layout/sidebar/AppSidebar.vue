<script lang="ts" setup>
import {
  MessagePanel,
  NavPanel,
  NotificationPanel,
  PocketPanel,
  SearchPanel,
} from '#components'
import { VisuallyHidden } from 'reka-ui'

const userMenu: DataObject[] = [
  {
    name: 'Navigation',
    icon: {
      name: 'lucide:gallery-vertical-end',
      class: 'size-5.5 ',
    },
    component: NavPanel,
  },
  {
    name: 'Search',
    icon: {
      name: 'mage:search',
      class: 'size-5.25  **:!stroke-[2]',
    },
    component: SearchPanel,
  },
  {
    name: 'Pockets',
    icon: {
      name: 'folder',
      class: '**:stroke-[2.21]',
    },
    component: PocketPanel,
  },

  {
    name: 'Inbox',
    icon: {
      name: 'lucide:mail',
      class: ' **:stroke-1.5',
    },
    value: 0,
    component: MessagePanel,
  },
  {
    name: 'Notifications',
    icon: {
      name: 'lucide:message-square',
      class: '**:stroke-[2.2]',
    },
    value: 0,
    component: NotificationPanel,
  },
]

const lastIndex = ref(0)
const currentHover = ref(null)
const activeItem = shallowRef()
const invert = ref(false)
const open = shallowRef(false)

// wrapper around sidebar + sheet
const sidebarWrapper = ref<HTMLElement | null>(null)
const wrapperHovered = useElementHover(sidebarWrapper, {
  delayEnter: 200,
  delayLeave: 100,
})

// close only when leaving the wrapper
watch(wrapperHovered, (hovering) => {
  if (!hovering)
    open.value = false
})

// open only when hovering a button
function handleButtonHover(item: any, i: number) {
  currentHover.value = i
  setTimeout(() => {
    if (currentHover.value == i) {
      i > lastIndex.value ? (invert.value = false) : (invert.value = true)
      lastIndex.value = i
      activeItem.value = item
      if (!open.value)
        open.value = true
    }
  }, 400)
}
</script>

<template>
  <div
    ref="sidebarWrapper"
    class="'h-screen min-w-16 w-15 z-10">
    <!-- This is the first sidebar -->
    <menu
      class="items-center py-3 justify-between z-10 flex flex-col w-15 h-full fixed top-0 left-0 border-r border-r-b3 !bg-b1 gap-1">
      <div class="flex grow flex-col gap-1">
        <Blink
          class="btn-square mb-3 size-11 p-0 grid place-items-center"
          variant="neutral"
          to="/">
          <h5 class="font-bold jusify-self-center absolute">
            LP
          </h5>
        </Blink>

        <Button
          v-for="(item, i) in userMenu"
          :key="item.name"
          as="li"
          size="icon"
          variant="ghost"
          :auto-focus="false"
          :class="
            cn('!p-0 grid !place-items-center size-11 btn-square', {
              'btn-active !border-b3': activeItem == item.component && open,
            })
          "
          :is-active="activeItem === item.component"
          @mouseleave="currentHover = null"
          @mouseenter="handleButtonHover(item.component, i)">
          <hicon
            :name="item.icon.name"
            :class="cn('text-bc size-5 ', item.icon.class)" />
        </Button>
      </div>
      <div class="justify-self-end">
        <SidebarUser />
      </div>
    </menu>

    <Sheet
      v-model:open="open"
      :modal="false">
      <Paper
        side="left"
        class="z-9 left-16 border-l-0 border-b3 flex flex-col">
        <VisuallyHidden>
          <SheetTitle>{{ activeItem.title }}</SheetTitle>
          <SheetDescription>{{ "description" }}</SheetDescription>
        </VisuallyHidden>
        <SlideInTopOutBottom
          :invert="invert"
          class="w-full">
          <component
            :is="activeItem"
            loading="lazy"
            :open="open"
            @close-sidebar="open = false" />
        </SlideInTopOutBottom>
      </Paper>
    </Sheet>
  </div>
</template>
