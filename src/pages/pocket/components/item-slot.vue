<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from '../../../stores/itemStore'
import { usePocketStore } from '../../../stores/pocketStore'
import * as types from '../../../../types'


const is = useItemStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
    alt: string;
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

function handleDragEnd(event) {

}

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
        class="!p-1 drag-draggable item overflow-hidden !justify-center scrollbar-hide">

        <template v-if="item && item.name != ''" :key="item.id">
            <VDropdown :overflow-padding="20" :shift="true" theme="detail" :distance="6" @click.right.prevent=""
                :ref="item.name" class="relative max-w-[50px] max-h-[50px]">
                <label class="!overflow-hidden drag-label">
                    <div class="!overflow-hidden drag-wrapper">
                        <img :src="`/img/items/${item.id}.webp`" class="drag-img" />

                    </div>
                </label>
                <template #popper :key="item.name + 'Pop'">
                    <popItem :item="item" :variant="'remove'" :set="set" :pocketKey="pocketKey" />
                </template>
            </VDropdown>
        </template>

        <QuickSearch v-else :array="filteredItems" v-model:quickSearch="quickSearch" v-model:returnData="returnData"
            v-model:thisSet="set.key" type="alt" />
    </VueDraggable>
</template>

<style scoped></style>
