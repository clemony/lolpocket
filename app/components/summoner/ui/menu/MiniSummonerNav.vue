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
          <SummonerIcon
            :summoner
            class="rounded-field size-full size-11 cursor-pointer" />
        </template>
        <template #content>
          <div class="w-full py-1 flex flex-col gap-1">
            <p class="items-center gap-3 text-nowrap flex-nowrap inline-flex">
              <SummonerName
                as="h4"
                class="leading-none font-serif font-bold truncate" />
              <SummonerTag class="[&_svg]:size-3 text-2 !align-text-bottom" />
            </p>
            <p class="flex w-full text-2 gap-3 items-center **:leading-none  inline-flex align-bottom">
              <SummonerLevel />

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