<script lang="ts" setup>
const as = useAccountStore()
const ss = useSummonerStore()
const summoner = computed (() => ss.getSummoner(as.userAccount?.riot?.puuid))
</script>

<template>
  <!--   <SidebarMenuButton
    v-if="summoner"
    as-child
    class="h-16 w-full"> -->
  <NuxtLink
    :to="`/summoner/${as.userAccount.riot.region}/${as.userAccount.riot.name}_${as.userAccount.riot.tag}`"
    class="justify-start grid items-center chat chat-start size-full group/friend">
    <SummonerIcon class="rounded-full chat-image size-11.5 shrink-0" />

    <div class="flex chat-header justify-between w-full gap-px -translate-y-1 pl-1 pr-10">
      <div class="flex items-center gap-1">
        <SummonerName
          class="!text-3 drop-shadow-sm group-hover/friend:underline text-bc/94 font-normal" />
        <SummonerTag
          :summoner
          class="mb-px text-1 [&_svg]:size-3 opacity-50 " />
      </div>
      <div class="flex items-center lowercase gap-2 opacity-0 transition-opacity duration-200 group-hover/friend:opacity-50 align-middle   font-normal">
        <SummonerRegion
          :region-id="summoner.region"
          class="[&_svg]:size-2.5" />

        <SummonerLevel :summoner />
      </div>
    </div>

    <div class="chat-bubble py-1 ">
      hi
    </div>

    <slot />
  </NuxtLink>
<!--   </SidebarMenuButton> -->
</template>