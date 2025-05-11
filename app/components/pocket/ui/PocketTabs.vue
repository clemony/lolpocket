<script lang="ts" setup>
import ChampionsCounter from 'components/pocket/complete/counters/ChampionsCounter.vue'

const { pocket } = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()

const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})
// TODO when complete initial link click goes to summary. change champions link always to champions and outline will be on empty

const plinks = [
  {
    name: 'Champions',
    value: `/pocket/${route.params.pocketKey}`,
    component: ChampionsCounter,
  },
  {
    name: 'Items',
    value: `/pocket/${route.params.pocketKey}/items`,
    component: ChampionsCounter,
  },
  {
    name: 'Runes',
    value: `/pocket/${route.params.pocketKey}/runes`,
    component: ChampionsCounter,
  },
  {
    name: 'Outline',
    value: `/pocket/${route.params.pocketKey}/outline`,
    component: ChampionsCounter,
  },
]
</script>

<template>
  <Tabs v-model:model-value="pocketNav" orientation="vertical"  class="" @update:model-value="e => navigateTo(e.toString())">
    <IndicatorTabsList orientation="vertical" class="w-full gap-1  justify-start grid grid-cols-1  ">
      <IndicatorTabsTrigger  v-for="link in plinks" :key="link.name" orientation="vertical" class="!px-4 !flex h-9.5 group justify-between [&_button]:!w-full max-w-full" :value="link.value">
        <span class="grow text-start">
          {{ link.name }}
        </span>
   
          <component v-if="pocket" :is="link.component"  :pocket="pocket" class="badge transition duration-400 w-auto group-data-[state=active]:**:!text-nc delay-200 group-data-[state=active]:badge-neutral"/>
      
      </IndicatorTabsTrigger>
      <TabIndicator orientation="vertical" />
    </IndicatorTabsList>
  </Tabs>
</template>