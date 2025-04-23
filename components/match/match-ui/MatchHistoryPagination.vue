<script lang="ts" setup>
import { PaginationList, PaginationListItem, PaginationRoot } from 'reka-ui'
import { AnimatePresence, motion } from 'motion-v'

const props = defineProps<{
  matchData: any
  puuid: string
}>()

const {
  matchData,
  loading,
  loadMoreMatches,
} = useMatchData(props.puuid)
console.log('💠 - matchData:', matchData)
const { dataReady, filteredMatches } = useFilteredMatches(matchData)
</script>

<template>
  <PaginationRoot
    v-slot="{ page, pageCount }"
    :total="filteredMatches.length"
    :items-per-page="20"
    show-edges>
    <transition-slide
      group
      as="div"
      class="flex flex-col gap-7 w-full">
      <template
        v-if="dataReady && filteredMatches.length">
        <LazyMatchCard
          v-for="(match, i) in filteredMatches.slice((page - 1) * 20, page * 20)"
          :key="match.metadata.matchId || i"
          :match="match" />
      </template>
      <template
        v-else-if="loading">
        <MatchCardSkeleton v-for="i in 20" :key="i" hydrate-on-visible />
      </template>

      <MatchesEmptyCard v-else error="filter" />
    </transition-slide>
    <PaginationList v-slot="{ items }" as-child>
      <transition-slide group class="flex mt-3 items-center gap-1 justify-center w-220">
        <PaginationFirst v-if="page != 1" />
        <PaginationPrev v-if="page != 1" />

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <button class="btn  btn-square btn-sm rounded-md-1" :class="{ ' shadow-xs ': item.value === page, 'btn-ghost': item.value != page }">
              {{ item.value }}
            </button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext v-if="page != pageCount" />
        <PaginationLast v-if="page != pageCount" />

        <button
          v-if="page * 20 >= matchData.length && props.puuid" v-tippy="'Load More...'" class="btn btn-sm  shadow-xs rounded-md-1  btn-square "
          :disabled="loading"
          @click="loadMoreMatches">
          <icon v-if="!loading" name="radix-icons:update" class="dst size-4.5  hover:text-bc tldr-20" />
          <icon v-else name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
        </button>
      </transition-slide>
    </PaginationList>
  </PaginationRoot>
</template>