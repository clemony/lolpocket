<script setup lang="ts">
definePageMeta({
  name: 'items',
  title: 'Items',
  icon: 'bow',
})
</script>

<template>
  <main class="">
    <transition-slide
      v-if="is().filtered.length"
      group
      class=" w-full pt-3 justify-between grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))]  gap-6 ">
      <div
        v-for="item in is().filtered"
        :key="item"
        class="group relative grid place-items-center">
        <LazyItemPopover
          v-if="is().filtered.includes(item)"
          :id="item"
          class="aspect-square rounded-lg max-w-22 size-22 **:size-22'" />
      </div>
    </transition-slide>

    <TransitionScalePop
      v-else
      class="w-full h-[30vh] grid place-items-center">
      <Button
        variant="outline"
        size="sm"
        class="w-fit hover:inset-shadow-xs *:opacity-80 hover:*:opacity-100"
        @click="is().clearFilters()">
        <span>
          sold out
        </span>
        <icon
          name="reset"
          class="size-3.5" />
      </Button>
    </TransitionScalePop>
  </main>
</template>
