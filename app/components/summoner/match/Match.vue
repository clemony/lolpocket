<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()

const modelValue = ref<string | number>('Scoreboard')
</script>

<template>
  <CollapsibleContent
    class="'CollapsibleContent relative h-200 group w-220 max-w-220 translate-x-0 transition duration-0 **:select-none text-2 p-0">
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
          v-if="modelValue == 'Badges'"
          :match="match" />
      </TabsContent>

      <TabsContent
        value="Data"
        class="">
        <LazyMatchDataTable
          v-if="modelValue == 'Data'"
          :match="match" />
      </TabsContent>
    </Tabs>
  </CollapsibleContent>
</template>
