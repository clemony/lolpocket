<script setup lang="ts">
import { navGroup, navItem } from 'types'

const items = [
    {
        name: 'Champions',
        url: 'champions',
        icon: '',
    },
    {
        name: 'Items',
        url: 'items',
        icon: '',
    },
    {
        name: 'Runes',
        url: 'runes',
        icon: '',
    },

    {
        name: 'Spells',
        url: 'spells',
        icon: '',
    },
]
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>Browse</SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="favorites" icon="teenyicons:heart-outline" />

            <Collapsible as-child :default-open="true" class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton tooltip="Database" class="py-5">
                            <icon icon="qlementine-icons:drive-16" />
                            <span>Database</span>
                            <ExpandIndicator />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem
                                v-for="item in items"
                                :key="item.name">
                                <RouterLink
                                    :to="{
                                        name: item.url,
                                        /*  hash: item.hash, */
                                    }">
                                    <SidebarMenuSubButton>
                                        <!--     <icon :icon="item.icon" /> -->
                                        <span class="text-base">
                                            {{ item.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </RouterLink>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
