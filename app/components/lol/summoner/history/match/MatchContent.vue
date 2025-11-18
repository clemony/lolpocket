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
      class="
        'CollapsibleContent group relative h-200 w-full translate-x-0 p-0 text-2
        transition duration-0 **:select-none
      ">
      <Tabs
        v-model:model-value="modelValue"
        class="relative">
        <TabsList

          class="
            mb-0! w-full auto-cols-min grid-flow-col justify-start rounded-none
            border border-b3 bg-b3/36
          ">
          <TabsTrigger
            v-for="tab in ['Scoreboard', 'Statistics', 'Build']"
            :key="tab"
            size="7"
            :value="tab"
            class="cursor-pointer">
            {{ tab }}
          </TabsTrigger>

          <TabIndicator />
        </TabsList>

        <TabsContent
          value="Scoreboard"
          class="m-0! p-0">
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
            :player
            :match="match" />
        </TabsContent>
      </Tabs>
    </LazyCollapsibleContent>
  </AnimatePresence>
</template>
