<script lang="ts" setup>
import { useSidebar } from '~/base/sidebar/utils'

const {
  toggleSidebar,
  isMobile,
  open,
  openMobile,
  setOpen,
  setOpenMobile,
  state,
} = useSidebar()
const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Sidebar
    variant="sidebar"
    :default-open="false"
    collapsible="icon"
    class="overflow-hidden max-h-[95vh] [&>[data-sidebar=sidebar]]:flex-row absolute border-b3"
    side="right">
    <SidebarRail />
    <Sidebar
      collapsible="none"
      class="hidden flex-1 md:flex pr-17">
      <SidebarHeader class="gap-3.5 border-b p-4 border-b3">
        <div class="flex w-full items-center justify-between">
          <h3>Filter</h3>
          <Label class="flex items-center text-2 font-medium">
            <span>{{ filters.purchasable ? "Purchasable" : "All" }}</span>
            <Switch
              v-model:model-value="filters.purchasable"
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
      <SidebarFooter>
        <Button
          variant="neutral"
          size="lg">
          Reset Filters
        </Button>
      </SidebarFooter>
    </Sidebar>

    <Sidebar
      collapsible="none"
      class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-l border-b3 absolute right-0 top-0">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              :class="cn('*:!bg-brightness-136', { 'btn-active': open })"
              size="icon"
              variant="shadow"
              @click="toggleSidebar()">
              <icon
                name="teenyicons:filter-outline"
                class="dst size-3.75" />
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
                  class="dst !size-5.5" />
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent class="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarMenuButton size="icon">
                <icon
                  name="calc"
                  class="!size-6" />
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </Sidebar>
</template>
