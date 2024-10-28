<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { usePocketStore } from '@stores/pocketStore'
import { Item } from 'types'

import { blur } from '@utils/utils'

const gs = useGeneralStore()
const ps = usePocketStore()

const props = defineProps<{
    params?: {
        data: {
            name: string
            notes: string
            type: string
            pinned: boolean
            key: string
            items: {
                items: Item[]
            }
        }
        api: any
        node: any
    }
    pocketKey?: string
}>()

const pocket = computed(() => {
    if (props.params) {
        return ps.getPocket(props.params.data.key)
    } else if (props.pocketKey) {
        return ps.getPocket(props.pocketKey)
    }
})

const name = ref('')

function doThis() {
    console.log(name)
    ps.$persist
}
</script>

<template><!------------------------⟢ name ⟣------------------------->
<ContextMenu>
    <ContextMenuTrigger v-if="pocket" class="grid size-full grid-rows-2 justify-start overflow-hidden" @click.stop>
        <div class="group/name relative flex items-end pt-2">
            <input v-model="pocket.name"
                class="peer z-0 h-6 w-full truncate rounded-xs border border-transparent bg-transparent px-[4px] py-1 align-baseline !text-[13px] font-medium capitalize outline-none ring-0 transition-all duration-300 hover:!cursor-text hover:border hover:border-base-300/50 focus:border focus:border-base-300/50"
                @keydown.enter.prevent="blur" spellcheck="false" />

            <!-- 
                <icon icon='basil:edit-alt-solid'
                    class="absolute opacity-0 group-hover/name:opacity-50 w-3.5 right-[4px] top-[2px] peer-focus:opacity-0 bg-base-100 h-full brightness-95 z-0" /> -->

            <button @click="pocket.name = ''"
                class="absolute -top-[3px] right-[0px] z-10 size-4 h-full w-4.5 opacity-0 *:absolute hover:cursor-pointer hover:opacity-90 group-hover/name:opacity-70 peer-focus:opacity-70">
                <icon icon="teenyicons:x-small-outline" />
            </button>
        </div>
        <div class="flex h-full w-full self-start pb-1.5 ">
            <SelectClass type="hover" :pocketKey="pocket.key" class="w-full" />
        </div>

        <CmPocket type="Pocket" :pocketKey="pocket.key">
            <CmOptionName :pocket="pocket" />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
