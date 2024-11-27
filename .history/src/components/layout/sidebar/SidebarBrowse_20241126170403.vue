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
            <SidebarMenuItem class="">
                <RouterLink to="/favorites" activeClass="bg-base-200/90">
                    <SidebarMenuButton class="py-5" tooltip="Favorite Things">
                        <icon icon="teenyicons:heart-outline" />
                        <span class="text-base">Favorites</span>

                        <SidebarMenuBadge>
                            <SidebarMenuLoves />
                        </SidebarMenuBadge>
                    </SidebarMenuButton>
                </RouterLink>
            </SidebarMenuItem>

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
