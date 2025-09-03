<script lang="ts" setup>
import { MessageView, NavContent, NotificationView, PocketContent, SearchContent } from '#components'
import { useSidebar } from 'base/sidebar/sidebar-index'

const userMenu: DataObject[] = [
  {
    name: 'Search',
    icon: {
      name: 'mage:search',
      class: 'size-5 **:!stroke-[2]',
    },
    component: SearchContent,
  },
  {
    name: 'Navigation',
    icon: {
      name: 'lucide:compass',
      class: 'size-4.75',
    },
    component: NavContent,
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
const sidebar = shallowRef(null)
const activeItem = shallowRef(NavContent)
const { open, toggleSidebar, setOpen } = useSidebar()

const variants = {
  collapsed: {
    maxWidth: 'var(--sidebar-width-icon)',
    width: 'var(--sidebar-width-icon)',
  },
  open: {
    maxWidth: 'var(--sidebar-width)',
    width: 'var(--sidebar-width)',
  },
}

onMounted(() => {
  if (!as().settings?.lockSidebar)
    open.value = false
})

function handleClick(component) {
  console.log('🌱 - handleClick - component:', sidebar.value)
  activeItem.value = component
  setOpen(false)
  console.log('🌱 - handleClick - open.value:', open.value)
}
</script>

<template>
  <!-- outer sidebar -->
  <!--
    :while-hover="as().settings.lockSidebar ? " -->
  <Sidebar
    ref="sidebar"
    collapsible="icon"
    side="left"
    :class="cn('items-start   [&>[data-sidebar=sidebar]]:flex-row !flex-row md:flex-row w-full !bg-transparent  h-screen ',
               {
                 'max-w-[var(--sidebar-width)] w-[var(--sidebar-width)]': open,
                 'absolute top-0 left-0 z-30': !as().settings?.lockSidebar,
                 ' relative': !as().settings?.lockSidebar,
               })"
    variant="sidebar">
    <!-- This is the first sidebar -->
    <Sidebar
      collapsible="none"
      class="!w-[calc(3.7rem_+_1px)]  col-start-2 border-r border-r-b3 *:-ml-px !bg-b1 "
      :class="cn(' before:z-3 before:fixed before:w-[2px] before:h-[44px] before:pointer-events-none before:-right-[1px]  top-0 z-3 before:bg-b1',

                 'after:z-0 after:fixed after:w-[2px] after:h-[44px] after:pointer-events-none after:left-[45px] after:bg-b1 ',
      )"
      @click="toggleSidebar()"
      @dblclick="as().toggleSidebarLock">
      <SidebarHeader class=" after:size-10 after:pointer-events-none after:absolute after:top-7.75 after:left-7.75 after:bg-b1 after:mask-radial-at-bottom-right after:z-0 after:mask-radial-from-20% after:mask-radial-from-transparent after:mask-radial-to-b1 after:mask-radial-to-21% before:size-9.5 before:pointer-events-none  before:absolute before:bg-transparent before:z-1 before:top-14.5 before:left-14.5 before:rounded-full before:border-b3 before:mask-linear-136 before:mask-linear-from-20% before:mask-linear-to-21% before:border before:mask-linear-to-transparent shadow-none drop-shadow-none">
        <SidebarMenu class="z-1">
          <SidebarMenuItem>
            <SidebarMenuButton
              size="icon"
              variant="neutral"
              as-child>
              <NuxtLink
                to="/">
                <h5 class="font-bold jusify-self-center absolute">
                  LP
                </h5>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent class="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarMenuItem
                v-for="item in userMenu"
                :key="item.name"
                :auto-focus="false"
                as-child>
                <!--
                  v-element-hover="() => { activeItem = item.component } " -->
                <Button
                  size="icon"
                  variant="ghost"
                  :auto-focus="false"
                  :class="cn('!p-0 grid !place-items-center size-11 btn-square', { 'btn-active !border-b3': activeItem == item.component && open })"
                  :tooltip="h('div', { hidden: false }, item.name)"
                  :is-active="activeItem.name === item.name"

                  @click="handleClick(item.component)">
                  <hicon
                    :name="item.icon.name"
                    :class="cn('text-bc size-4.5', item.icon.class)" />
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <!--    <SidebarUser /> -->
      </SidebarFooter>
    </Sidebar>

    <!--  This is the second sidebar -->
    <LazySidebar
      class="overflow-hidden col-start-2 z-0 flex-1  h-screen w-full top-0 !bg-b1 "
      collapsible="none">
      <LazyTransitionFade
        class=""
        :duration="200">
        <component
          :is="activeItem"
          loading="lazy"
          :open="open" />
      </LazyTransitionFade>
    </LazySidebar>
    <SidebarRail class="!-right-2 focus:after:!bg-transparent focus:ring-0 focus-within:ring-0  focus:after:ring-0 focus-within:after:ring-0  focus:outline-0 focus-within:outline-0  focus:after:outline-0 focus-within:after:outline-0 border-0" />
  </Sidebar>
</template>