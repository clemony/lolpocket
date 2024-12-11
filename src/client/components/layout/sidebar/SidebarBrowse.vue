<script setup lang="ts">
import { useQuery } from '@pinia/colada'
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

const {
    // main query properties
    state,
    asyncStatus,
    refresh,
    refetch,
    // convenient aliases
    error,
    data,
    status,
    isLoading,
    isPending,
    isPlaceholderData,
} = useQuery({
    key: ['links'],
    query: () => fetch('/api/links.json').then((res) => res.json()),
})
console.log('💠 - error:', error)
console.log('💠 - asyncStatus:', asyncStatus)

console.log('💠 - state:', state)
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>Browse</SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="favorites" icon="teenyicons:heart-outline" />

            <Collapsible
                v-for="section in state.data"
                as-child
                :default-open="section.open"
                class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child class="group">
                        <SidebarMenuButton :tooltip="section.name" class="py-5">
                            <icon :icon="section.icon" />
                            <span class="capitalize">{{ section.name }}</span>
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
                                    <SidebarMenuSubButton>
                                        <span class="">
                                            {{ link.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </RouterLink>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>

                        <SidebarMenuSub v-if="section.sub">
                            <Collapsible
                                v-for="sub in section.sub"
                                as-child
                                :default-open="sub.open"
                                class="group">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child class="group">
                                        <SidebarMenuButton
                                            :tooltip="sub.name"
                                            class="py-5">
                                            <span class="capitalize">
                                                {{ sub.name }}
                                            </span>
                                            <ExpandIndicator />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub v-if="sub.links">
                                            <SidebarMenuSubItem
                                                v-for="link in sub.links"
                                                :key="link.name"
                                                as-child>
                                                <SidebarMenuSubButton as-child>
                                                    <a
                                                        target="_blank"
                                                        :href="link.link"
                                                        class="flex items-center gap-1"
                                                        :class="`group/${link.name}`">
                                                        <img
                                                            :src="link.icon"
                                                            class="size-6 rounded-md" />
                                                        <span
                                                            class="truncate tracking-tight text-nowrap">
                                                            {{ link.name }}
                                                        </span>
                                                        <icon
                                                            icon="lucide:external-link"
                                                            class="!size-3 opacity-0"
                                                            :class="`group-hover/${link.name}:opacity-100`" />
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
