<script setup lang="ts">
import { motion } from 'motion-v'

definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  alias: '/pocket/:pocket_key/champions',
  order: 1,
  path: '/pocket/:pocket_key',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const containerRef = ref<HTMLElement>()
const { height } = useElementSize(containerRef)
const baseHeight = ref<number | null>(null)

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)
watchEffect(() => {
  if (!baseHeight.value && results.value.length === ix().champions.length) {
    baseHeight.value = height.value
  }
})
</script>

<template>
  <div class="w-full pr-32 pl-14 z-auto overflow-y-auto pt-12 mx-auto">
    <div
      class="flex gap-6 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg -top-12 py-4 items-end flex-col px-2 justify-center w-full">
      <SelectedChampions :pocket="pocket">
        <Input
          v-model="searchQuery"
          aria-label="Search champions"
          placeholder="Search champions..."
          class="max-w-80 border-b4/60 h-11 w-80 ml-3"
          type="text"
          @clear:input="searchQuery = ''">
          <icon name="search" />
        </Input>
      </SelectedChampions>
    </div>

    <motion.div
      layout
      class="h-fit pb-34 justify-start grid grid-flow-row auto-cols-auto pt-10 grid-cols-[repeat(auto-fill,minmax(80px,1fr))] w-full inset-0 px-2 gap-3">
      <AnimatePresence>
        <motion.div
          v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
          :key="champion.id">
          <PocketChampion
            :align-offset="-9"
            :champion
            :pocket />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  </div>
</template>

<!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
