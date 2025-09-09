<script lang="ts" setup>
import { MessageView, NavContent, NotificationView, PocketContent, SearchContent } from '#components'

const userMenu: DataObject[] = [
  {
    name: 'Navigation',
    icon: {
      name: 'lucide:gallery-vertical-end',
      class: 'size-5.5 ',
    },
    component: NavContent,
  },
  {
    name: 'Search',
    icon: {
      name: 'mage:search',
      class: 'size-5.25  **:!stroke-[2]',
    },
    component: SearchContent,
  },
  {
    name: 'Pockets',
    icon: {
      name: 'folder',
      class: '**:stroke-[2.21]',
    },
    component: PocketContent,
  },

  {
    name: 'Inbox',
    icon: {
      name: 'lucide:mail',
      class: ' **:stroke-1.5',
    },
    value: 0,
    component: MessageView,
  },
  {
    name: 'Notifications',
    icon: {
      name: 'lucide:message-square',
      class: '**:stroke-[2.2]',
    },
    value: 0,
    component: NotificationView,
  },
]

const activeItem = shallowRef()

const open = shallowRef(false)
const target = shallowRef<HTMLButtonElement>(null)
const isHovered = useElementHover(target, { delayEnter: 500, delayLeave: 500 })

watch(() => isHovered.value, (newVal) => {
  if (newVal == true)
    open.value = true
})
</script>

<template>
  <div
    :class="cn('h-screen min-w-16 w-16 z-10')">
    <!-- This is the first sidebar -->
    <menu
      class="items-center py-3 justify-between  flex flex-col w-16 h-full fixed top-0 left-0 border-r border-r-b3 !bg-b1 gap-1">
      <div class=" flex grow flex-col gap-1">
        <Blink
          class="btn-square  mb-3 size-11 p-0 grid place-items-center "
          variant="neutral"
          to="/">
          <h5 class="font-bold  jusify-self-center absolute">
            LP
          </h5>
        </Blink>

        <Button
          v-for="item in userMenu"
          :key="item.name"
          ref="target"
          as="li"
          size="icon"
          variant="ghost"
          :auto-focus="false"
          :class="cn('!p-0 grid !place-items-center size-11 btn-square', { 'btn-active !border-b3': activeItem == item.component && open })"
          :is-active="activeItem === item.component"
          @mouseover="activeItem = item.component">
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
      <component
        :is="activeItem"
        loading="lazy"
        :open="open"
        @mouseleave="open = false" />
    </Sheet>
  </div>
</template>