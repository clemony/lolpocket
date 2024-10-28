<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from '@stores/itemStore'
import { usePocketStore } from '@stores/pocketStore'
import * as types from 'types'

const is = useItemStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
    alt: string
    set: types.ItemSet
    index: number
}>()

const pocket = ref(ps.getPocket(props.pocketKey))

const alt = computed(() => {
    return pocket.value?.items[0].alts[props.alt]
})
const item = computed(() => {
    return alt.value[props.index]
})

function handleDragEnd(event) { }

const quickSearch = ref('')
const returnData = ref([])
// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    if (pocket) {
        console.log('Received array from child:', newVal)
        is.addToSet(pocket.value?.key, newVal[1], newVal[0])
    }
})

const filteredItems = computed(() => {
    let filtered = is.items

    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase()
        filtered = filtered.filter((item: any) =>
            Object.values(item).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm)
            )
        )
    }
    return filtered
})
</script>

<template>
<VueDraggable ref="el" v-model="alt" :group="{
    name: 'items',
    pull: true,
    put: ['items'],
    revertClone: false,
}" :scroll="false" :bubbleScroll="false" :key="set.key" :fallbackTolerance="0" fallbackClass="drag-clone"
    :force-fallback="true" :fallbackOnBody="true" @end="handleDragEnd"
    class="drag-draggable item !justify-center overflow-hidden !p-1 scrollbar-hide">
    <template v-if="item && item.name != ''" :key="item.id">
        <VDropdown :overflow-padding="20" :shift="true" theme="detail" :distance="6" @click.right.prevent=""
            :ref="item.name" class="relative max-h-[50px] max-w-[50px]">
            <label class="drag-label !overflow-hidden">
                <div class="drag-wrapper !overflow-hidden">
                    <img :src="`/img/items/${item.id}.webp`" class="drag-img" />
                </div>
            </label>
            <template #popper :key="item.name + 'Pop'">
                <pop-item :item="item" :variant="'remove'" :set="set" :pocketKey="pocketKey" />
            </template>
        </VDropdown>
    </template>

    <item-slot-search v-else :array="filteredItems" v-model:quickSearch="quickSearch" v-model:returnData="returnData"
        :pocketKey="pocketKey" v-model:thisSet="set.key" type="alt" />
</VueDraggable>
</template>

<style scoped></style>
