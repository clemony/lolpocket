<script setup lang="ts">
import { motion } from 'motion-v'
import { vDraggable } from 'vue-draggable-plus'

const a = computed(() => is().filtered.length < is().defaultFilterLength)

watch(
  () => a.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
</script>

<template>
  <div class="flex w-full flex-col pb-32">
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
      class="grid w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-between gap-4 pt-6 select-none"
      layout="position">
      <AnimatePresence>
        <motion.div
          v-for="item in is().filtered"
          :key="item"
          :transition="{
            duration: 0.2,
          }"
          layout="position">
          <LazyItemTooltip
            :id="item"
            class="aspect-square size-20" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
    <TransitionScalePop
      v-if="is().filtered.length < is().defaultFilterLength"
      class="z-2 grid w-full place-items-center pt-32">
      <UButton
        class="w-fit *:opacity-80 hover:inset-shadow-xs hover:*:opacity-100"
        variant="outline"
        size="sm"
        @click="is().clearFilters()">
        <span>
          {{ !is().filtered.length ? "sold out" : "reset" }}
        </span>
        <icon
          class="size-3.5"
          name="reset" />
      </UButton>
    </TransitionScalePop>
  </div>
</template>
