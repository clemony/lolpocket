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

const championData = await import(
  `#shared/records/champions/${champKeyById(match.player.championId)}.ts`
)
const champion = computed(() => championData.default)

useTooltips(container)
</script>

<template>
  <div
    ref="container"
    class="grid size-full justify-center px-6">
    <ItemTimeline
      v-if="timeline"
      :timeline
      :match />
    <div class="grid gap-2">
      <div class="flex gap-2">
        <div class="grid shrink-0 place-items-center gap-y-2">
          <Img
            v-for="ability, i in champion.abilities.filter(a => a.key !== 'P')"
            :key="i"
            alt="icon"
            :img="ability.icon"
            class="pointer-events-none size-10 rounded-lg shadow-sm dss" />
        </div>
        <div class="grid h-full grid-cols-18 grid-rows-4 place-items-center gap-2">
          <Icons
            v-for="level, i in timeline?.skills"
            :key="i"
            size="5"
            name="check-fill"
            :style="{
              gridColumnStart: i + 1,
              gridRowStart: level,
            }"
            class="size-4 dss" />
        </div>
      </div>
    </div>
    <div class="mt-4 flex items-end gap-6">
      <PlayerFullRunes :match />
    </div>
  </div>
</template>
<!--  -->