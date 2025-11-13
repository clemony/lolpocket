<script lang="ts" setup>
const { state } = defineProps<{
  state: SummonerData;
}>();
definePageMeta({
  name: "history",
  title: "match history",
  icon: "history",
  listClass: "**:stroke-[1.6]",
  order: 0,
});

const scrollMain = useTemplateRef<HTMLElement>("scrollMain");
provide<Scroll>("scroll-top", { top: scroll });
</script>

<template>
  <div
    :class="
      cn(
        `
          z-auto mb-42 -ml-15 flex h-max min-h-screen w-[1040px] gap-8
          justify-self-center
        `,
      )
    "
  >
    <div class="scrollbar-none grid shrink justify-end">
      <MatchHistoryAside />
    </div>
    <SlideInTopOutBottom
      group
      :class="cn('flex h-max min-w-220 grow flex-col justify-center gap-8')"
    >
      <!--         <SummonerChampionModule
          v-if="ms().filter?.champion"
          :summoner
          :champion-name="ms().filter?.champion" /> -->
      <MatchList v-if="state" ref="scrollMain" :state />
    </SlideInTopOutBottom>
  </div>
</template>
