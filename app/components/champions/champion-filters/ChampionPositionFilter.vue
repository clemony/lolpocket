<script setup lang="ts">
const cs = useChampStore()
</script>

<template>
  <transition-slide group class="flex flex-wrap gap-2 relative items-center">
    <button
      :class="{ hidden: !cs.championFilter.position }"
      class="btn btn-square size-10  border-b3/80 disabled:!bg-b2/60 disabled:opacity-60  absolute grid place-items-center left-0 "
      aria-label="All" @click="cs.championFilter.position = null">
      <icon name="x-sm" class="size-5.5" />
    </button>

    <label
      v-for="position in championPositions"
      :key="position"
      :aria-label="position" class="size-fit border-b3/80   btn !size-10  btn-xl  mr-0 btn-square  " :class="{ '!bg-neutral !border-neutral !shadow-neutral/20 shadow-sm order-first  ml-12': position == cs.championFilter.position, 'hidden': cs.championFilter.position && position != cs.championFilter.position }">

      <input
        v-model="cs.championFilter.position" class="peer hidden absolute"
        type="radio"
        :value="position"
        name="item-types" />

      <component :is="`i-roles-${position.toLowerCase()}`" class="size-5" :class="{ 'text-nc': position == cs.championFilter.position }" />

    </label>
  </transition-slide>
</template>

<style scoped></style>
