<script setup lang="ts">
import type { Item, pocket } from 'types'
import { useItemStore } from '@/client/stores/itemStore'
const is = useItemStore()
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    item: Item
    pocket: pocket
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
    is.addToSet(props.pocket.key, is.selectedSet.key, item)
}
</script>

<template>
    <!-- <TransitionGroup @enter="imageIn" name="fade" @leave="imageOut"> -->

    <ItemPop
        :item="props.item"
        :variant="'add'"
        :key="props.item.id"
        @click.meta="add(item)"
        :ref="props.item.name">
        <div
            :class="
                cn(
                    'border-neutral/70 shadow-standard hover:ring-neutral/40 relative size-16 rounded-lg border hover:ring-1 hover:ring-offset-1',
                    props.class
                )
            ">
            <img
                :key="props.item.id"
                :src="`/img/items/${props.item.id}.webp`"
                :alt="props.item.name + ' Image'"
                :class="
                    cn('drag-img aspect-square size-full!', props.imgClass)
                " />
        </div>
    </ItemPop>

    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
