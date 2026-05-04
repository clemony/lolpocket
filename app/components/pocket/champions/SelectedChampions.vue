<script lang="ts" setup>
import type { DraggableEvent } from "vue-draggable-plus"
import { vDraggable } from "vue-draggable-plus"

const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const champions = computed(() => pocket.value?.champions ?? [])

function onSpill(e: DraggableEvent) {
  console.log("🌱 - onSpill - e:", e)
  const a = champions.value.findIndex((c) => c === e.data.key)
  if (a >= 0) champions.value.splice(a, 1)
}
</script>

<template>
  <div class="relative inset-x-1 h-36 overflow-x-hidden">
    <TransitionScalePop
      v-draggable="[
        champions,
        {
          group: {
            name: 'champions',
            pull: 'clone',
            put: true
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
          onSpill
        }
      ]"
      class="absolute inset-0 grid h-36 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] grid-rows-1 items-center overflow-x-scroll overflow-y-hidden py-2">
      <template v-if="champions.length">
        <UCard
          v-for="champion in champions"
          :id="champion"
          :key="champion"
          class="relative grid h-36 w-[170px] shrink-0 place-items-center overflow-hidden shadow-sm inset-shadow-sm shadow-black/10 inset-shadow-black/10 drop-shadow-sm">
          <Champion
            class="absolute size-[260%] translate-y-[16%] object-center"
            :k="champion"
            type="centered" />
        </UCard>
      </template>
      <div
        v-else
        class="undraggable grid size-full place-items-center select-none">
        <UBadge
          class="pointer-events-none absolute"
          size="lg"
          variant="outline">
          Pocket is championless.
        </UBadge>
      </div>
    </TransitionScalePop>
  </div>
</template>
