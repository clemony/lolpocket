<script lang="ts" setup>
const spellRef = useTemplateRef('spellRef')

const { isActive, progressBetween } = useScrollSection(
  'spells',
  spellRef
)
</script>

<template>
  <div class="flex w-full max-w-[1000px] min-w-220 flex-col overflow-visible py-24">
    <!-- overview -->
    <BestChampionSpellSet />
    <ChampionRuneSet page="best" />

    <!-- stats -->
    <Separator class="mt-24 mb-16" />
    <h1 class="mb-6 w-full text-start dst">
      Stats
    </h1>
    <ChampionMatchStats />

    <!-- spells -->
    <Separator class="mt-24 mb-16" />
    <div
      id="spells"
      ref="spellRef"
      class="grid w-full place-items-center">
      <h1 class="mb-10 w-full text-start dst">
        Summoner Spells
      </h1>
      <ChampionSpellStats />
    <!--   -->
    </div>

    <!-- items -->
    <Separator class="mt-24 mb-16" />
    <h1 class="mb-6 w-full text-start dst">
      Items
    </h1>
    <ChampionItemStats />

    <!-- runes -->
    <Separator class="mt-24 opacity-0" />
    <h1 class="mb-6 w-full text-start dst">
      Runes
    </h1>
    <ChampionRuneStats />

    <!-- skills -->

    <Separator class="mt-24 mb-16" />
    <h1 class="mb-6 w-full text-start dst">
      Abilities
    </h1>
    <ChampionSkillStats />

    <!-- pairings -->
    <Separator class="mt-24 mb-16" />
    <ChampionDuoStats />

    <!-- allies -->
    <Separator class="mt-24 mb-16" />
  </div>
</template>