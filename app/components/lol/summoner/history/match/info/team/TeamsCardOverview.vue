<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="
      ml-2 grid max-h-full w-68 grid-flow-col grid-cols-2 grid-rows-5 gap-0.5
      gap-y-0.5 justify-self-end overflow-hidden
    ">
    <BtnLink
      v-for="player in match.participants"
      :key="player.puuid"
      size="5"
      variant="link"
      :to="`/summoner/${player.puuid}`"
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
            placement: 'left',
            theme: 'neutral one',
          }"
          size="sq-5"
          alt="champion-icon"
          class="shadow-xs dst" />

        <tippy
          tag="a"
          :content="player.riotIdGameName"
          placement="right"
          theme="neutral one"
          :offset="[0, 16]"
          class="
            h-full w-full truncate text-1 font-medium tracking-tight text-nowrap
            normal-case
          ">
          {{ player.riotIdGameName }}
        </tippy>
      </div>
    </BtnLink>
  </div>
</template>
