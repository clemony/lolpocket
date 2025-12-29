<script lang="ts" setup>
const { mastery } = defineProps<{
  mastery?: PlayerChampionMastery
}>()
const layoutClass = 'w-full  col-start-2'
const headerClass = ' mb-10 text-10 font-bold h-30 select-none  bg-blend-screen sticky flex items-end pb-6 w-[104%] -top-55  bg-b1/90 backdrop-blur z-2 ring-2 ring-b1 border-2 border-b1'
const separatorClass = 'mt-24 mb-16'
</script>

<template>
  <div class="w-full space-y-32">
    <!-- stats -->
    <div :class="cn(layoutClass, headerClass, 'mt-24')">
      Summary
    </div>
    <PlayerChampionSummary
      :mastery
      :class="cn(layoutClass)" />

    <!-- spells -->
    <div :class="cn(layoutClass, headerClass)">
      Summoner Spells
    </div>

    <ChampionSpellStats :class="cn(layoutClass, 'pl-2')" />
    <!--   -->

    <!-- items -->
    <div :class="cn(layoutClass, headerClass)">
      Items
    </div>
    <ChampionItemStats :class="cn(layoutClass, 'pl-2')" />

    <!-- runes -->
    <div :class="cn(layoutClass, headerClass)">
      Runes
    </div>
    <ChampionRuneStats :class="cn(layoutClass)" />

    <!-- skills -->

    <Separator :class="cn(separatorClass, layoutClass)" />
    <div :class="cn(layoutClass, headerClass)">
      Abilities
    </div>
    <ChampionSkillStats :class="cn(layoutClass, 'pl-2')" />

    <!-- pairings -->
    <!--       <Separator :class="cn(separatorClass, layoutClass)" />
      <ChampionDuoStats  :class="cn(layoutClass)" /> -->

    <!-- allies -->
  </div>
</template>