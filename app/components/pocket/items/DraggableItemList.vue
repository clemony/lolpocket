<script setup lang="ts">
import { motion } from 'motion-v'
import { vDraggable } from 'vue-draggable-plus'

const a = computed (() => is().filtered.length < is().defaultFilterLength)

watch(() => a.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div class="w-full flex-col flex pb-32">
    <motion.div
      v-if="is().filtered.length"
      v-draggable="[
        is().filtered,
        {
          group: {
            name: 'items',
            put: false,
            pull: 'clone',
            revertClone: true,
          },
          sort: false,
          forceFallback: false,
          ghostClass: 'item-icon-ghost',
          dragClass: 'item-icon-ghost',
          chosenClass: 'item-icon-ghost',
        },
      ]"
      layout="position"
      class="select-none w-full justify-between grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))]  gap-4   pt-6">
      <AnimatePresence>
        <motion.div
          v-for="item in is().filtered"
          :key="item"
          :transition="{
            duration: 0.2,
          }"
          layout="position">
          <LazyItemPopover
            :id="item"
            class="size-20 aspect-square " />
        </motion.div>
      </AnimatePresence>
    </motion.div>
    <TransitionScalePop
      v-if="is().filtered.length < is().defaultFilterLength"
      class="w-full z-2 pt-32  grid place-items-center">
      <Button
        variant="outline"
        size="sm"
        class="w-fit hover:inset-shadow-xs *:opacity-80 hover:*:opacity-100"
        @click="is().clearFilters()">
        <span>
          {{ !is().filtered.length ? 'sold out' : 'reset' }}
        </span>
        <icon
          name="reset"
          class="size-3.5" />
      </Button>
    </TransitionScalePop>
  </div>
</template>
