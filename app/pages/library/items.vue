<script lang="ts" setup>
definePageMeta({
  title: 'Items',
  parent: '/library',
})

const is = useItemStore()
const { filtered } = useItemFilter(is.itemFilter)
</script>

<template>
  <div class="size-full relative">
    <!--     <ItemFilterSidebar /> -->

    <LazyNuxtPage :filtered="filtered ?? ix().items.map(i => i.id)" />
  </div>

  <!--      <div
          class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
          v-html="captions" /> -->
</template>
