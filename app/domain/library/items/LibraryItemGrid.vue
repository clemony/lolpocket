<script setup lang="ts"></script>

<template>
  <div
    v-auto-animate
    class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(58px,1fr))] justify-between gap-4 pt-3">
    <div
      v-for="item in is().filtered"
      :key="item"
      class="flex size-19 items-center justify-center">
      <HoverIcon
        :id="item"
        type="item"
        :ui="{
          root: 'size-19! max-h-19! cursor-pointer',
          image: 'size-19!'
        }"
        :map="is().filters.map" />
    </div>
  </div>
</template>
