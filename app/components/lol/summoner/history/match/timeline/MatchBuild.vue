<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()
const { summoner } = useSummonerInject()
const { getTimeline } = useTimeline()

const container = useTemplateRef<HTMLElement>('container')

const timeline = ref<PlayerTimeline>(null)
onMounted (async () => {
  if (summoner.value && match)
    timeline.value = await getTimeline(match.matchId, summoner.value.region, summoner.value.puuid)
})

useTooltips(container)
</script>

<template>
  <div
    ref="container"
    class="flex min-h-140 w-full flex-col items-center gap-6 p-6">
    <ItemTimeline
      v-if="timeline"
      :timeline
      :match />
    <MatchSkillOrder
      v-if="timeline"
      :timeline
      :match>
      <PlayerFullRunes :match />
    </MatchSkillOrder>
  </div>
</template>
<!--  -->