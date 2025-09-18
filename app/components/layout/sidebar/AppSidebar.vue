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
    component: NavPanel,
    icon: {
      name: 'lucide:gallery-vertical-end',
      class: 'size-5.5 ',
    },
  },
  {
    name: 'Search',
    component: SearchPanel,
    icon: {
      name: 'mage:search',
      class: 'size-5.25  **:!stroke-[2]',
    },
  },
  {
    name: 'Pockets',
    component: PocketPanel,
    icon: {
      name: 'folder',
      class: '**:stroke-[2.21]',
    },
  },

  {
    name: 'Inbox',
    component: MessagePanel,
    icon: {
      name: 'lucide:mail',
      class: ' **:stroke-1.5',
    },
    value: computed (() => as().account.inbox.messages.filter(m => !m.read).length).value,
  },
  {
    name: 'Notifications',
    component: NotificationPanel,
    icon: {
      name: 'lucide:message-square',
      class: '**:stroke-[2.2]',
    },
    value: computed (() => as().account.inbox.notifications.filter(n => !n.read).length).value,

  },
]

const currentHover = ref<number | null>(null)
const activeItem = shallowRef<Component | null>(null)

const sidebarWrapper = useTemplateRef<HTMLElement>('sidebarWrapper')
const wrapperHovered = useElementHover(sidebarWrapper, {
  delayEnter: 200,
  delayLeave: 100,
})

const dropdownOpen = computed(() => ui().sidebarStates.inboxDropdown)

const lastHoverIndex = ref<number | null>(null)

function handleButtonHover(item: any, i: number) {
  currentHover.value = i
  setTimeout(() => {
    if (currentHover.value === i) {
      activeItem.value = item
      lastHoverIndex.value = i
    }
  }, 400)
}

// derived "invert" based on direction
const invert = computed(() => {
  if (lastHoverIndex.value === null || currentHover.value === null)
    return false
  return currentHover.value < lastHoverIndex.value
})

const open = computed({
  get: () =>
    !!activeItem.value || wrapperHovered.value || dropdownOpen.value,
  set: (value: boolean) => {
    if (!value) {
      currentHover.value = null
      activeItem.value = null
      lastHoverIndex.value = null
    }
  },
})
</script>

<template>
  <div
    ref="sidebarWrapper"
    class="'h-screen min-w-16 w-15 z-10">
    <!-- This is the first sidebar -->
    <menu
      class="items-center py-3 justify-between z-10 flex flex-col w-15 h-full fixed top-0 left-0 border-r border-r-b3 !bg-b1 ">
      <div class="flex grow flex-col gap-2.5">
        <Blink
          class="btn-square mb-1 size-11 p-0 grid place-items-center"
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
          :variant="!item?.data ? 'outline' : 'outline'"
          :auto-focus="false"
          :class="
            cn('!p-0 grid  [&.btn-active]:**:!text-nc [&.btn-active]:!bg-neutral relative !place-items-center size-11 btn-square', {
              'btn-active !border-b3': activeItem == item.component && open,
            })
          "
          :is-active="activeItem === item.component"
          @mouseleave="currentHover = null"
          @mouseenter="handleButtonHover(item.component, i)">
          <Button
            v-if="item?.data"
            as="label"
            :name="`${item.name}-count`"
            class="rounded-full pointer-events-none ring ring-b2 h-4 text-[0.8] !border-0 absolute -right-0.75 -top-0.75 !px-1.25 py-1 grid place-items-center leading-0"
            variant="neutral">
            {{ item.data }}
          </Button>
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
        class="z-9 left-[45px] border-l-0 border-b3 flex flex-col">
        <HiddenDialogHeader
          :title="userMenu.find(m => m.component == activeItem)?.name || 'sidebar'"
          desc="keep it up!" />
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
