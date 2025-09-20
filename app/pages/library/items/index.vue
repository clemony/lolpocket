<script setup lang="ts">
definePageMeta({
  name: 'items',
  title: 'Items',
  icon: 'bow',
})

console.log('🌱 - is().filtered:', is().filtered)
</script>

<template>
  <transition-slide
    v-if="is().filtered"
    group
    class="flex flex-wrap justify-stretch content-start size-full -mx-2 -mt-4">
    <div
      v-for="item in ix().items"
      :key="item.id"
      :data-state="is().filtered.includes(item.id) ? 'visible' : 'hidden'"
      class="group relative overflow-visible data-[state=hidden]:scale-0 data-[state=hidden]:size-0 data-[state=visible]:scale-100 data-[state=visible]:size-28 grid place-items-center">
      <LazyPopoverItem
        v-if="is().filtered.includes(item.id)"
        :id="item.id"
        class="aspect-square rounded-lg max-w-22 size-22 **:size-22'" />
    </div>
  </transition-slide>
</template>
