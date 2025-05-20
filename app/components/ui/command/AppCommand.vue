<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'
import Fuse from 'fuse.js'

const us = useUiStore()
const ps = usePocketStore()

const championIndex = await $fetch<ChampionIndex[]>('/api/index/champion-index.json')
const champions = computed(() => {
  return Object.values(championIndex)
}, null)

const itemIndex = await $fetch<ItemIndex[]>('/api/index/item-index.json')
const items = computed(() => {
  return Object.values(itemIndex)
}, null)

const searchQuery = ref('')

const championFuse = ref<Fuse<any> | null>(
  new Fuse(champions.value, {
        keys: ['name'],
        threshold: 0.3,
      })
)
const itemFuse = ref<Fuse<any> | null>(
  new Fuse(items.value, {
        keys: ['name'],
        threshold: 0.3,
      }))

const pocketFuse = ref<Fuse<any> | null>(
  new Fuse(ps.pockets, {
        keys: ['name', 'champions', 'tags'],
        includeMatches: true,
        threshold: 0.3,
      })
)

const pocketResult = computed(() => {
  if (!pocketFuse.value)
    return []
  const results = pocketFuse.value.search(searchQuery.value)
  console.log('💠 - pocketResult - results:', results)
  return results.map(result => result.item)
})

const championResult = computed(() => {
  if (!championFuse.value)
    return []
  const results = championFuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})

const itemResult = computed(() => {
  if (!itemFuse.value)
    return []
  const results = itemFuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})

const resultsLength = computed (() => itemResult.value.length + championResult.value.length + pocketResult.value.length)

const searchVariants = {
  hidden: {
    maxHeight: '60px',
  },
  visible: {
    maxHeight: '100%',
  },
}
</script>

<template>
  <Dialog v-model:open="us.commandOpen">
    <LazyFadeDialogContent class="bg-transparent   min-w-130  w-130 p-0 m-0 min-h-200 max-h-200 shadow-none border-none ring-none outline-none focus:outline-none focus:ring-none" @interact-outside="us.commandOpen = false">
      <HiddenDialogHeader title="search lolpocket" desc="search pages, pockets, items, champions, summoners, & more" />

      <motion.div class="bg-b1/90 overflow-hidden inset-shadow-sm w-130 max-h-260   rounded-box !p-0  border-2  focus:!outline-0 !border-b4 focus:!ring-b3 focus:!ring-offset-b2"
      
      :variants="searchVariants"
          initial="hidden"
          :animate="resultsLength ? 'visible' : 'hidden'"
          exit="hidden">
        <search class="w-full h-15 flex backdrop-blur-md items-center relative" :class="{ 'border-b border-b-b3': searchQuery }">
          <icon name="search" class="absolute left-4  top-4.25 text-bc/40 dst size-6" />
          <input v-model="searchQuery" :spellcheck="false" class="w-full rounded-3xl text-bc/60 h-14 pl-14 !text-6" />
        </search>

        <AnimatePresence as="div" class="size-full backdrop-blur-md overflow-auto max-h-244 pl-1 *:first:pt-2 *:last:pb-2" multiple >
          <CommandCategory name="Pockets" :results="pocketResult">
            <CommandResult v-for="pocket in pocketResult" :key="pocket.key">
              <PocketIcon :url="pocket.icon" :alt="pocket.key" class="size-7 rounded-lg **:text-1" />
              {{ pocket.name }}
            </CommandResult>
          </CommandCategory>

          <CommandCategory name="Champions" :results="championResult">
            <template #icon>
              <i-lol-champ class="size-4.5 dst" />
            </template>
            <CommandResult v-for="champion in championResult" :key="champion.key">
              <ChampionIcon :id="champion.id" :alt="champion.key" class="size-7 rounded-full" />
              {{ champion.name }}
            </CommandResult>
          </CommandCategory>

          <CommandCategory name="Items" :results="itemResult">
            <template #icon>
              <icon name="bow" class="size-4.5 dst" />
            </template>
            <CommandResult v-for="item in itemResult" :key="item.id">
              <Item :id="item.id" :alt="item.key" class="size-7 rounded-full" />
              {{ item.name }}
            </CommandResult>
          </CommandCategory>
        </AnimatePresence>
      </motion.div>
    </LazyFadeDialogContent>
  </Dialog>
</template>