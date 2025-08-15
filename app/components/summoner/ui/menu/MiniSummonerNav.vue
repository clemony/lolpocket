<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { summoner, links, childRoutes } = defineProps<{
  summoner: Summoner
  links: any
  childRoutes: RouteRecordRaw[]
}>()
</script>

<template>
  <MiniNavWrapper>
    <template #menu-trigger>
      <SummonerIcon
        :summoner
        class="rounded-full size-full size-9 cursor-pointer hover-ring !ring-offset-b1/96 data-open-ring" />
    </template>
    <template #menu-content>
      <SummonerName
        as="h2"
        class="font-serif font-black px-1 leading-snug truncate" />

      <div class="flex w-full px-1 gap-3 justify-self-center justify-between items-center">
        <span class="gap-3 flex items-center">
          <SummonerTag />

          <SummonerRegion />
        </span>
        <SummonerLevel />
      </div>
      <Separator class="my-2 bg-b3" />
      <SummonerToolbar
        :summoner
        class="p-1 grid grid-cols-3  gap-1  gap-y-2" />
    </template>

    <LazyNavigationMenuViewport />

    <template #nav-links>
      <NavLinkWrapper
        v-for="item in childRoutes"
        :key="item.name"
        :item="item"
        @click="navigateTo(links[item.name])" />
    </template>
  </MiniNavWrapper>
</template>