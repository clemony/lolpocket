<script lang="ts" setup>
import { MatchDataTable, MatchScoreboard } from '#components'

defineOptions({
  inheritAttrs: false,
})

const { isOpen, match } = defineProps<{
  match: MatchData
  player: Player
  isOpen: boolean
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
  },
  Timeline: {
    name: 'Timeline',
  }
}
</script>

<template>
  <LazyCollapsibleContent
    v-if="isOpen"
    class="
        'group relative h-200 w-full translate-x-0 p-0 text-2
        **:select-none
      ">
    <Tabs
      v-model:model-value="modelValue"
      class="relative">
      <TabsList

        class="
            w-full auto-cols-max grid-flow-col justify-start rounded-none border
            border-b3 bg-b3/36
          ">
        <template
          v-for="tab, i in tabs"
          :key="i">
          <TabsTrigger
            size="7"
            :value="tab.name"
            class="cursor-pointer px-3 shadow-black/2">
            {{ tab.name }}
          </TabsTrigger>

          <TabIndicator class="-translate-y-px" />
        </template>
      </TabsList>

      <div
        class="m-0! p-0">
        <component
          :is="tabs[modelValue].component"
          v-if="tabs[modelValue].component"
          :match="match" />
      </div>
    </Tabs>
  </LazyCollapsibleContent>
</template>
