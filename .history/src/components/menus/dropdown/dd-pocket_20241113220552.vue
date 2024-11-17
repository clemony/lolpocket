<script setup lang="ts">
import { pocket } from 'types'
import { useSessionStore } from '@/Stores/sessionStore'
import { usePocketStore } from '@/Stores/pocketStore'
import { duplicatePocket } from '@lib/functions/PocketUtilities'
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
<DropdownMenuContent v-if="pocket" class='w-[--radix-dropdown-menu-trigger-width]  [&_svg]:size-4.5'>
    <slot name="first" />

    <DropdownMenuItem>
        <label class="flex size-full gap-2.5">
            <input type="checkbox" v-model="pocket.pinned" class="hidden" />
            <icon v-if="pocket.pinned == true" icon="iconoir:pin-solid" class="" />
            <icon v-else icon="iconoir:pin" class="size-4" />
            {{ pinText }}
        </label>
        <DropdownMenuShortcut>
            <icon icon="ph:option-bold" /> P
        </DropdownMenuShortcut>
    </DropdownMenuItem>

    <DropdownMenuItem @click.stop="doThis()">
        <DialogTrigger class='flex items-center gap-3'>



            <icon icon="ep:edit" class="" />
            <span class="-ml-[1px] capitalize"> Edit {{ props.type }}</span>
        </DialogTrigger>
        <DropdownMenuShortcut>
            <icon icon="ph:option-bold" /> E
        </DropdownMenuShortcut>
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem @click="duplicatePocket(pocket)" class='gap-3'>
        <icon icon="radix-icons:copy" class="=" />
        <span class="-ml-[1px]">Duplicate</span>
        <DropdownMenuShortcut>
            <icon icon="ph:option-bold" /> C
        </DropdownMenuShortcut>
    </DropdownMenuItem>

    <DropdownMenuItem>
        <icon icon="teenyicons:upload-outline" class="" />
        <span>Export</span>
        <DropdownMenuShortcut>
            <icon icon="ph:option-bold" /> X
        </DropdownMenuShortcut>
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <slot />

    <DropdownMenuItem @click="ps.deletePocket(pocket.key)">
        <icon icon="iconoir:bin-full" class="" />
        Trash Pocket
        <DropdownMenuShortcut>
            <icon icon="ph:option-bold" /> D
        </DropdownMenuShortcut>
    </DropdownMenuItem>
</DropdownMenuContent>
</template>

<style scoped></style>
