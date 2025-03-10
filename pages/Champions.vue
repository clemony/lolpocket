<script setup lang="ts">
definePageMeta({
  name: 'champion-data',
  path: '/champions',
  title: 'Champions',
})

const filter = ref(false)
const toggleFilter = useToggle(filter)
</script>

<template>
  <NuxtLayout name="header-layout" class=" grid transition-all duration-300 " :class="{ ' grid-cols-[1fr_240px]': filter, ' grid-cols-[1fr_0px]': !filter }">
    <template #header>
      <div
        class="text-4 drop-shadow-text items-center px-2 font-serif tracking-wide text-nowrap flex mt-1 "
        v-html="getQuote()" />
    </template>

    <template #crumb>
      <ChampionSearch class="justify-self-end ">
        <button class="btn btn-ghost btn-sm btn-square rounded-md hover:bg-b2/40" @click.stop="toggleFilter()">
          <icon name="filter" class="size-4" />
        </button>
      </ChampionSearch>
    </template>

    <ChampionList class="gap-3 inset-0 top-0 left-0 absolute overflow-y-auto pt-35 tldr-30 h-full" />
  </NuxtLayout>
</template>

<style scoped></style>
