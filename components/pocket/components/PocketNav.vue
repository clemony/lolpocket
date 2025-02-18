<script setup lang="ts">
const ps = usePocketStore()

// const selectedRuneSet = ref(pocket.value.runes.sets[0])
/* watch(
  () => selectedRuneSet.value,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        component.value != pocketComponents[2].compRef ? component.value = pocketComponents[2].compRef : ''
      })
    }
  },
)
 */

/*   : setTimeout(() => {
        !isPMHovered.value && !ss.isOutsideTrigger
      }, 300) */
const FilterSheet = defineAsyncComponent(() => import('components/pocket/sheet/FilterSheet.vue'))

/*    : setTimeout(() => {
        !isPBHovered.value && !ss.isOutsideTrigger ? sidebarComponent.value = null : ''
      }, 300) */
</script>

<template>
  hi
</template>

<style scoped>
</style>