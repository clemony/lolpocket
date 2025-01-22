<script setup lang="ts">
  import { stats } from 'shared/data/item'
  const ts = useTempStore()

  const to = ref([])
  const categories = ref(stats)
  const originalOrder = ref([
    ...categories.value.sort(function (a, b) {
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
    const checked = categories.value.filter((cat) => cat.checked)
    const unchecked = categories.value.filter((cat) => !cat.checked)

    return [...checked, ...unchecked]
  })

  const emit = defineEmits(['update:model'])
  const moveToTop = (stat) => {
    const index = categories.value.findIndex((cat) => cat.id === stat.id)
    if (index !== -1) {
      categories.value.splice(index, 1) // Remove stat
      categories.value.unshift(stat) // Add it to the top
    }
    emit('update:model', to.value)
  }

  const resetCategories = () => {
    categories.value = [...originalOrder.value] // Reset to the original A-Z order
  }

  const handleReset = () => {
    to.value.length = 0
    resetCategories()
    emit('update:model', to.value)
  }
</script>
<template>
  <form class="flex flex-wrap gap-3 gap-y-5">
    <input
      @click="handleReset()"
      class="btn btn-square btn-sm !text-5 rounded-md font-normal"
      type="reset"
      value="×" />

    <TransitionGroup name="pop">
      <input
        v-for="stat in sortedCategories"
        class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
        :key="stat.id"
        :value="stat.id"
        type="checkbox"
        name="categories"
        v-model="to"
        @change="moveToTop(stat)"
        :aria-label="(stat.shortName as string) || stat.displayName" />
    </TransitionGroup>
  </form>
</template>
<style scoped></style>
