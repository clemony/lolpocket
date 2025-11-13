<script setup lang="ts">
definePageMeta({
  name: "items",
  title: "Items",
  icon: "bow",
});
</script>

<template>
  <main class="">
    <transition-slide
      v-if="is().filtered.length"
      group
      class="grid w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-between gap-6 pt-3"
    >
      <div
        v-for="item in is().filtered"
        :key="item"
        class="group relative grid place-items-center"
      >
        <LazyItemPopover
          v-if="is().filtered.includes(item)"
          :id="item"
          class="**:size-22' aspect-square size-22 max-w-22 rounded-lg"
        />
      </div>
    </transition-slide>

    <TransitionScalePop v-else class="grid h-[30vh] w-full place-items-center">
      <Button
        variant="outline"
        size="sm"
        class="w-fit *:opacity-80 hover:inset-shadow-xs hover:*:opacity-100"
        @click="is().clearFilters()"
      >
        <span> sold out </span>
        <icon name="reset" class="size-3.5" />
      </Button>
    </TransitionScalePop>
  </main>
</template>
