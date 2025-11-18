<script lang="ts" setup>
definePageMeta({
  title: 'match history',
  icon: 'history',
  listClass: '**:stroke-[1.6]',
  order: 0,
})

/* const scrollMain = useTemplateRef<HTMLElement>('scrollMain')
provide<Scroll>('scroll-top', { top: scroll }) */
</script>

<template>
  <div
    :class="
      cn('z-auto mb-42 -ml-15 flex h-max min-h-screen w-fit gap-8 justify-self-center',
      )
    ">
    <div class="scrollbar-none grid shrink justify-end">
      <MatchHistoryAside />
    </div>
    <SlideInTopOutBottom
      group
      :class="cn('flex h-max min-w-210 grow flex-col justify-center gap-8')">
      <!--         <SummonerChampionModule
          v-if="ms().filter?.champion"
          :summoner
          :champion-name="ms().filter?.champion" /> -->
      <MatchList

        ref="scrollMain" />
    </SlideInTopOutBottom>
  </div>
</template>
