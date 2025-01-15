<script setup lang="ts">
  import news from './news.json';
</script>
<template>
  <div class="flex flex-col gap-1 pt-18 pb-2">
    <div class="bg-b1/90 absolute top-0 left-0 z-10 flex h-16 w-full items-center gap-4 px-4 backdrop-blur-md">
      <h4 class="grow !font-[500]">News & Updates</h4>
      <span class="text-4 w-fit pt-px pr-6 opacity-60 group-hover:opacity-100 group-data-[state=open]:opacity-100"> 14.16.1 </span>
    </div>

    <template v-for="(item, i) in news">
      <MenubarItem v-if="i < 10">
        <div class="aspect-square size-14 overflow-hidden rounded-lg">
          <img
            :src="item.img"
            class="max-w-44 min-w-14 object-center" />
        </div>
        <div class="flex flex-col">
          <p class="text-3 truncate font-medium">
            {{ item.title }}
          </p>
          <p class="truncate font-normal opacity-60">
            {{ item.source }}
          </p>
        </div>
      </MenubarItem>
      <div class="px-4">
        <MenubarSeparator v-if="i != news.length" />
      </div>
    </template>
  </div>
</template>
<style scoped></style>
