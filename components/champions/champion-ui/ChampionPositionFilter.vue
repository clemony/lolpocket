<script setup lang="ts">
const props = defineProps<{
  bg?: boolean
}>()
const emit = defineEmits(['update:model'])
const ds = useDataStore()
console.log(ds.champions)
const cs = useChampStore()
</script>

<template>
  <transition-slide group class="flex flex-wrap gap-5 relative ">
    <input
      class="btn btn-square btn-xl before:size-14 absolute  left-0 !text-5 font-normal "
      aria-label="All"
      type="reset"
      value="×"
      @click="cs.filterChampPos = null" />

    <label
      v-for="p in championPosition"
      :key="p.id"
      :aria-label="p.id" class="size-fit    btn !size-14  btn-xl  mr-0 btn-square  " :class="{ 'bg-neutral border-neutral shadow-neutral/20 shadow-sm order-first  ml-19': p == cs.filterChampPos, 'first-of-type:ml-19': !cs.filterChampPos }">

      <input
        v-model="cs.filterChampPos" class="peer hidden absolute"
        type="radio"
        :value="p"
        name="item-types" />

      <component :is="`i-roles-${p.id}`" class="size-6" :class="{ 'text-nc': p == cs.filterChampPos }" />

    </label>
  </transition-slide>
</template>

<style scoped></style>
