<script lang="ts" setup>
const { mastery } = defineProps<{
  mastery?: PlayerChampionMastery
}>()
const layoutClass = 'w-full max-w-full col-start-2  overflow-x-hidden'
const headerClass = ' first:mb-6! not-first:mt-22 first:mt-10 text-10 w-full col-start-2 font-bold h-31 sticky select-none not-first:mb-10 bg-blend-screen flex items-end pb-4 w-[104%] transition-[transform,_opacity] duration-200 -top-55  bg-b1/90 backdrop-blur z-5  border-1 border-b1'
const inActiveClass = '-translate-y-full opacity-0 backdrop-blur-none border-transparent! ring-transparent bg-transparent! transition-[transform,_opacity] duration-1000! ease-out '
const separatorClass = 'mt-22 -mb-16'
const { activeId, activeIndex } = useScrollSectionsInject()
</script>

<template>
  <div class="z-auto w-full">
    <!-- stats -->

    <div
      id="summary"
      :class="cn(headerClass, activeId !== 'summary' && activeIndex > 0 ? inActiveClass : null)">
      Summary
    </div>
    <PlayerChampionSummary
      :mastery
      :class="cn(layoutClass)" />

    <!-- spells -->

    <div
      id="spells"
      :class="cn(headerClass, activeId !== 'spells' && activeIndex > 1 ? inActiveClass : null)">
      Summoner Spells
    </div>

    <ChampionSpellStats :class="cn(layoutClass)" />
    <!--   -->

    <!-- items -->
    <div
      id="items"
      :class="cn(headerClass, activeId !== 'items' && activeIndex > 2 ? inActiveClass : null)">
      Items
    </div>
    <ChampionItemStats :class="cn(layoutClass)" />

    <!-- runes -->
    <div
      id="runes"
      :class="cn(headerClass, activeId !== 'runes' && activeIndex > 3 ? inActiveClass : null)">
      Runes
    </div>
    <ChampionRuneStats :class="cn(layoutClass)" />

    <!-- skills -->
    <div
      id="skills"
      :class="cn(headerClass, activeId !== 'skills' && activeIndex > 4 ? inActiveClass : null)">
      Abilities
    </div>
    <ChampionSkillStats :class="cn(layoutClass, '')" />

    <!-- pairings -->
    <!--       <Separator :class="cn(separatorClass, layoutClass)" />
      <ChampionDuoStats  :class="cn(layoutClass)" /> -->

    <!-- allies -->
    <div
      id="allies"
      :class="cn(headerClass, activeId !== 'allies' && activeIndex > 5 ? inActiveClass : null)">
      Allies
    </div>
    <ChampionAllyStats :class="cn(layoutClass)" />
  </div>
</template>