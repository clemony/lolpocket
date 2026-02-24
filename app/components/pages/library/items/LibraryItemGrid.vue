<script setup lang="ts"></script>

<template>
  <div
    v-auto-animate
    class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(50px,1fr))] justify-between gap-4 pt-3">
    <div
      v-for="item in is().filtered"
      :key="item"
      class="flex size-17 grow items-center justify-center">
      <Item :id="item" class="size-17 grow hover:ring-2 hover:ring-pc/60" />
    </div>
  </div>
</template>
