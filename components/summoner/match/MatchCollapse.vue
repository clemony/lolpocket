<script lang="ts" setup>
const props = defineProps<{
  match: any
}>()

const us = useUiStore()

const match = computed (() => {
  return props.match
})

const blue = computed (() => {
  return match.value.participants.filter(p => p.teamId == 100)
})

const red = computed (() => {
  return match.value.participants.filter(p => p.teamId == 200)
})
console.log('💠 - blue - blue:', blue)

const modelValue = ref<string | number>('Scoreboard')
const list = ['Scoreboard', 'Player', 'Team']
</script>

<template>
  <div class="size-full grid  ">
    <SlidingTabs
      v-model:model-value="modelValue"
      :store="us.matchTabs"
      :list="list"
      indicator-class="top-1 max-w-31"
      class="justify-self-end h-12 pb-0.25 *:h-9.5 pt-0.25 *:rounded-lg"
      inner-class="flex justify-self-end h-12 size-full *:-mt-2  gap-1 ">
      <TabsContent value="Scoreboard" class="px-2 mt-1">
        <LazyMatchScoreboard :match="match" :blue="blue" :red="red" />
      </TabsContent>
    </SlidingTabs>
  </div>
</template>