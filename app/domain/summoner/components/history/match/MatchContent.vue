<script lang="ts" setup>
import { useTimeline } from "~/domain/summoner/composables/match/useTimeline.js"
import LazyMatchScoreboard from "./scoreboard/MatchScoreboard.vue"

defineOptions({
  inheritAttrs: false,
})
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()

const tabs = [
  {
    label: "Scoreboard",
    component: LazyMatchScoreboard,
  },
  {
    label: "Statistics",
    component: defineAsyncComponent(
      () =>
        import("~/domain/summoner/components/history/match/stats/MatchDataTable.vue")
    ),
  },
  {
    label: "Build",
    component: defineAsyncComponent(
      () =>
        import("~/domain/summoner/components/history/match/timeline/MatchBuild.vue")
    ),
  },
]

const modelValue = ref<string>("Scoreboard")

const { getTimeline } = useTimeline()

const timeline: PlayerTimeline | null = await getTimeline(
  match.matchId,
  match.regionId,
  player.puuid
)
</script>

<template>
  <div class="relative h-205 w-full p-0 text-sm **:select-none">
    <!--    <TabsRoot
      v-model:model-value="modelValue"
      class="p-0 drop-shadow-[1px_-1px_0_color-mix(in_lch,var(--color-p3)_70%,transparent_30%)]">
      <FileTabsList class="relative h-9 w-[98%] gap-x-1 overflow-x-hidden">
        <template v-for="(tab, i) in tabs" :key="i">
          <FileTabTrigger
            class="on:field-box e on:dark:bg-tint-p0/1 on:light:bg-tint-p2/60 z-5 h-full min-w-38 shrink-0 cursor-pointer border-b-0 px-3 font-medium"
            :value="tab.name">
            {{ tab.name }}
          </FileTabTrigger>
        </template>
        <FakeTab />
      </FileTabsList> -->

    <UTabs
      v-model:model-value="modelValue"
      value-key="label"
      size="sm"
      :ui="{
        list: 'h-10! shrink-0 border-2 border-p0 bg-p0/80 shadow-none ring-0 inset-shadow-none backdrop-blur-sm',
        root: 'mt-2 h-10! shrink-0! px-3 inset-shadow-none',
        indicator: 'border-1 border-p0 bg-p0/20 ring ring-p0',
      }"
      :items="tabs">
      <template #content="{ item }">
        <div
          v-if="item?.label === 'Statistics'"
          class="from-p2-light to-p2-light/90 absolute top-9 left-2 z-8 h-7 w-30 bg-linear-to-b" />
        <div
          :class="
            cn(
              'relative size-full h-196 max-h-196 min-h-full cursor-default overflow-x-hidden overflow-y-auto overscroll-auto rounded-tr-xl rounded-b-xl border-t-0!',
              { 'rounded-tl-none': item.label === 'Scoreboard' }
            )
          ">
          <component
            :is="item.component"
            v-if="item.component"
            :match="match"
            :player
            :timeline />
        </div>
      </template>
    </UTabs>
    <!--    </TabsRoot>       <div
          :class="
            cn(
              'tabs-content relative m-0! size-full h-196 max-h-196 min-h-full cursor-default overflow-x-hidden overflow-y-auto overscroll-auto rounded-tr-xl rounded-b-xl border-t-0!  p-0 inset-shadow-none',
              { 'rounded-tl-none': item.label === 'Scoreboard' },
            )
          "> -->
  </div>
</template>
