<script lang="ts" setup>
const { state } = defineProps<{
  state: PlayerData
}>()
definePageMeta({
  key: 'h',
  name: 'history',
  title: 'match history',
  icon: 'history',
  order: 0,
})

const container = useTemplateRef<HTMLDivElement>('')

function scroll() {
  scrollContainerToTop(container.value)
}

provide<Scroll>('scroll-top', { top: scroll })
</script>

<template>
  <div
    :class="
      cn(
        'flex mx-auto  gap-6  z-auto  mb-42  w-full justify-start items-start',
      )
    ">
    <div class="w-[43%] grid z-auto sticky top-0 mb-42 justify-end pl-6 pr-8">
      <MatchHistoryAside :state />
    </div>
    <SlideInTopOutBottom
      group
      :class="
        cn('flex flex-col gap-10  justify-center w-[57%] pl-8 mpr-4 pb-px')
      ">
      <!--         <SummonerChampionModule
          v-if="ms().filter?.champion"
          :summoner
          :champion-name="ms().filter?.champion" /> -->
      <MatchList
        v-if="state"
        ref="container"
        :state />
    </SlideInTopOutBottom>
  </div>
</template>
