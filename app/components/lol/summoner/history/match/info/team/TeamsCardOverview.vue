<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="
      grid max-w-74 grid-flow-col grid-cols-2 grid-rows-5 gap-4 gap-y-px
      justify-self-end overflow-hidden
    ">
    <BtnLink
      v-for="player in match.participants"
      :key="player.puuid"
      variant="link"
      :to="`/summoner/${route.params.region}/${player.riotIdGameName}_${player.riotIdTagline}`"
      :class="
        cn('flex grow gap-2 overflow-hidden', {
          'col-start-1': player.teamId === 100,
          'col-start-2 ': player.teamId === 200,
        })
      ">
      <div class="flex gap-2 overflow-hidden">
        <ChampionIcon
          v-if="player"
          :id="player?.championId"
          v-tippy="{
            content: ix().champNameById(player?.championId),
            placement: 'right',
          }"
          alt="champion-icon"
          class="size-6 rounded-tiny shadow-xs dst" />

        <a
          v-tippy="{ content: player.riotIdGameName, placement: 'right' }"
          class="
            h-full w-full truncate text-1 font-medium tracking-tight text-nowrap
          ">
          {{ player.riotIdGameName }}
        </a>
      </div>
    </BtnLink>
  </div>
</template>
