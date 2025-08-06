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
  return summoner?.mastery?.full?.slice(10).concat(noMastery.value)
})

onMounted (() => {
  fetchMastery()
})
</script>

<template>
  <main class="py-14 px-1 bg-b1 flex-col relative overflow-hidden  size-full items-center">
    <article
      v-if="summoner?.mastery?.top"
      class="grid grid-cols-6 max-w-[1040px]  mx-auto  h-fit  gap-8 ">
      <h1 class="col-span-full dst font-bold">
        Highest Mastery
      </h1>
      <MasteryPhoto
        v-for="champion in summoner.mastery.top.slice(0, 10)"
        :key="champion.id"
        :champion />
    </article>

    <Collapsible
      v-model:open="isOpen"
      as="div"
      class="mt-14 Collapsible h-full mx-auto max-w-[1040px]  justify-center">
      <CollapsibleTrigger class="flex-nowrap group/more text-nowrap overflow-hidden pr-2 cursor-pointer w-full items-center mb-12 justify-start flex gap-4 text-2 text-bc/80 hover:text-bc">
        <icon
          name="down-sm"
          :class="cn('transition-transform duration-200 text-bc/80 group-hover/more:text-bc   shrink-0 size-5', { '-rotate-90': !isOpen })" />

        {{ isOpen ? 'View less...' : 'View all...' }}
        <Separator :class="cn(' transition-transform duration-1000  group-hover/more:bg-b3', { 'scale-x-100 opacity-100 origin-left  transition-transform duration-1000  ': isOpen, 'scale-x-0 origin-right opacity-0  transition-transform duration-1000 ': !isOpen })" />
      </CollapsibleTrigger>
      <LazyCollapsibleContent class="w-full  CollapsibleContent pb-14 ">
        <ListboxRoot
          :multiple="false"
          selection-behavior="replace"
          class="overflow-y-auto transition-all duration-200 h-inherit w-full max-h-imherit">
          <!--           <Teleport
            defer
            to=".search-wrapper">
            <ListboxFilter
              v-model:model-value="champQuery"
              type="text"
              class="size-full px-5 text-2" />
          </Teleport> -->

          <ListboxVirtualizer
            v-if="summoner?.mastery?.full?.length"
            ref="virtualizer"
            v-slot="{ option }"
            as-child
            :options="list"
            :text-content="(o) => ix.champNameById(o.id)"
            :estimate-size="40"
            class="h-inherit max-h-imherit w-full grid grid-cols-6 w-full h-fit grid-flow-col  gap-8">
            <ListboxItem
              :key="option.id"
              :value="option.id">
              <MasteryPhoto
                v-if="option.id"
                :champion="option" />
            </ListBoxItem>
          </ListboxVirtualizer>
          <div
            v-else
            class="w-full p-14 grid place-items-center">
            <icon
              name="svg-spinners:bars-scale-middle"
              class="shrink-0" />
          </div>
        </ListboxRoot>
      </LazyCollapsibleContent>
      <CollapsibleTrigger
        class="btn mt-10 mx-auto text-2 text-bc/76 hover:text-bc btn-ghost font-medium"
        @click="getFullMastery()">
        {{ isOpen ? 'View less...' : 'View all...' }}
      </CollapsibleTrigger>
    </Collapsible>
  </main>
</template>