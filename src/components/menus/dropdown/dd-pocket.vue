<script setup lang="ts">
import { computed } from 'vue'
import { pocket } from 'types'
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
<DropdownMenuContent v-if="pocket" class='w-[--radix-dropdown-menu-trigger-width]'>
    <slot name="first" />

    <DropdownMenuItem>
        <label class="flex size-full gap-3">
            <input type="checkbox" v-model="pocket.pinned" class="hidden" />
            <icon v-if="pocket.pinned == true" icon="iconoir:pin-solid" class="size-3.5" />
            <icon v-else icon="iconoir:pin" class="size-3.5" />
            {{ pinText }}
        </label>
    </DropdownMenuItem>

    <DropdownMenuItem @click.stop="doThis()">
        <DialogTrigger class='flex items-center gap-3'>



            <icon icon="ep:edit" class="size-3.5" />
            <span class="-ml-[1px] capitalize"> Edit {{ props.type }}</span>
        </DialogTrigger>
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem @click="ps.duplicatePocket(pocket)" class='gap-3'>
        <icon icon="radix-icons:copy" class="size-3.5" />
        <span class="-ml-[1px]">Duplicate</span>
    </DropdownMenuItem>

    <DropdownMenuItem>
        <icon icon="teenyicons:upload-outline" class="size-3.5" />
        <span>Export</span>
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <slot />

    <DropdownMenuItem @click="ps.deletePocket(pocket.key)">
        <icon icon="iconoir:bin-full" class="size-3.5" />
        Trash Pocket
    </DropdownMenuItem>
</DropdownMenuContent>
</template>

<style scoped></style>
