<script setup lang="ts">


const emit = defineEmits(['update:model'])

const ts = useTempStore()

const to = ref([])
const categories = ref(itemStats)
const originalOrder = ref([
  ...categories.value.sort((a, b) => {
    if (a.displayName < b.displayName) {
      return -1
    }
    if (a.displayName > b.displayName) {
      return 1
    }
    return 0
  }),
])
const sortedCategories = computed(() => {
  const checked = categories.value.filter(cat => cat.checked)
  const unchecked = categories.value.filter(cat => !cat.checked)

  return [...checked, ...unchecked]
})

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
      class="btn btn-square btn-sm !text-5 rounded-md font-normal"
      type="reset"
      value="×"
      @click="handleReset()"
    />

    <TransitionGroup name="pop">
      <input
        v-for="stat in sortedCategories"
        :key="stat.id"
        v-model="to"
        class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
        :value="stat.id"
        type="checkbox"
        name="categories"
        :aria-label="(stat.shortName as string) || stat.displayName"
        @change="moveToTop(stat)"
      />
    </TransitionGroup>
  </form>
</template>

<style scoped></style>
