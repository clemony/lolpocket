<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="ml-2 grid max-h-full w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 gap-0.5 gap-y-0.5 justify-self-end overflow-hidden"
  >
    <Tooltip
      v-for="player in match.participants"
      :key="player.puuid"
      :text="`${player.name} #${player.tag}`"
      :img="getSummonerIcon(player.icon)"
      side="right"
    >
      <NuxtLink
        size="xs"
        :to="`/summoner/${player.puuid}`"
        :class="
          cn(
            'flex size-full items-center gap-2 overflow-hidden text-xs font-medium tracking-tight hover:underline text-nowrap normal-case',
            {
              'col-start-1': player.teamId === 100,
              'col-start-2': player.teamId === 200,
            },
          )
        "
        @click.stop
      >
        <ChampionIcon
          v-if="player"
          :id="player?.championId"
          side="left"
          class=" size-5 rounded-sm"
        />

        <span class="truncate">
          {{ player.name }}
        </span>
      </NuxtLink>
    </Tooltip>
  </div>
</template>
