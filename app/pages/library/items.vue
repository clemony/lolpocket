<script lang="ts" setup>
definePageMeta({
  name: 'items',
  title: 'Items',
  section: 'library',
  icon: 'bow',
})
</script>

<template>
  <NuxtLayout v-slot="{ items }" name="items-layout">
    <div class="absolute inset-0 top-0 left-0 overflow-y-auto  py-24 pr-18 pl-8 ">
      <div class=" flex items-center pb-12">
        <h1 class="grow">
          Items
        </h1>
        <!--      <div
          class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
          v-html="captions" /> -->
      </div>
      <div
        class=" user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-5  h-auto pt-1  rounded-lg">
        <template v-for="item in items" :key="item.id">
          <PopoverItem :item="item.id" />
        </template>
      </div>
    </div>
  </NuxtLayout>
</template>