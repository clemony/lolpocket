<script lang="ts" setup>
const s = await ss().resolveByPuuid(as().account?.puuid)
const summoner = computed(() => s)

// "`/summoner/$as().account.region}/$as().account.name}_$as().account.tag}`"
</script>

<template>
  <Button
    v-if="summoner"
    class="group/friend chat-start chat h-16 w-full">
    <SummonerIcon class="chat-image size-11.5 shrink-0 rounded-full" />

    <div
      class="
        chat-header flex w-full -translate-y-1 justify-between gap-px pr-10 pl-1
      ">
      <div class="flex items-center gap-1">
        <SummonerName
          class="
            text-3! font-normal text-bc/94 drop-shadow-sm
            group-hover/friend:underline
          " />
        <SummonerTag
          :summoner
          class="mb-px text-1 opacity-50 [&_svg]:size-3" />
      </div>
      <div
        class="
          flex items-center gap-2 align-middle font-normal lowercase opacity-0
          transition-opacity duration-200 group-hover/friend:opacity-50
        ">
        <SummonerRegion
          :region-id="summoner.region"
          class="[&_svg]:size-2.5" />

        <SummonerLevel :summoner />
      </div>
    </div>

    <div class="chat-bubble py-1">
      hi
    </div>

    <slot />
  </Button>
</template>
