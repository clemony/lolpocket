<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()
const MatchBuild = resolveComponent('MatchBuild')
const MatchDataTable = resolveComponent('MatchDataTable')
const MatchScoreboard = resolveComponent('MatchScoreboard')

const modelValue = ref<string>('Scoreboard')

const tabs = {
  Scoreboard: {
    name: 'Scoreboard',
    component: MatchScoreboard,
  },
  Statistics: {
    name: 'Statistics',
    component: MatchDataTable,
  },

  //
  Build: {
    name: 'Build',
    component: MatchBuild,
  },
}

const { getTimeline } = useTimeline()

const timeline: PlayerTimeline = await getTimeline(match.matchId, match.regionId, player.puuid)
</script>

<template>
  <LazyCollapsibleContent
    class="relative h-205 w-full p-0 text-sm **:select-none"
  >
    <Tabs
      v-model:model-value="modelValue"
      class="p-0 drop-shadow-[1px_-1px_0_color-mix(in_lch,var(--color-b3)_70%,transparent_30%)]"
    >
      <FileTabsList
        class="relative h-9 w-[98%] gap-x-1 overflow-x-hidden"
      >
        <template
          v-for="tab, i in tabs"
          :key="i"
        >
          <FileTabTrigger
            :value="tab.name"
            class="on:field-box e z-5 h-full min-w-38 shrink-0 cursor-pointer border-b-0 px-3 font-medium on:dark:bg-tint-b1/1 on:light:bg-tint-b2/60"
          >
            {{ tab.name }}
          </FileTabTrigger>
        </template>
        <FakeTab />
      </FileTabsList>

      <div
        v-if="tabs[modelValue].name === 'Statistics'"
        class="from-b2-light to-b2-light/90 absolute top-9 left-2 z-8 h-7 w-30 bg-linear-to-b"
      />
      <div
        :class="cn('field-box tabs-content relative m-0! size-full h-196 max-h-196 min-h-full cursor-default overflow-x-hidden overflow-y-auto overscroll-auto rounded-tr-xl rounded-b-xl border-t-0! p-0 inset-shadow-none', { 'rounded-tl-none': modelValue === 'Scoreboard' })"
      >
        <component
          :is="tabs[modelValue].component"
          v-if="tabs[modelValue].component"
          :match="match"
          :player
          :timeline
        />
      </div>
    </Tabs>
  </LazyCollapsibleContent>
</template>
