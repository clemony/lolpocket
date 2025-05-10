<script lang="ts" setup>
const route = useRoute()

const { pocket, quote } = defineProps<{
pocket: Pocket
  quote: string | null
}>()
const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})
//TODO when complete initial link click goes to summary. change champions link always to champions and outline will be on empty

const plinks = [
  {
    name: 'Champions',
    value: `/pocket/${pocket.key}`,
  },
  {
    name: 'Items',
    value: `/pocket/${pocket.key}/items`,
  },
  {
    name: 'Runes',
    value: `/pocket/${pocket.key}/runes`,
  },
  {
    name: 'Outline',
    value: `/pocket/${pocket.key}/outline`,
  },
]
</script>

<template>
  <div class="absolute top-16 bg-b1 z-2 left-0  overflow-hidden py-4 px-8 items-center  flex  w-full">
        <div class="flex items-center gap-8">
      <h1>
        Champions
      </h1>
      <p class="text-4 font-serif font-semibold w-full">
        {{ quote }}
      </p>
    </div>
<Grow  />
    <Tabs v-model:model-value="pocketNav" class="" @update:model-value="e => navigateTo(e.toString())">
      <IndicatorTabsList class="w-full  max-w-140 grid grid-cols-4">
        <IndicatorTabsTrigger v-for="link in plinks" :key="link.name" :value="link.value">
          {{link.name}}
        </IndicatorTabsTrigger>
        <TabIndicator  />
      </IndicatorTabsList>
    </Tabs>

  </div>
</template>