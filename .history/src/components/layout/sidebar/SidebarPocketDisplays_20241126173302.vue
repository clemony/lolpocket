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
            <SidebarLink
                to="trash"
                icon="teenyicons:bin-outline"
                :badge="ps.trashPockets.length" />

            <SidebarLink
                to="archive"
                icon="teenyicons:archive-outline"
                :badge="ps.archivePockets.length" />
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
