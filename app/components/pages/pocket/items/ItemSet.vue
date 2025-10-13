<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const { pocket, set: itemSet } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const isDragging = ref<boolean>(false)
const count = ref<number>(0)

const set = computed(() => itemSet.items)
const setName = computed(() => itemSet.name)

function onEnd() {
  count.value + 1
}
</script>

<template>
  <div
    :key="setName"
    class="py-3 px-2 field-box group/set">
    <!-- <input v-model="is().selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" /> -->
    <EditableInputBox
      :model-value="setName"
      class="*:font-semibold *:tracking-tight focus-within:btn focus-within:btn-sm z-0 focus-within:rounded-md focus-within:justify-start focus-within:px-2 focus-within:ring focus-within:ring-neutral/60 max-w-90 h-10 cursor-pointer focus-within:-top-4 focus-within:left-3 transition-colors duration-300 focus-within:text-start focus-within:bg-b1 focus-within:hover:bg-b1 field-legend [&_.edit-trigger]:opacity-0" />

    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="neutral"
          shape="circle"
          class="group/trig ease-spring-bouncy overflow-hidden scale-0 group-hover/set:scale-100 transition-all duration-200 opacity-0 group-hover/set:opacity-100 !size-7 z-2 -top-2 absolute -right-1">
          <icon
            name="more"
            class="size-4 shrink-0 !text-nc/70 absolute" />
        </Button>
      </PopoverTrigger>

      <LazyPopoverContent
        align="end"
        :side-offset="1"
        class="w-64">
        <LazyItemSetMenu
          :pocket="pocket"
          :set="itemSet" />
      </LazyPopoverContent>
    </Popover>

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
      class="flex px-4  pt-2 pb-2 **:select-none h-fit min-h-23 flex-wrap justify-start gap-3 group"
      @end="onEnd"
      @start="isDragging = true">
      <Popover
        v-for="item in set"
        :key="item.toString()">
        <PopoverTrigger as-child>
          <Button
            variant="neutral"
            shape="square"
            class="shrink-0 cursor-pointer  shadow-sm drop-shadow-sm rounded-lg overflow-hidden item !size-19">
            <Item
              :id="item"
              :pocket="pocket"
              class="shrink-0 !size-19  pointer-events-none" />
          </Button>
        </PopoverTrigger>

        <LazyCustomPopoverContent class="p-2 w-114">
          <CustomPopoverArrow />

          <LazyItemData :id="item" />
          <!-- <LazyItemInSetMenu v-else :pocket="pocket" :set="props.set" :item="item" @update:popover="showData = true" /> -->
        </LazyCustomPopoverContent>
      </Popover>

      <transition-slide>
        <div
          v-show="!set.length"
          class="rounded-lg border-0 size-19 shadow-sm shadow-black/7 bg-b3/40 animate-in zoom-in no-drag" />
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
