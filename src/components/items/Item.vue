<script setup lang="ts">
import type { pocket } from '@/types/pocketTypes'
import { useTempStore } from '@stores/tempStore'
import type { HTMLAttributes } from 'vue'
import { addItemToSet } from '@/functions/pocketUtilities'
import type { Item } from '@/types/dataTypes'
import { useDataStore } from '@stores/dataStore'
import { itemDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@/functions/utils'

const ds = useDataStore()
const ts = useTempStore()

const props = defineProps<{
    item: Item
    pocket?: pocket
    class?: HTMLAttributes['class']
    imgClass?: HTMLAttributes['class']
    labelClass?: HTMLAttributes['class']
}>()
const disabled = ref(false)
watch(
    () => disabled,
    (newVal) => {
        console.log(newVal)
    }
)

function add(item) {
    disabled.value = true
    addItemToSet(props.pocket.key, ts.selectedItemSet.key, item)
}

const isImgLoaded = ref(false)
</script>

<template>
    <div
        @click.right="toggleDrawerState(itemDrawer, null, null, item)"
        :class="
            cn(
                'hover:ring-neutral/40 border-b3 relative overflow-hidden rounded-lg border shadow-sm transition-all duration-200 hover:ring-1 hover:ring-offset-1',

                props.class
            )
        ">
        <img
            :key="props.item.name"
            :src="getItemImage(props.item.id)"
            :alt="props.item.name + ' Image'"
            :class="cn('drag-img aspect-square size-full!', props.imgClass)" />
    </div>
</template>

<style scoped></style>
