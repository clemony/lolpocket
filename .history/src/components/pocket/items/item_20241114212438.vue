<script setup lang="ts">
import { Item } from 'types'
import { useItemStore } from '@stores/itemStore'
const is = useItemStore()
import { addToSet } from '@lib/functions/PocketUtilities'

const props = defineProps<{
    item: Item
}>()
const disabled = ref(false)
</script>

<template>
    <!-- <TransitionGroup @enter="imageIn" name="fade" @leave="imageOut"> -->
    <Shortkey
        v-shortkey.push="['meta', 'ctrl']"
        @shortkey="useToggle(disabled), console.log(disabled)" />
    <VDropdown
        :disabled="disabled"
        :triggers="['click']"
        :overflow-padding="20"
        :shift="true"
        theme="default"
        :key="props.item.id"
        :distance="6"
        @meta.click.stop="addToSet(props.pocket, is.selectedSet, item)"
        :ref="props.item.name"
        class="relative rounded-lg hover:ring-1 hover:ring-neutral/40 hover:ring-offset-1">
        <label class="drag-label">
            <div class="drag-wrapper shadow-sm">
                <img
                    :key="props.item.id"
                    :src="`/img/items/${props.item.id}.webp`"
                    :alt="props.item.name + ' Image'"
                    class="drag-img !size-[52px]" />
            </div>
        </label>
        <template
            #popper
            :key="props.item.name + 'Pop'"
            auto-boundary-max-size
            shift-cross-axis>
            <pop-item :item="props.item" :variant="'add'" />
        </template>
    </VDropdown>
    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
