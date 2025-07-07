<script lang="ts" setup>
const props = defineProps<{
  match: any
}>()


const match = computed (() => {
  return props.match
})

const blue = computed (() => {
  return match.value.info.participants.filter(p => p.teamId == 100)
})

const red = computed (() => {
  return match.value.info.participants.filter(p => p.teamId == 200)
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
  <Tabs v-model:model-value="modelValue" class="pt-14 relative">
    <IndicatorTabsList class="absolute grid-cols-3 top-4.25 right-6">
      <IndicatorTabsTrigger v-for="tab in list" :key="tab" :value="tab" class="cursor-pointer">
        {{ tab }}
      </IndicatorTabsTrigger>

      <TabIndicator  />
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