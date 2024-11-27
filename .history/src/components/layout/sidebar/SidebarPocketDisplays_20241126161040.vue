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
        icon: 'fluent-mdl2:delete',
        iconFull: 'iconoir:bin-full',
        iconClass: '!size-[16px]  -ml-px ',
    },
    {
        title: 'Archive',
        url: '/archive',
        array: ps.archivePockets,
        icon: 'fluent:archive-20-regular',
        iconClass: '!size-[19px] -ml-2px -mr-px',
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
            icon="teenyicons:attach-outline" />

        <SidebarPockets
            :data="ps.general"
            title="Unsorted"
            :key="ps.general"
            icon="formkit:folder"
            iconClass="!size-[13px]" />

        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton class="flex">
                    <RouterLink to="/trash" class="flex gap-4" tooltip="Trash">
                        <icon icon="teenyicons:bin-outline" class="size-4.5" />
                        <span>Trash</span>

                        <SidebarMenuBadge class="mr-8">
                            {{ ps.trashPockets.length }}
                        </SidebarMenuBadge>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton class="flex">
                    <RouterLink to="/archive" class="flex gap-4">
                        <icon
                            icon="teenyicons:archive-outline"
                            class="size-4.5" />

                        <span>Archive</span>

                        <SidebarMenuBadge class="mr-8">
                            {{ ps.archivePockets.length }}
                        </SidebarMenuBadge>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
