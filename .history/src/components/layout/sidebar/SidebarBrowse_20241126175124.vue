<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import type { navData } from 'types'
const nav: navData = [
    {
        name: 'Database',
        url: '',
        icon: 'qlementine-icons:drive-16', //cil:save
        isActive: true,

        items: [
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
        ],
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
                            <span class="text-base">Database</span>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem
                                v-for="subItem in item.items"
                                :key="subItem.name">
                                <RouterLink
                                    :to="{
                                        name: subItem.url,
                                        hash: subItem.hash,
                                    }">
                                    <SidebarMenuSubButton>
                                        <!--     <icon :icon="subItem.icon" /> -->
                                        <span class="text-base">
                                            {{ subItem.name }}
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
