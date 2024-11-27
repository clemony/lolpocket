<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import type { navData } from 'types'
const nav: navData = [
    {
        name: 'Settings',
        url: '#',
        icon: 'ph:gear-six',
        items: [
            {
                name: 'General',
                url: 'settings',
                hash: '#general',
                icon: '',
            },
            {
                name: 'Appearance',
                url: 'settings',
                hash: '#appearance',
                icon: 'teenyicons:info-outline',
            },
            {
                name: 'Account',
                url: 'settings',
                hash: '#account',
                icon: 'teenyicons:at-outline',
            },
        ],
    },
]
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>Else</SidebarGroupLabel>

        <SidebarMenu class="mb-1">
            <Collapsible
                v-for="item in nav"
                :key="item.name"
                as-child
                :default-open="item.isActive"
                class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton :tooltip="item.name" class="py-5">
                            <icon :icon="item.icon" />
                            <span class="text-base">
                                {{ item.name }}
                            </span>
                            <icon
                                icon="teenyicons:left-small-outline"
                                class="ml-auto transition-transform duration-200 group-radix-state-open:-rotate-90" />
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
