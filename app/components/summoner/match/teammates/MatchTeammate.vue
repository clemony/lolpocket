<script lang="ts" setup>
const { player } = defineProps<{
  player: Player
}>()
console.log('💠 - player:', player)
</script>

<template>
  <div class="flex w-full h-16.5 py-2 px-5 overflow-hidden  items-center">
    <ChampionImage :player="player" :size="12" />

    <PlayerSpells :player="player" class="[&_img]:size-5.5 [&_img]:rounded-[4px] gap-0.75 ml-1 " />

    <!--     <TeammateRunes :player="player" /> -->

    <div class="overflow-hidden p-1 w-36 max-w-36 tracking-tight ">
      <p class="font-semibold  text-nowrap truncate w-full">
        {{ player.riotIdGameName }}
      </p>

      <p class="font-medium mt-2.25 text-nowrap  truncate opacity-60">
        #{{ player.riotIdTagline }}
      </p>
    </div>

    <span class="flex items-center justify-between grow size-full">
      <TeammateKDA :player="player" />

      <TeammateParticipation :player="player" />

      <TeammateScoreboardStats :player="player" />

      <TeammateVisionScore :player="player" />

      <TeammateItems v-if="player && player.item0" :player="player" class="" wrapper-class="" />

      <TeammateGold :player="player" class="max-w-21 w-21 gap-2.25" />
    </span>
  </div>
</template>