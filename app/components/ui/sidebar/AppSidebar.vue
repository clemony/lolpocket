<script lang="ts" setup>
import { MessageView, NavContent, NotificationView, SearchContent } from '#components'
import { vElementHover } from '@vueuse/components'
import { useSidebar } from 'base/sidebar/sidebar-index'

const userMenu: DataObject[] = [
  {
    name: 'Search',
    icon: {
      name: 'mage:search',
      class: 'size-5.5 **:stroke-[1.8]',
    },
    component: SearchContent,
  },
  {
    name: 'Navigation',
    icon: {
      name: 'lucide:compass',
      class: ' size-5',
    },
    component: NavContent,
  },
  {
    name: 'Quick Research',
    icon: {
      name: 'lucide:book-open',
      class: ' size-5.25 **:stroke-[1.6]',
    },
    component: NavContent,
  },
  {
    name: 'Pockets',
    icon: {
      name: 'folder',
      class: ' !size-5',
    },
    component: NavContent,
  },

  {
    name: 'Inbox',
    icon: {
      name: 'lucide:inbox',
      class: 'size-5 **:stroke-[1.6] ',
    },
    value: 0,
    component: MessageView,
  },
  {
    name: 'Notifications',
    icon: {
      name: 'lucide:message-square',
      class: '  size-5 ',
    },
    value: 0,
    component: NotificationView,
  },
]
const activeItem = shallowRef(NavContent)
const { open } = useSidebar()
</script>

<template>
  <HoverSidebar
    collapsible="icon"
    :class="cn('', { 'absolute h-screen  top-0 left-0 z-30': !as().settings.lockSidebar })">
    <!-- This is the first sidebar -->
    <Sidebar
      collapsible="none"
      class="!w-[calc(3.7rem_+_1px)] border-r border-r-b3 *:-ml-px"
      @dblclick="as().toggleSidebarLock">
      <SidebarHeader>
        <SidebarMenu>
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
                as-child>
                <Button
                  v-element-hover="() => { activeItem = item.component } "
                  size="icon"
                  variant="ghost"
                  :class="cn('!p-0 grid !place-items-center size-11 btn-square', { 'btn-active !border-b3': activeItem == item.component })"
                  :tooltip="h('div', { hidden: false }, item.name)"
                  :is-active="activeItem.name === item.name"
                  @click="() => { activeItem = item.component }">
                  <hicon
                    :name="item.icon.name"
                    :class="cn('', item.icon.class)" />
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>

    <!--  This is the second sidebar -->
    <Sidebar
      class=" flex-1 md:flex size-full overflow-hidden"
      collapsible="none"
      as-child>
      <TransitionScalePop
        :scale="0.96"
        :duration="200">
        <component
          :is="activeItem"
          :open="open" />
      </TransitionScalePop>
      <SidebarRail class="!-right-2 " />
    </Sidebar>
  </HoverSidebar>
</template>