<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { summoner, links, childRoutes } = defineProps<{
  summoner: Summoner
  links: any
  childRoutes: RouteRecordRaw[]
}>()
</script>

<template>
  <DockTemplate>
    <template #header>
      <NavMenuHeader>
        <template #icon>
          <div class="relative">
            <SummonerIcon
              :summoner
              class="rounded-field size-full size-11">
            </SummonerIcon>
            <SummonerLevel class="pt-px absolute z-1 -bottom-1.5 bg-neutral rounded-full text-nc text-2" />
          </div>
        </template>
        <template #content>
          <div class="w-full py-1 flex flex-col gap-1">
            <p class="items-center  justify-between gap-2 text-nowrap flex-nowrap inline-flex">
              <SummonerName
                as="h4"
                class="leading-none font-serif font-bold truncate" />
            </p>
            <p class="flex w-full text-2  gap-2 justify-between items-center [&_svg]:size-3  **:leading-none  inline-flex align-bottom">
              <SummonerTag />

              <SummonerRegion />
            </p>
          </div>
        </template>
      </NavMenuHeader>
    </template>

    <template #nav-links>
      <ExpandNavLink
        v-for="item in childRoutes"
        :key="item.name"
        variant="ghost"
        :item="item"
        @click="navigateTo(links[item.name])">
        <template #icon>
          <hicon
            :name="String(item.meta?.icon)"
            class="size-5.5 absolute object-center place-self-center"
            :class="cn('', item.meta?.iconStyle ?? null)" />
        </template>

        <template #content>
          {{ item.name }}
        </template>
      </ExpandNavLink>

      <NavFollow variant="ghost" />
    </template>

    <template #footer>
      <NavUpdateMatches
        variant="neutral" />
    </template>
  </DockTemplate>
</template>