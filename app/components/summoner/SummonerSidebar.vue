<script lang="ts" setup>
const { navigateChildren, childRoutes } = useHandleSummoner()
</script>

<template>
  <NavigationMenu orientation="vertical">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu v-if="childRoutes">
          <Collapsible
            v-for="item in childRoutes"
            :key="item.name"
            as-child
            class="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="item.name.toString()">
                  <icon
                    v-if="item.meta?.icon"
                    :name="String(item.meta?.icon)" />
                  <span>{{ item.name }}</span>
                  <icon
                    name="right-sm"
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <!-- <SidebarMenuSub>
                  <SidebarMenuSubItem
                    v-for="subItem in item.items"
                    :key="subItem.title">
                    <SidebarMenuSubButton as-child>
                      <a :href="subItem.url">
                        <span>{{ subItem.title }}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub> -->
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
    </SidebarFooter>
    <SidebarRail />
  </NavigationMenu>
</template>