<script setup lang="ts">
import type { Item, pocket } from 'types'
import { useItemStore } from '@stores/itemStore'
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

    <VDropdown
        :disabled="disabled"
        :triggers="['click']"
        :overflow-padding="20"
        :shift="true"
        theme="default"
        :key="props.item.id"
        :distance="6"
        @click.meta="add(item)"
        :ref="props.item.name"
        :class="
            cn(
                'relative !size-18 rounded-lg hover:ring-1 hover:ring-neutral/40 hover:ring-offset-1',
                props.class
            )
        ">
        <label :class="cn('drag-label', props.labelClass)">
            <div :class="cn('drag-wrapper', props.labelClass)">
                <img
                    :key="props.item.id"
                    :src="`/img/items/${props.item.id}.webp`"
                    :alt="props.item.name + ' Image'"
                    :class="
                        cn('drag-img aspect-square !size-full', props.imgClass)
                    " />
            </div>
        </label>
        <template
            #popper
            :key="props.item.name + 'Pop'"
            auto-boundary-max-size
            shift-cross-axis>
            <PopItem :item="props.item" :variant="'add'" />
        </template>
    </VDropdown>
    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
