<script lang="ts" setup>
const as = useAccountStore()
const ss = useSummonerStore()
const summoner = computed (() => ss.getSummoner(as.account?.puuid))
</script>

<template>
  <SidebarMenuButton
    v-if="summoner"
    as-child
    class="h-16 w-full">
    <NuxtLink
      :to="`/summoner/${as.account.region}/${as.account.name}_${as.account.tag}`"
      class="flex gap-3 justify-start w-full items-center  size-full">
      <SummonerIcon class="rounded-full size-11.5 shrink-0" />

      <div class="flex justify-end flex-col w-full gap-px">
        <div class="flex items-end gap-3  *:leading-none  ">
          <SummonerName
            class="!text-6 drop-shadow-sm font-serif text-bc/94  font-bold" />
          <SummonerTag
            :summoner
            class="mb-px" />
        </div>
        <div class="flex items-center lowercase gap-4 justify-between  opacity-70 align-middle  w-full font-normal">
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