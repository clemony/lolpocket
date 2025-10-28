<script lang="ts" setup>
import type { DraggableEvent, UseDraggableReturn } from 'vue-draggable-plus'
import { ChampionCard } from '#components'
import { motion } from 'motion-v'
import { vDraggable } from 'vue-draggable-plus'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

function onSpill(e: DraggableEvent) {
  console.log('🌱 - onSpill - e:', e)
  const a = pocket.champions.findIndex(c => c === e.data.key)
  if (a)
    pocket.champions.splice(a, 1)
}
</script>

<template>
  <div class="inset-x-1 h-36 overflow-x-hidden relative">
    <TransitionScalePop
      v-draggable="[
        pocket.champions, {
          group: {
            name: 'champions',
            pull: 'clone',
            put: true,
          },
          direction: 'horizontal',
          ghostClass: 'champion-card-ghost-class',
          chosenClass: 'champion-card-ghost-class',
          dragClass: 'champion-icon-ghost-class',
          animation: 150,
          invertSwap: true,
          removeOnSpill: true,
          invertedSwapThreshold: 6,
          ease: 'ease-in-out',
          filter: 'undraggable',
          onSpill,
        }]"
      class="absolute inset-0 py-2 h-36 grid-rows-1 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] grid overflow-y-hidden overflow-x-scroll items-center">
      <template v-if="pocket.champions.length">
        <ChampionCard
          v-for="champion in pocket.champions"
          :id="champion"
          :key="champion"
          :k="champion" />
      </template>
      <div
        v-else
        class="undraggable select-none size-full grid place-items-center">
        <Badge
          size="lg"
          class="absolute pointer-events-none"
          variant="outline">
          Pocket is championless.
        </Badge>
      </div>
    </TransitionScalePop>
  </div>
</template>

<style>
.champion-card-ghost-class {
  width: 170px;
  min-width: 170px;
  max-width: 170px;
  border: 1px solid var(--color-b3);
  height: calc(var(--spacing) * 36);
  max-height: calc(var(--spacing) * 36);
  overflow: hidden;
}
</style>