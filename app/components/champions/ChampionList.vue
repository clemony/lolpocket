<script setup lang="ts">

</script>

<template>
  <div
    class=" user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-1 overflow-auto pr-10  pl-16  rounded-lg pb-8 pt-14">
    <LazyChampionFullPopover
      v-for="champion in filteredChampions"
      :key="champion.id"
      :champion="champion"
      class="champion w-full"
      drag-class="setDrag"
      hydrate-on-visible
      @click.right.prevent>
    </LazyChampionFullPopover>
  </div>

</template>

<style scoped></style>
