<script lang="ts" setup>
const summoner = await ss().resolveByPuuid(as().account?.puuid)
</script>

<template>
  <SidebarMenuButton
    v-if="summoner"
    as-child
    class="h-16 w-full">
    <NuxtLink
      :to="`/summoner/${as().account.region}/${as().account.name}_${as().account.tag}`"
      class="flex size-full w-full items-center justify-start gap-3">
      <SummonerIcon class="size-11.5 shrink-0 rounded-full" />

      <div class="flex w-full flex-col justify-end gap-px">
        <div
          class="
            flex items-end gap-3
            *:leading-none
          ">
          <SummonerName
            class="font-serif text-6! font-bold text-bc/94 drop-shadow-sm" />
          <SummonerTag
            :summoner
            class="mb-px" />
        </div>
        <div
          class="
            flex w-full items-center justify-between gap-4 align-middle
            font-normal lowercase opacity-70
          ">
          <SummonerRegion
            :region-id="summoner.region"
            class="[&_svg]:size-3" />

          <SummonerLevel :summoner />
        </div>
      </div>

      <slot />
    </NuxtLink>
  </SidebarMenuButton>
</template>
