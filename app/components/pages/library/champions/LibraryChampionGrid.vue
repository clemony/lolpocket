<script lang="ts" setup>
definePageMeta({
  title: "Champions",
  icon: "bi:list-ul",
})
</script>

<template>
  <div
    v-auto-animate
    class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-between gap-4 pt-3">
    <div
      v-for="item in champFilter().filtered"
      :key="item"
      class="flex size-22 grow items-center justify-center">
      <Champion :k="item" class="size-22" />
    </div>
  </div>
</template>
