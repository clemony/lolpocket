<script setup lang="ts">
import { usePocketStore } from '@/client/stores/pocketStore'

const ps = usePocketStore()
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel>
            Pockets

            <!--    <SidebarGroupAction as-child>
                <Button
                    size="icon"
                    variant="default"
                    class="text-2 right-10.75 flex size-5.5">
                    <icon
                        icon="teenyicons:add-small-outline"
                        class="shrink-0" />
                </Button>
            </SidebarGroupAction> -->
        </SidebarGroupLabel>

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
