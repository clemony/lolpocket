<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const items = ref<any[]>([])

watch(items, (newItemSets) => {
  if (pocket.value) {
    pocket.value.items = newItemSets
  }
})

/* function updateChildIndex(evt) {
  const { oldIndex, newIndex } = evt

  if (!pocket.value) {
    return
  }

  if (pocket.value.items.default === oldIndex) {
    pocket.value.items.default = newIndex
  }
  else if (pocket.value.items.default > oldIndex && pocket.value.items.default <= newIndex) {
    pocket.value.items.default--
  }
  else if (pocket.value.items.default < oldIndex && pocket.value.items.default >= newIndex) {
    pocket.value.items.default++
  }
} */
</script>

<template>
  <div class="absolute top-0 left-0 inset-0 pt-20 px-16">
    <ItemsHeader :pocket="pocket" />

    <div
      v-draggable="[
        pocket.items,
        {
          'group': {
            name: 'sets',
          },
          'sort': true,
          'bubbleScroll': false,
          'scroll': false,
          'delay': 0,
          'animation': 300,
          'force-fallback': true,
          'fallbackTolerance': 0,
          'fallbackOnBody': true,
          'prevent-on-filter': true,
          'ghostClass': 'item-set-ghost',
          'chosenClass': 'item-set-chosen',
          'dragClass': 'item-set-drag',
          'filter': '.item',
        },
      ]"
      group
      class="z-0 h-full min-w-110 w-full pt-2 flex-wrap flex-col gap-8 flex">
      <!-- <div class="absolute bottom-2 right-3 opacity-0 group-hover/set:opacity-40 tldr-30 hover:opacity-100  handle">
          <icon name="ph:arrows-out-line-vertical" class="rotate-180 size-5 shrink-0" />
        </div> -->
      <template v-if="pocket.items">
        <ItemSet
          v-for="set in pocket.items"
          :key="set.name"
          :pocket="pocket"
          :set="set" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.set-drag {
  display: flex;
  width: 100%;

  & div {
    display: flex;
    width: 100%;
  }
}

.set-ghost {
  display: flex;
  width: 100%;
}
</style>
