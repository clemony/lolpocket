<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { navGroup, navItem } from '@/types/pocketTypes'
import LinksJson from '@data/databaseLinks.json'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const size = computed(() => {
    const open = ref(as.sidebarOpen)
    return (
        open ? 'lg'
        : !open ? 'icon'
        : 'default'
    )
})
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel>Browse</SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="favorites" icon="teenyicons:heart-outline" />

            <Collapsible
                v-for="section in LinksJson"
                as-child
                :default-open="section.open"
                class="group">
                <SidebarMenuItem
                    :class="{
                        '-ml-2 !grid !aspect-square !size-12 !place-items-center':
                            !as.sidebarOpen,
                    }">
                    <CollapsibleTrigger as-child class="group">
                        <SidebarMenuButton
                            :size="as.sidebarOpen ? 'lg' : 'icon'"
                            :tooltip="section.name"
                            :class="{
                                '!grid !aspect-square !size-12 !place-items-center overflow-hidden':
                                    !as.sidebarOpen,
                            }">
                            <icon
                                :icon="section.icon"
                                :class="{
                                    'mt-3.5 -ml-6.25 !size-5 shrink-0':
                                        !as.sidebarOpen,
                                }" />
                            <span
                                class="capitalize"
                                :class="{
                                    '!invisible !opacity-0': !as.sidebarOpen,
                                }">
                                {{ section.name }}
                            </span>
                            <ExpandIndicator />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub v-if="section.links">
                            <SidebarMenuSubItem
                                v-for="link in section.links"
                                :key="link.name">
                                <RouterLink
                                    :to="{
                                        name: link.link,
                                        /*  hash: item.hash, */
                                    }">
                                    <SidebarMenuSubButton size="lg">
                                        <span class="">
                                            {{ link.name }}
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
