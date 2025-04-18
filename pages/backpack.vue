<script lang="ts" setup>
const ps = usePocketStore()

definePageMeta({
  section: 'backpack',
})
</script>

<template>
  <NuxtLayout name="header-layout">
    <template #crumb>
      <div class="flex items-center mr-14 join">
        <button class="btn  join-item ">
          <icon name="ep:sort" class="size-5.5" />
        </button>
        <button class="btn  join-item ">
          <icon name="qlementine-icons:grid-16" />
        </button>
        <button class="btn join-item  ">
          <icon name="qlementine-icons:items-list-24" />
        </button>
      </div>
    </template>
    <div class="w-full pt-28 px-18 flex flex-wrap px-18 gap-8  items-center">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </NuxtLayout>
</template>
