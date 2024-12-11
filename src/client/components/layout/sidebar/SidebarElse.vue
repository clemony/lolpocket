<script setup lang="ts">
import type { navData } from 'types'
const items = [
    {
        name: 'general',
        url: 'settings',
        hash: '#general',
        icon: '',
    },
    {
        name: 'appearance',
        url: 'settings',
        hash: '#appearance',
        icon: 'teenyicons:info-outline',
    },
    {
        name: 'account',
        url: 'settings',
        hash: '#account',
        icon: 'teenyicons:at-outline',
    },
]
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            Else
            <span class="text-3 tracking-tight">
                <span class="tracking-tighter">&nbsp.</span>
                . .
            </span>
        </SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="about" icon="teenyicons:info-outline" />

            <Collapsible as-child :default-open="false" class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton tooltip="Settings" class="py-5">
                            <icon icon="ph:gear-six" />
                            <span class="text-3">Settings</span>
                            <ExpandIndicator />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarLink
                                v-for="item in items"
                                :name="item.name"
                                :to="item.url"
                                :hash="item.hash"
                                sub />
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
