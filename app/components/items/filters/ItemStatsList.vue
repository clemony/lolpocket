<script setup lang="ts">
import { statIndex } from '#shared/appdata'

const emit = defineEmits(['update:model'])

const to = ref([])
const categories = ref(Object.values(statIndex))
const originalOrder = ref([
  ...categories.value.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }),
])
function moveToTop(stat) {
  const index = categories.value.findIndex(cat => cat.id === stat.id)
  if (index !== -1) {
    categories.value.splice(index, 1) // Remove stat
    categories.value.unshift(stat) // Add it to the top
  }
  emit('update:model', to.value)
}

function resetCategories() {
  categories.value = [...originalOrder.value] // Reset to the original A-Z order
}

function handleReset() {
  to.value.length = 0
  resetCategories()
  emit('update:model', to.value)
}
</script>

<template>
  <form class="flex flex-wrap gap-3 gap-y-5">
    <input
      class="btn btn-square btn-sm !text-lgrounded-md font-normal"
      type="reset"
      value="×"
      @click="handleReset()" />
    <!--
    <TransitionGroup name="pop">
      <input
        v-for="stat in ''"
        :key="stat.id"
        v-model="to"
        class="btn checked:bgneutral checked:borderneutral checked:shadowneutral/20 btn-sm !text-sm mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
        :value="stat.id"
        type="checkbox"
        name="categories"
        :aria-label="(stat.abbr as string) || stat.name"
        @change="moveToTop(stat)"
      />
    </TransitionGroup> -->
  </form>
</template>

<style scoped></style>
