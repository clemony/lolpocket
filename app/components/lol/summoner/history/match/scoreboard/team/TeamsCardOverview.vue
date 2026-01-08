<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="
      ml-2 grid max-h-full w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 gap-0.5 gap-y-0.5
      justify-self-end overflow-hidden
    ">
    <BtnLink
      v-for="player in match.participants"
      :key="player.puuid"
      data-tip="player"
      data-theme="neutral line"
      :data-id="player.profileIcon"
      data-placement="right"
      :data-name="player.riotIdGameName"
      :data-tag="player.riotIdTagline"
      size="5"
      variant="link"
      :to="`/summoner/${player.puuid}`"
      :class="
        cn('flex size-full items-center gap-2 overflow-hidden text-1 font-medium tracking-tight text-nowrap normal-case', {
          'col-start-1': player.teamId === 100,
          'col-start-2 ': player.teamId === 200,
        })
      "
      @click.stop>
      <ChampionIcon
        v-if="player"
        :id="player?.championId"
        size="sq-5"
        alt="champion-icon"
        class="shadow-xs dst" />

      <span
        class="truncate">
        {{ player.riotIdGameName }}
      </span>
    </BtnLink>
  </div>
</template>
