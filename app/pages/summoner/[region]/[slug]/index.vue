<script lang="ts" setup>
const { state } = defineProps<{
  state: SummonerData
}>()
definePageMeta({
  name: 'history',
  title: 'match history',
  icon: 'history',
  listClass: '**:stroke-[1.6]',
  order: 0,
})

const scrollMain = useTemplateRef<HTMLElement>('scrollMain')
provide<Scroll>('scroll-top', { top: scroll })
</script>

<template>
  <div
    :class="
      cn(
        'flex justify-self-center -ml-15 h-max  z-auto mb-42 min-h-screen gap-8 w-[1040px] ',
      )
    ">
    <div class="grid  shrink scrollbar-none  justify-end  ">
      <MatchHistoryAside />
    </div>
    <SlideInTopOutBottom
      group
      :class="
        cn('flex flex-col gap-8 h-max grow min-w-220 justify-center')
      ">
      <!--         <SummonerChampionModule
          v-if="ms().filter?.champion"
          :summoner
          :champion-name="ms().filter?.champion" /> -->
      <MatchList
        v-if="state"
        ref="scrollMain"
        :state />
    </SlideInTopOutBottom>
  </div>
</template>
