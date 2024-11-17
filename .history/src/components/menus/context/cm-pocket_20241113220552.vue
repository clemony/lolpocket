<script setup lang="ts">
import { computed } from 'vue'
import { pocket } from 'types'
import { useSessionStore } from '@/Stores/sessionStore'
import { usePocketStore } from '@/Stores/pocketStore'

const ps = usePocketStore()
const sn = useSessionStore()

const props = defineProps<{
    type?: string
    pocketKey: string
}>()

// Get the pocket by its key
const pocket = ps.getPocket(props.pocketKey)

function doThis() {
    if (pocket && props.type == 'navigate') {
        sn.navigateTo(
            `/pocket/${pocket.key}`,
            pocket.name,
            pocket.icon
        )
    }
}

const pinText = computed(() => {
    if (!pocket) {
        return
    }
    if (pocket.pinned == true) {
        return 'Unpin'
    } else {
        return 'Pin'
    }
})

const starred = ['']
</script>

<!------------------------⟢ menu ⟣------------------------->

<template>
<ContextMenuContent v-if="pocket">
    <slot name="first" />

    <ContextMenuItem>
        <label class="flex size-full gap-3">
            <input type="checkbox" v-model="pocket.pinned" class="hidden" />
            <icon v-if="pocket.pinned == true" icon="iconoir:pin-solid" class="size-3.5" />
            <icon v-else icon="iconoir:pin" class="size-3.5" />
            {{ pinText }}
        </label>
    </ContextMenuItem>

    <ContextMenuItem @click.stop="doThis()" class="capitalize">
        <icon icon="ep:edit" class="size-3.5" />
        <span class="-ml-[1px]"> Edit {{ props.type }}</span>
    </ContextMenuItem>

    <ContextMenuSeparator />

    <ContextMenuItem @click="ps.duplicatePocket(pocket)">
        <icon icon="radix-icons:copy" class="size-3.5" />
        <span class="-ml-[1px]">Duplicate</span>
    </ContextMenuItem>

    <ContextMenuItem>
        <icon icon="teenyicons:upload-outline" class="size-3.5" />
        <span>Export</span>
    </ContextMenuItem>

    <ContextMenuSeparator />

    <slot />

    <ContextMenuItem @click="ps.deletePocket(pocket.key)">
        <icon icon="iconoir:bin-full" class="size-3.5" />
        Trash Pocket
    </ContextMenuItem>
</ContextMenuContent>
</template>

<style scoped></style>
