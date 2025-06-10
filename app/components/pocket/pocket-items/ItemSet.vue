<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const { pocket, set: itemSet } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const isDragging = ref<boolean>(false)
const count = ref<number>(0)

const set = computed (() => itemSet.items)
const setName = computed (() => itemSet.name)

function onEnd() {
  count.value + 1
}
</script>

<template>
  <Field
    :key="setName" class="py-3 px-2  group/set">
    <!-- <input v-model="is.selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" /> -->
    <EditableInputBox :model-value="setName" class="*:font-semibold *:tracking-tight focus-within:btn focus-within:btn-sm z-0focus-within:rounded-md focus-within:justify-start focus-within:px-2 focus-within:ring focus-within:ring-neutral/60 max-w-90 h-10 cursor-pointer focus-within:-top-4 focus-within:left-3 transition-colors duration-300 focus-within:text-start focus-within:bg-b1 focus-within:hover:bg-b1 field-legend  [&_.edit-trigger]:opacity-0 " />

    <DropdownMenu>
      <DropdownMenuTrigger class="group/trig z-2 top-2.5 absolute right-4  data-[state=open]:!bg-neutral/85 hover:border-b2 btn btn-sm btn-ghost !pointer-events-auto dst hover:!bg-b1/90  rounded-lg btn-square">
        <icon name="more" class="size-5 shrink-0 group-data-[state=open]/trig:!text-nc" />
      </DropdownMenuTrigger>
      <LazyContrastDropdownContent align="end" :side-offset="1" class="w-64">
        <LazyItemSetMenu :pocket="pocket" :set="itemSet" />
      </LazyContrastDropdownContent>
    </DropdownMenu>
    <div
      :key="`${set.join('-')}-${count}`"
      v-draggable="[
        set,
        {
          group: {
            name: 'items',
            pull: true,
            put: true,
            revertClone: false,
          },
          bubbleScroll: false,
          scroll: false,
          delay: 0,
          animation: 300,
          forceFallback: true,
          chosenClass: 'item-set-item-chosen',
          ghostClass: 'item-set-item-ghost',
          removeOnSpill: true,
          fallbackTolerance: 0,
          fallbackOnBody: true,
          emptyInsertThreshold: 24,
          swapThreshold: 24,
          fallbackClass: 'item-set-item-fallback',
          filter: 'no-drag',
        },
      ]"
      class="flex  pl-4 pr-14 pt-2 pb-2 **:select-none h-fit min-h-23 flex-wrap justify-start gap-3 group"
      @end="onEnd"
      @start="isDragging = true">
      <Popover
        v-for="item in set"
        :key="item.toString()">
        <PopoverTrigger as-child class="shrink-0 item !size-19 ">
          <Item
            :id="item"
            :pocket="pocket"
            class="shadow-sm shrink-0 !size-19  *:rounded-lg"
            @click.prevent />
        </PopoverTrigger>
        <LazyCustomPopoverContent class="p-2 w-114">
          <CustomPopoverArrow />
          <LazyItemData
            :id="item" />
          <!-- <LazyItemInSetMenu v-else :pocket="pocket" :set="props.set" :item="item" @update:popover="showData = true" /> -->
        </LazyCustomPopoverContent>
      </Popover>

      <transition-slide>
        <div v-show="!set.length" class="rounded-lg border-0 size-19 shadow-sm shadow-black/7  bg-b3/40 animate-in zoom-in  no-drag " />
      </transition-slide>
    </div>
  </Field>
</template>

<style scoped>
</style>