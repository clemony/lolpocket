<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { isOpen, match } = defineProps<{
  match: MatchData
  player: Player
  isOpen: boolean
}>()

const modelValue = ref<string | number>('Scoreboard')
</script>

<template>
  <AnimatePresence>
    <LazyCollapsibleContent
      v-if="isOpen"
      class="'CollapsibleContent relative h-200 group w-220 max-w-220 translate-x-0 transition duration-0 **:select-none text-xs p-0">
      <Tabs
        v-model:model-value="modelValue"
        class="relative">
        <IndicatorTabsList
          class="grid-flow-col rounded-none justify-start auto-cols-min w-full bg-b3/36 border border-b3 !mb-0">
          <IndicatorTabsTrigger
            v-for="tab in ['Scoreboard', 'Data', 'Badges']"
            :key="tab"
            :value="tab"
            class="cursor-pointer">
            {{ tab }}
          </IndicatorTabsTrigger>

          <TabIndicator />
        </IndicatorTabsList>

        <TabsContent
          value="Scoreboard"
          class="p-0 !m-0">
          <LazyMatchScoreboard :match="match" />
        </TabsContent>

        <TabsContent value="Badges">
          <LazyMatchBadgesEarned
            v-if="modelValue === 'Badges'"
            :match="match" />
        </TabsContent>

        <TabsContent
          value="Data"
          class="">
          <LazyMatchDataTable
            v-if="modelValue === 'Data'"
            :match="match" />
        </TabsContent>
      </Tabs>
    </LazyCollapsibleContent>
  </AnimatePresence>
</template>
