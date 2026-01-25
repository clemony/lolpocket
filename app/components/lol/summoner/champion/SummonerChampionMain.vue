<script lang="ts" setup>
const { mastery } = defineProps<{
  mastery?: ChampionMastery
}>()

const activeClass = ''

const inActiveClass = '' // '-translate-y-full opacity-0 backdrop-blur-none border-transparent ring-transparent bg-transparent transition-[transform,_opacity] duration-1000! ease-out '

const { activeId, activeIndex } = useScrollSectionsInject()

const duoView = shallowRef<'enemy' | 'team'>('team')
</script>

<template>
  <div
    class="z-auto size-full max-w-340"
  >
    <!-- stats -->

    <div
      id="summary"
      :class="cn('header-class', activeId !== 'summary' && activeIndex > 0 ? inActiveClass : activeClass)"
    >
      <h1>Summary</h1>
    </div>
    <PlayerChampionSummary
      :mastery
      :class="cn('layout-class')"
    />

    <!-- spells -->

    <div
      id="spells"
      :class="cn('header-class', activeId !== 'spells' && activeIndex > 1 ? inActiveClass : activeClass)"
    >
      <h1>Summoner Spells</h1>
    </div>

    <ChampionSpellStats :class="cn('layout-class')" />

    <!--   -->

    <!-- items -->

    <div
      id="items"
      :class="cn('header-class', activeId !== 'items' && activeIndex > 2 ? inActiveClass : activeClass)"
    >
      <h1>Items</h1>
    </div>
    <ChampionItemStats :class="cn('layout-class')" />

    <!-- runes -->

    <div
      id="runes"
      :class="cn('header-class', activeId !== 'runes' && activeIndex > 3 ? inActiveClass : activeClass)"
    >
      <h1>Runes</h1>
    </div>
    <ChampionRuneStats :class="cn('layout-class')" />

    <!-- skills -->

    <div
      id="skills"
      :class="cn('header-class', activeId !== 'skills' && activeIndex > 4 ? inActiveClass : activeClass)"
    >
      <h1>Abilities</h1>
    </div>
    <ChampionSkillStats :class="cn('layout-class', '')" />

    <!-- pairings -->

    <div
      id="duos"
      :class="cn('header-class justify-between', activeId !== 'items' && activeIndex > 5 ? inActiveClass : activeClass)"
    >
      <h1>Synergy & Counters</h1>

      <Tabs v-model:model-value="duoView">
        <TabsList class="w-44">
          <TabsTrigger
            value="team"
          >
            Synergy
          </TabsTrigger>

          <TabsTrigger value="enemy">
            Counter
          </TabsTrigger>
          <TabIndicator />
        </TabsList>
      </Tabs>
    </div>
    <ChampionDuoStats
      :view="duoView"
      :class="cn('layout-class')"
    />

    <!-- allies -->

    <div
      id="allies"
      :class="cn('header-class', activeId !== 'allies' && activeIndex > 6 ? inActiveClass : activeClass)"
    >
      <h1>Allies</h1>
    </div>
    <ChampionAllyStats :class="cn('layout-class')" />
    <!-- allies -->

    <div
      id="stats"
      :class="cn('header-class', activeId !== 'stats' && activeIndex > 7 ? inActiveClass : activeClass)"
    >
      <h1>Match Stats</h1>
    </div>
    <ChampionMatchStats :class="cn('layout-class')" />
  </div>
</template>

<style scoped>
  @reference '~/ui/css/tailwind.css';
@reference 'tailwindcss';

.layout-class {
  @apply w-full max-w-full col-start-2  overflow-x-hidden pb-2;
}

.header-class {
  @apply first:mb-6! items-center  pt-11 not-first:mt-20 first:mt-10 w-full col-start-2 h-31 select-none not-first:mb-10 bg-blend-screen flex w-[104%]  -top-55   z-5 translate-y-0 opacity-100 sticky! transition-[transform,_opacity] duration-200  bg-b1 backdrop-blur-sm sticky;
}

.separator-class {
  @apply mt-22 -mb-16;
}
</style>