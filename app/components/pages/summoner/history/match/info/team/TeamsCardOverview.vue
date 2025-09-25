<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="grid grid-cols-2 justify-self-end max-w-74 gap-4 grid-flow-col overflow-hidden gap-y-px grid grid-rows-5 ">
    <BtnLink
      v-for="player in match.participants"
      :key="player.puuid"
      variant="link"
      :to="`/summoner/${route.params.region}/${player.riotIdGameName}_${player.riotIdTagline}`"
      :class="cn('flex grow gap-2 overflow-hidden', { 'col-start-1': player.teamId === 100, 'col-start-2 ': player.teamId === 200 })">
      <div
        class="flex gap-2 overflow-hidden">
        <ChampionIcon
          v-if="player"
          :id="player?.championId"
          v-tippy="{
            content: ix().champNameById(player?.championId),
            placement: 'right',
          }"
          alt="champion-icon"
          class="rounded-tiny size-6 dst shadow-xs" />

        <a
          v-tippy="{ content: player.riotIdGameName, placement: 'right' }"
          class="text-xxs tracking-tight h-full  w-full text-nowrap  font-medium truncate">
          {{ player.riotIdGameName }}
        </a>
      </div>
    </BtnLink>
  </div>
</template>
