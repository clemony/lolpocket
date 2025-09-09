<script lang="ts" setup>
import { NavContent } from '#components'

const userMenu: DataObject[] = [
  {
    name: 'Navigation',
    icon: {
      name: 'lucide:gallery-vertical-end',
      class: 'size-5.5',
    },
    component: NavContent,
  },
  {
    name: 'Search',
    icon: {
      name: 'mage:search',
      class: 'size-5 **:!stroke-[2]',
    },
    component: 'SearchContent',
  },
  {
    name: 'Pockets',
    icon: {
      name: 'folder',
      class: '**:stroke-[2.21]',
    },
    component: 'PocketContent',
  },

  {
    name: 'Inbox',
    icon: {
      name: 'lucide:mail',
      class: ' **:stroke-1.5',
    },
    value: 0,
    component: 'MessageView',
  },
  {
    name: 'Notifications',
    icon: {
      name: 'lucide:message-square',
      class: '**:stroke-[2.2]',
    },
    value: 0,
    component: 'NotificationView',
  },
]
const sidebar = shallowRef(null)
const activeItem = shallowRef()

function handleClick(component) {
  console.log('🌱 - handleClick - component:', sidebar.value)
  activeItem.value = component
}

const open = ref(false)
</script>

<template>
  <div
    :class="cn('h-screen min-w-16 w-16 z-10')">
    <!-- This is the first sidebar -->
    <menu
      class="items-center py-3 justify-start  flex flex-col w-16 h-screen fixed top-0 left-0 border-r border-r-b3 !bg-b1 gap-1">
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
        as="li"
        size="icon"
        variant="ghost"
        :auto-focus="false"
        :class="cn('!p-0 grid !place-items-center size-11 btn-square', { 'btn-active !border-b3': activeItem == item.component && open })"
        :is-active="activeItem === item.component"
        @mouseover="() => {
          activeItem = item.component
          open = true
        }">
        <hicon
          :name="item.icon.name"
          :class="cn('text-bc size-4.5', item.icon.class)" />
      </Button>

      <!--    <SidebarUser /> -->
    </menu>

    <!--  This is the second sidebar -->
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