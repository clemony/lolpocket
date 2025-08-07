<script lang="ts" setup>
import type { VirtualItem, Virtualizer } from '@tanstack/vue-virtual'
import type { ListboxVirtualizerProps } from 'reka-ui'
import {
  ListboxFilter,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  ListboxVirtualizer,
  PopoverClose,
} from 'reka-ui'

const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  name: 'summoner-mastery',
})

interface GridboxVirtualizerProps extends ListboxVirtualizerProps {
  lanes: number
}

const { fetchMastery } = useSummoner(summoner?.puuid)
const isOpen = ref(false)
const ix = useIndexStore()
const champQuery = ref<string | null>('')

function getFullMastery() {
  if (summoner?.mastery?.full?.length)
    return
  fetchMastery(true)
}

const noMastery = computed (() => {
  if (!summoner?.mastery?.full?.length)
    return

  const all = ix.champions.map(c => c.id)
  const map = summoner?.mastery?.full?.map(c => c.id)

  const array = useArrayDifference(all, map)
  return array.value.map((a) => {
    return {
      id: a,
      level: 0,
      points: 0,
      lastPlayed: null,
    }
  },
  )
})

const virtualizer = ref()
console.log('💠 - virtualizer:', virtualizer.value)

const list = computed (() => {
  return summoner?.mastery?.full?.concat(noMastery.value)
})

onMounted (() => {
  fetchMastery()
})
</script>

<template>
  <main class="py-22 px-1 w-2/3 flex-col relative flex  gap-14  mx-auto size-full items-center">
    <h1 class="self-start dst font-bold">
      Champion Mastery
    </h1>
    <article
      v-if="summoner?.mastery?.top"
      class="grid grid-cols-6 grid-flow-col place-items-center py-2 overflow-hidden mx-auto gap-8 w-full "
      style="
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  ">
      <MasteryPhoto
        v-for="champion in summoner.mastery.top.slice(0, 6)"
        :key="champion.id"
        :champion />
    </article>
    <div class="w-full">
      <MasteryGrid :mastery="list" />
    </div>
  </main>
</template>