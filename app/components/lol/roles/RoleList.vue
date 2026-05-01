<script lang="ts" setup>
import { positions } from "./handleRoles"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = toRef(props, "pocket")
const pocketPositions = computed<PositionKey[]>({
  get: () => pocket.value.positions ?? [],
  set: (value) => {
    pocket.value.positions = value
  }
})

const to = ref([])

// Ensure positionsList is reactive and sorted initially
const positionsList = ref([...positions.sort((a, b) => a.localeCompare(b))])
const originalOrder = ref([...positionsList.value])

const sortedPositions = computed(() => {
  const checked = positionsList.value.filter((position) =>
    useArrayIncludes(pocketPositions, position)
  )
  const unchecked = positionsList.value.filter(
    (position) => !useArrayIncludes(pocketPositions, position)
  )
  return [...checked, ...unchecked]
})

function moveToTop(position: string) {
  const index = positionsList.value.findIndex((r) => r === position)
  if (index !== -1) {
    const [removed] = positionsList.value.splice(index, 1) // Remove position
    if (removed) positionsList.value.unshift(removed) // Add it to the top
  }
}

function resetCategories() {
  positionsList.value = [...originalOrder.value] // Reset to the original order
}

function handleReset() {
  to.value = [] // Ensure proper ref reactivity
  resetCategories()
}
</script>

<template>
  <p class="mb-3 text-sm">
    Is your pocket for a specific position? Positions can be specified in
    addition to champions, or in place of them.
  </p>

  <transition-slide class="gap-2 filter" tag="form" group>
    <input
      class="filter-reset peer btn bg-p0 text-3xl font-normal! text-pc"
      type="checkbox"
      name="positions"
      aria-label="x"
      @click="pocketPositions = []" />

    <label
      v-for="position in sortedPositions"
      :key="position"
      class="has-checked:!bgneutral btn flex gap-3 rounded-lg! bg-p0 text-sm capitalize peer-not-checked:first-of-type:-ml-2 has-checked:text-nc has-checked:btn-neutral!"
      :for="position">
      <input
        :id="position"
        v-model="pocketPositions"
        class="peer hidden"
        type="checkbox"
        name="positions"
        :value="position"
        @change="moveToTop(position)" />

      <component
        :is="`i-positions-${position.replace(' ', '-')}`"
        class="h-4.5 w-auto shrink-0 ds-2xs peer-checked:text-nc"
        :class="{ 'size-5': position === 'jungle' }" />
      {{ position }}
    </label>
  </transition-slide>
</template>
