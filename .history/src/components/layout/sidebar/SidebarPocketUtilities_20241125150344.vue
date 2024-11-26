<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const sn = useSessionStore()
const navPockets = [
    {
        title: 'Trash',
        url: '/trash',
        array: ps.trashPockets,
        icon: 'fluent:bin-recycle-20-regular',
        iconClass: '!size-[20px] scale-x-[113%]',
    },
    {
        title: 'Archive',
        url: '/archive',
        array: ps.archivePockets,
        icon: 'fluent:archive-16-regular',
    },
]
</script>
<template>
    <SidebarGroup>
        <SidebarMenu>
            <SidebarMenuItem v-for="item in navPockets" :key="item.title">
                <SidebarMenuButton
                    as-child
                    @click="sn.navigateTo(item.url, item.title, item.icon)"
                    class="flex">
                    <SidebarMenuButtonChild>
                        <icon :icon="item.icon" :class="item.iconClass" />

                        <span>
                            {{ item.title }}
                        </span>

                        <SidebarMenuBadge v-if="item.array">
                            {{ item.array.length }}
                        </SidebarMenuBadge>
                    </SidebarMenuButtonChild>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
