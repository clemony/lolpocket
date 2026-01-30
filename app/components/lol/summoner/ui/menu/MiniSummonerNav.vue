<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { childRoutes, links, summoner } = defineProps<{
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
            <SummonerIcon class="rounded-field size-11 size-full" :summoner />
            <SummonerLevel
              class="bg-neutral text-nc absolute -bottom-1.5 z-1 rounded-full pt-px text-sm"
            />
          </div>
        </template>
        <template #content>
          <div class="flex w-full flex-col gap-1 py-1">
            <p
              class="inline-flex flex-nowrap items-center justify-between gap-2 text-nowrap"
            >
              <SummonerName
                class="truncate font-serif leading-none font-bold"
                as="h4"
              />
            </p>
            <p
              class="flex inline-flex w-full items-center justify-between gap-2 align-bottom text-sm **:leading-none [&_svg]:size-3"
            >
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
        @click="navigateTo(links[item.name])"
      >
        <template #icon>
          <Icon
            class="absolute size-5.5 place-self-center object-center"
            :name="String(item.meta?.icon)"
            :class="cn('', item.meta?.iconStyle ?? null)"
          />
        </template>

        <template #content>
          {{ item.name }}
        </template>
      </ExpandNavLink>

      <NavFollow variant="ghost" />
    </template>

    <template #footer>
      <NavUpdateMatches variant="neutral" />
    </template>
  </DockTemplate>
</template>
