<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
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
        <SidebarGroupLabel>
            Etc
            <span class="text-3 tracking-tight">
                <span class="tracking-tighter">&nbsp.</span>
                . .
            </span>
        </SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="about" icon="teenyicons:info-outline" />

            <Collapsible as-child :default-open="false" class="group">
                <SidebarMenuItem
                    :class="{
                        '-ml-2 !grid !aspect-square !size-12 !place-items-center':
                            !as.sidebarOpen,
                    }">
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton
                            :size="as.sidebarOpen ? 'lg' : 'icon'"
                            tooltip="Settings"
                            class="py-5"
                            :class="{
                                '!grid !aspect-square !size-12 !place-items-center overflow-hidden':
                                    !as.sidebarOpen,
                            }">
                            <icon
                                icon="ph:gear-six"
                                :class="{
                                    'mt-3.5 !size-5.5 shrink-0':
                                        !as.sidebarOpen,
                                }" />
                            <span
                                class="text-3"
                                :class="{
                                    '!invisible hidden !opacity-0':
                                        !as.sidebarOpen,
                                }">
                                Settings
                            </span>
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
