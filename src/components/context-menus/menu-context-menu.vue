<script setup lang="ts">
import { computed } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'

const ps = usePocketStore()
const sn = useSessionStore()

const props = defineProps<{
    type?: string
}>()

// Get the pocket by its key

function updateGrid() {
    //api.setGridOption('pinnedTopRowData', ps.pinnedTopRowData);
    //api.setGridOption('rowData', ps.pockets);
}

const starred = ['']
</script>

<!------------------------⟢ menu ⟣------------------------->

<template>
<ContextMenuContent>
    <ContextMenuItem> </ContextMenuItem>

    <ContextMenuSeparator />

    <ContextMenuItem>
        <icon icon="radix-icons:copy" class="size-3.5" />
        <span>Duplicate</span>
    </ContextMenuItem>

    <ContextMenuItem>
        <icon icon="teenyicons:upload-outline" class="size-3.5" />
        <span>Export</span>
    </ContextMenuItem>

    <ContextMenuSeparator />

    <slot />
</ContextMenuContent>
</template>

<style scoped></style>
