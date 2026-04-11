<script lang="ts" setup>
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
const summoner = await summonerStore().resolveByPuuid(user().account?.puuid)
const accountRoute = computed(() => {
  const account = user().account
  return buildSummonerRootPath(account)
})
</script>

<template>
  <SidebarMenuButton v-if="summoner" class="h-16 w-full" as-child>
    <NuxtLink
      class="flex size-full w-full items-center justify-start gap-3"
      :to="accountRoute ?? '/'">
      <SummonerIcon class="size-11.5 shrink-0 rounded-full" />

      <div class="flex w-full flex-col justify-end gap-px">
        <div class="flex items-end gap-3 *:leading-none">
          <h1 class="font-serif text-xxl! font-bold text-pc/94 drop-shadow-sm">
            {{ summoner?.name }}
          </h1>
          <SummonerId :summoner="summoner ?? undefined" type="tag" />
        </div>
        <div
          class="flex w-full items-center justify-between gap-4 align-middle font-normal lowercase opacity-70">
          <SummonerId :summoner="summoner ?? undefined" type="region" />
          <SummonerId :summoner="summoner ?? undefined" type="level" />
        </div>
      </div>

      <slot />
    </NuxtLink>
  </SidebarMenuButton>
</template>
