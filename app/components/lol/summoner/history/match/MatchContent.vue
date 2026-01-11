<script lang="ts" setup>
import { MatchBuild, MatchDataTable, MatchScoreboard } from '#components'

defineOptions({
  inheritAttrs: false,
})

const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()

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

const timeline: PlayerTimeline = await getTimeline(match.matchId, match.regionId, match.player.puuid)
</script>

<template>
  <LazyCollapsibleContent
    class="h-201 w-full p-0 text-2 **:select-none">
    <Tabs
      v-model:model-value="modelValue"
      class="p-0 drop-shadow-[1px_-1px_0_color-mix(in_lch,var(--color-b3)_70%,transparent_30%)]">
      <FileTabsList
        class="relative h-9 w-[98%] gap-x-1 overflow-x-hidden">
        <template
          v-for="tab, i in tabs"
          :key="i">
          <FileTabTrigger
            :value="tab.name"
            class="on:field-box e z-5 h-full min-w-38 shrink-0 cursor-pointer border-b-0 px-3 font-medium on:bg-[color-mix(in_lch,var(--color-b2)_40%,white_60%)]">
            {{ tab.name }}
          </FileTabTrigger>
        </template>
        <FakeTab />
      </FileTabsList>

      <div
        :class="cn('tabs-content field-box relative m-0! size-full h-192 max-h-192 min-h-full overflow-x-hidden overflow-y-auto overscroll-auto rounded-tr-xl rounded-b-xl border-t-0! bg-tint-b2/60 p-0 inset-shadow-none', { 'rounded-tl-none': modelValue === 'Scoreboard' })">
        <component
          :is="tabs[modelValue].component"
          v-if="tabs[modelValue].component"
          :match="match"
          :timeline />
      </div>
    </Tabs>
  </LazyCollapsibleContent>
</template>
