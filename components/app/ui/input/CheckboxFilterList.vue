<script setup lang="ts">
const props = defineProps<{
  source?: Array<any>
}>()

const emit = defineEmits(['update:model'])

const to = ref([])
const championClass = ref(championClasses)
const originalOrder = ref([
  ...championClass.value.sort((a, b) => {
    if (a.displayName < b.displayName) {
      return -1
    }
    if (a.displayName > b.displayName) {
      return 1
    }
    return 0
  }),
])
const sortedClasses = computed(() => {
  const checked = championClass.value.filter(cat => cat.checked)
  const unchecked = championClass.value.filter(cat => !cat.checked)

  return [...checked, ...unchecked]
})

function moveToTop(category: Category) {
  const index = championClass.value.findIndex(cat => cat.id === category.id)
  if (index !== -1) {
    championClass.value.splice(index, 1) // Remove category
    championClass.value.unshift(category) // Add it to the top
  }
  emit('update:model', to.value)
}

function resetClasses() {
  championClass.value = [...originalOrder.value] // Reset to the original A-Z order
}

function handleReset() {
  to.value.length = 0
  resetClasses()
  emit('update:model', to.value)
}
</script>

<template>
  <form class="flex flex-wrap gap-3 gap-y-5">
    <input
      class="btn btn-square btn-sm !text-5 rounded-md font-normal"
      type="reset"
      value="×"
      @click="handleReset()" />
    <TransitionGroup name="pop">
      <input
        v-for="category in sortedClasses"
        :key="category.id"
        v-model="to"
        class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
        :value="category.id"
        type="checkbox"
        name="championClass"
        :aria-label="category.displayName || category.id"
        @change="moveToTop(category)" />
    </TransitionGroup>
  </form>
</template>

<style scoped></style>
