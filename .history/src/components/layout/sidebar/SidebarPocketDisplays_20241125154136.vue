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
        iconFull: 'fluent:bin-recycle-full-20-regular',
        iconClass: '!size-[19px] scale-x-[114%] -ml-[0.2rem] -mr-px',
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
        <SidebarGroupLabel data-tauri-drag-region>Pockets</SidebarGroupLabel>

        <SidebarPockets
            :data="ps.pinned"
            title="Pinned"
            :key="ps.pinned"
            icon="bi:pin-angle" />

        <SidebarPockets
            :data="ps.general"
            title="Unsorted"
            :key="ps.general"
            icon="formkit:folder"
            iconClass="!size-[15px]" />

        <SidebarMenu>
            <SidebarMenuItem v-for="item in navPockets" :key="item.title">
                <SidebarMenuButton
                    as-child
                    @click="sn.navigateTo(item.url, item.title, item.icon)"
                    class="flex">
                    <SidebarMenuButtonChild>
                        <icon
                            v-if="item.iconFull && item.array.length"
                            :icon="item.iconFull"
                            :class="item.iconClass" />
                        <icon
                            v-else
                            :icon="item.icon"
                            :class="item.iconClass" />
                        <span>
                            {{ item.title }}
                        </span>

                        <SidebarMenuBadge v-if="item.array" class="mr-8">
                            {{ item.array.length }}
                        </SidebarMenuBadge>
                    </SidebarMenuButtonChild>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
