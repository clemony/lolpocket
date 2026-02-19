<script setup lang="ts"></script>

<template>
  <div
    v-auto-animate
    class="grid w-full grid-cols-[repeat(auto-fill,minmax(50px,1fr))] justify-between gap-4 pt-3">
    <div v-for="item in is().filtered" :key="item" class="size-17">
      <Item :id="item" class="size-full" />
    </div>
  </div>
</template>
