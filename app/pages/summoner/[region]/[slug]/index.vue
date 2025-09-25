<script lang="ts" setup>
const { state } = defineProps<{
  state: PlayerData
}>()
definePageMeta({
  name: 'history',
  title: 'match history',
  icon: 'history',
  order: 0,
})

const scrollMain = useTemplateRef<HTMLElement>('scrollMain')
provide<Scroll>('scroll-top', { top: scroll })
</script>

<template>
  <div
    :class="
      cn(
        'flex mx-auto  gap-6  z-auto mb-42 min-h-screen  w-full justify-start items-start',
      )
    ">
    <div class="w-[43%] grid  sticky  scrollbar-none    justify-end pl-6 pr-8">
      <MatchHistoryAside :state />
    </div>
    <SlideInTopOutBottom
      group
      :class="
        cn('flex flex-col gap-10   justify-center w-[57%] pl-8 pr-4 pb-px')
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

    <div class="fab bottom-24 right-14">
      <Button
        v-tippy="'Top'"
        size="xl"
        hover="neutral"
        variant="btn"
        class="bg-b1/90 btn-circle hover:shadow-black/14 hover:dss rounded-full border-b3 hover:!bg-neutral/94 shadow-sm shadow-black/6 drop-shadow-black/6 *:opacity-60 hover:*:opacity-100  backdrop-blur"
        @click="scrollToTop()">
        <icon
          name="arrow-up"
          class="transition-opacity duration-200" />
      </button>
    </div>
  </div>
</template>
