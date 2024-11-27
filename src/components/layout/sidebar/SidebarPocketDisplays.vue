<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
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
            iconClass="size-[13px]!" />

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
