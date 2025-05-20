<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

import ChampionsCounter from 'components/pocket/ui/counters/ChampionsCounter.vue'
import ItemsCounter from 'components/pocket/ui/counters/ItemsCounter.vue'

import RunesCounter from 'components/pocket/ui/counters/RunesCounter.vue'


const { pocket } = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()

const pocketNav = ref(route.path)

watchEffect(() => {
if (pocketNav.value != route.path)
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
    component: ItemsCounter,
  },
  {
    name: 'Runes',
    value: `/pocket/${route.params.pocketKey}/runes`,
    component: RunesCounter,
  },
  {
    name: 'Outline',
    value: `/pocket/${route.params.pocketKey}/card`,
  },
]
</script>

<template>
  <Tabs v-model:model-value="pocketNav" orientation="vertical" class="" @update:model-value="e => navigateTo(e.toString())">
    <IndicatorTabsList orientation="vertical" class="w-full gap-1  justify-start grid grid-cols-1  p-2 field-box ">
      <IndicatorTabsTrigger
        v-for="link in plinks" :key="link.name"
        orientation="vertical" class="!px-4 !flex h-9.5 group justify-between [&_button]:!w-full max-w-full text-3" :value="link.value">
        <span class="grow text-start">
          {{ link.name }}
        </span>

        <AnimatePresence as="div" class="h-fit rounded-lg-2  badge  drop-shadow-sm  drop-shadow-black/5  relative border-b3/60 border ">
          <motion.span
            v-if="link.value == pocketNav"
            class="  badge-neutral  h-full inset-shadow-xs inset-shadow-b3/30 rounded-lg-2 px-3.5  absolute z-1 badge"
            :initial="{
              scale: 0,
              opacity: 0 }"
            :animate="{
              scale: 1,
              opacity: 1,
            }"
            :exit="{
              scale: 0,
              opacity: 0 }"
            :transititon="{
              type: 'spring',
              bounce: 0.25,
            }" />
          <component :is="link.component" v-if="pocket" :pocket="pocket" class=" w-auto transition duration-400  group-data-[state=active]:**:!text-nc z-2" />
        </AnimatePresence>
      </IndicatorTabsTrigger>
      <TabIndicator orientation="vertical" />
    </IndicatorTabsList>
  </Tabs>
</template>