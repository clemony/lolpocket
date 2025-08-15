<script lang="ts" setup>
import { useSidebar } from 'base/sidebar/utils'

const is = useItemStore()

const {
  state,
  open,
  setOpen,
  openMobile,
  setOpenMobile,
  isMobile,
  toggleSidebar,
} = useSidebar()
</script>

<template>
  <Sidebar
    variant="sidebar"
    :default-open="false"
    collapsible="icon"
    class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row absolute border-b3"
    side="right">
    <SidebarRail />
    <Sidebar
      collapsible="none"
      class="hidden flex-1 md:flex pr-17">
      <SidebarHeader class="gap-3.5 border-b p-4  border-b3">
        <div class="flex w-full items-center justify-between">
          <div class="text-3 font-medium  border-b3/80">
            hi
          </div>
          <Label class="flex items-center  text-2 font-medium">
            <span>{{ is.itemFilter.purchasable ? 'Purchasable' : 'All' }}</span>
            <Switch
              v-model:model-value="is.pItemFilter.purchasable"
              class="dst ml-2" />
          </Label>
        </div>
        <SidebarInput placeholder="Type to search..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup class="px-0">
          <SidebarGroupContent>
            <PocketItemStats />

            <ItemMapFilter>
              <SelectValue />
            </ItemMapFilter>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    <Sidebar
      collapsible="none"
      class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-l  border-b3 absolute right-0 top-0">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              :class="cn('', { 'btn-active': open })"
              size="icon"
              @click="toggleSidebar()">
              <icon
                name="teenyicons:filter-outline"
                class="dst  size-3.75 " />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent class="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarMenuButton
                variant="neutral"
                size="icon">
                <icon
                  name="search"
                  class="dst  !size-5.5" />
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent class="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarMenuButton
                v-for="stat in itemStatsMin"
                :key="stat.ids[0]"
                size="icon"
                :value="stat.ids[0]">
                <hicon
                  :name="stat.icon"
                  :class="cn('size-4.5 opacity-80 dst', stat.class)" />
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </Sidebar>
</template>