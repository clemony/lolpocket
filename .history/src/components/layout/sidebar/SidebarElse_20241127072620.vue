<script setup lang="ts">
import type { navData } from 'types'
const items = [
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
]
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>Else</SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="about" icon="teenyicons:info-outline" />

            <Collapsible as-child :default-open="false" class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton tooltip="Settings" class="py-5">
                            <icon icon="ph:gear-six" />
                            <span class="text-base">Settings</span>
                            <ExpandIndicator />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarLink
                                v-for="item in items"
                                :key="item.name"
                                :name="item.name"
                                :to="item.url"
                                sub />
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
