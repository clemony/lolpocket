<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="ml-2 grid max-h-full w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 justify-self-end overflow-hidden">
    <UButton
      v-for="player in match.participants"
      :key="player.puuid"
      :ui="{
        label: 'tracking-tight truncate text-xs normal-case',
        base: cn('hover:*:underline', {
          'col-start-1': player.teamId === 100,
          'col-start-2': player.teamId === 200,
        }),
      }"
      :to="`/summoner/${player.puuid}`"
      size="2xs"
      variant="link"
      @click.stop>
      <Champion
        v-if="player"
        :id="player?.championId"
        side="left"
        class="size-5 rounded-sm" />
      <SummonerTooltip
        link
        :summoner="player"
        class="truncate text-start text-nowrap">
        {{ player.name }}
      </SummonerTooltip>
    </UButton>
  </div>
</template>
