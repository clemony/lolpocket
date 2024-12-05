<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from '@/stores/itemStore'
import { usePocketStore } from '@/stores/pocketStore'
import { ItemSet } from 'types'

const is = useItemStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
    set: ItemSet
    limit?: number
}>()

const pocket = getPocket(props.pocketKey)

function handleDragEnd(event) {
    console.log('hi')
    const draggedItem = event.item
    console.log(draggedItem)
    const targetSet = event.to

    if (targetSet && targetSet.items) {
        const isDuplicate = targetSet.items.some(
            (item) => item.name === draggedItem.name
        )

        if (isDuplicate) {
            console.log('Duplicate item found. Item not added.')
            event.item.remove()
        } else {
            targetSet.items.push(draggedItem)
        }
    }
}

const additionalQuickSearchCount = computed(() => {
    return Math.max(0, 6 - props.set.items.length - 1)
})

const quickSearch = ref('')
const returnData = ref([])
// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    if (pocket) {
        console.log('Received array from child:', newVal)
        is.addToSet(pocket.key, newVal[1], newVal[0])
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
    <VueDraggable
        ref="el"
        v-model="set.items"
        :group="{
            name: 'items',
            pull: true,
            put: ['items'],
            revertClone: false,
        }"
        :scroll="false"
        :bubbleScroll="false"
        :key="set.key"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        filter=".no-drag"
        :force-fallback="true"
        :fallbackOnBody="true"
        @end="handleDragEnd"
        class="drag-draggable item !justify-start overflow-hidden !p-1 scrollbar-hide"
        :class="{ '!gap-5': props.limit }">
        <template v-for="(item, index) in set.items" :key="item.id">
            <VDropdown
                v-if="!props.limit || (props.limit && index < 6)"
                :overflow-padding="20"
                :shift="true"
                theme="default"
                :distance="6"
                @click.right.prevent=""
                :ref="item.name"
                class="relative max-h-[64px] max-w-[64px]">
                <label class="drag-label !overflow-hidden">
                    <div class="drag-wrapper !overflow-hidden">
                        <LoadImg
                            :url="`/img/items/${item.id}.webp`"
                            class="drag-img size-[52px]" />

                        <!--   <div :key="item.id + 'Count'" :class="{ '!opacity-85': item.count > 1 }"
                            class="absolute rounded-full bg-primary text-primary-content z-30 -right-1.5 -top-1.5 size-6 flex place-items-center place-content-center font-mono opacity-0 text-sm shadow-warm overflow-hidden">
                            {{ item.count }}
                        </div> -->
                    </div>
                </label>
                <template #popper :key="item.name + 'Pop'">
                    <pop-item
                        :item="item"
                        :variant="'remove'"
                        :set="set"
                        :pocketKey="pocketKey" />
                </template>
            </VDropdown>
        </template>

        <QuickSearch
            v-if="!props.limit || (props.limit && set.items.length < 6)"
            :array="filteredItems"
            v-model:quickSearch="quickSearch"
            v-model:returnData="returnData"
            v-model:thisSet="set.key"
            type="items"
            :size="52"
            class="mx-1" />

        <!-- Additional QuickSearch Components to Ensure 6 Total -->
        <template v-if="props.limit">
            <QuickSearch
                v-for="index in additionalQuickSearchCount"
                :key="'quicksearch-' + index"
                :array="filteredItems"
                v-model:quickSearch="quickSearch"
                v-model:returnData="returnData"
                v-model:thisSet="set.key"
                type="items"
                :size="52"
                class="mx-1" />
        </template>
    </VueDraggable>
</template>

<style scoped></style>
