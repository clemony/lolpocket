<script lang="ts" setup>
import { TabsRoot } from "reka-ui"
import { useTimeline } from "~/domain/match/useTimeline"
import MatchScoreboard from "./scoreboard/MatchScoreboard.vue"
import MatchDataTable from "./stats/MatchDataTable.vue"
import MatchBuild from "./timeline/MatchBuild.vue"

defineOptions({
  inheritAttrs: false,
})
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()

const tabs = {
  Scoreboard: {
    name: "Scoreboard",
    component: MatchScoreboard,
  },
  Statistics: {
    name: "Statistics",
    component: MatchDataTable,
  },

  //
  Build: {
    name: "Build",
    component: MatchBuild,
  },
} as const

const modelValue = ref<keyof typeof tabs>("Scoreboard")

const { getTimeline } = useTimeline()

const timeline: PlayerTimeline | null = await getTimeline(
  match.matchId,
  match.regionId,
  player.puuid,
)
</script>

<template>
  <div class="relative h-205 w-full p-0 text-sm **:select-none">
    <TabsRoot
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
      </FileTabsList>

      <div
        v-if="tabs[modelValue]?.name === 'Statistics'"
        class="from-p2-light to-p2-light/90 absolute top-9 left-2 z-8 h-7 w-30 bg-linear-to-b" />
      <div
        :class="
          cn(
            'tabs-content relative m-0! size-full h-196 max-h-196 min-h-full cursor-default overflow-x-hidden overflow-y-auto overscroll-auto rounded-tr-xl rounded-b-xl border-t-0! bg-p0 p-0 inset-shadow-none',
            { 'rounded-tl-none': modelValue === 'Scoreboard' },
          )
        ">
        <component
          :is="tabs[modelValue].component"
          v-if="tabs[modelValue].component"
          :match="match"
          :player
          :timeline />
      </div>
    </TabsRoot>
  </div>
</template>
