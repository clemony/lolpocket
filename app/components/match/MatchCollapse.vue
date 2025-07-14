<script lang="ts" setup>
const { match } = defineProps<{
  match: any
}>()

const blue = computed (() => {
  return match.info.participants.filter(p => p.teamId == 100)
})

const red = computed (() => {
  return match.info.participants.filter(p => p.teamId == 200)
})

const modelValue = ref<string | number>('Scoreboard')
const list = ['Scoreboard', 'Data', 'Credits']

watch(
  () => modelValue.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <Tabs v-model:model-value="modelValue" class="pt-12 relative">
    <IndicatorTabsList class="absolute grid-cols-3 top-3 right-6 bg-b3/36 border border-b3 ">
      <IndicatorTabsTrigger v-for="tab in list" :key="tab" :value="tab" class="cursor-pointer">
        {{ tab }}
      </IndicatorTabsTrigger>

      <TabIndicator />
    </IndicatorTabsList>

    <TabsContent value="Scoreboard" class="px-2 ">
      <LazyMatchScoreboard :match="match" :blue="blue" :red="red" />
    </TabsContent>

    <TabsContent value="Credits" class="px-2 ">
      <LazyMatchTributes :match="match" :blue="blue" :red="red" />
    </TabsContent>

    <TabsContent value="Data" class="">
      <LazyMatchDataTable :match="match" :blue="blue" :red="red" />
    </TabsContent>
  </Tabs>
</template>