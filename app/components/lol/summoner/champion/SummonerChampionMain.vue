<script lang="ts" setup>
const { mastery } = defineProps<{
  mastery?: ChampionMastery
}>()

const headerClass = 'sticky sticky! -top-55 z-5 col-start-2 flex h-31 w-[104%] w-full translate-y-0 items-center bg-b1 pt-11 opacity-100 bg-blend-screen backdrop-blur-sm transition-[transform,_opacity] duration-200 select-none not-first:mt-20 not-first:mb-10 first:mt-10 first:mb-6!'
const layoutClass = 'col-start-2 w-full max-w-full overflow-x-hidden pb-2'
const activeClass = ''

const inActiveClass = '' // '-translate-y-full opacity-0 backdrop-blur-none border-transparent ring-transparent bg-transparent transition-[transform,_opacity] duration-1000! ease-out '

const { activeId, activeIndex } = useScrollSectionsInject()

const duoView = shallowRef<'enemy' | 'team'>('team')
</script>

<template>
  <div class="z-auto size-full max-w-340">
    <!-- stats -->

    <div
      id="summary"
      :class="
        cn(
          headerClass,
          activeId !== 'summary' && activeIndex > 0
            ? inActiveClass
            : activeClass,
        )
      "
    >
      <h1>Summary</h1>
    </div>
    <PlayerChampionSummary :mastery :class="cn(layoutClass)" />

    <!-- spells -->

    <div
      id="spells"
      :class="
        cn(
          headerClass,
          activeId !== 'spells' && activeIndex > 1 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Summoner Spells</h1>
    </div>

    <ChampionSpellStats :class="cn(layoutClass)" />

    <!--   -->

    <!-- items -->

    <div
      id="items"
      :class="
        cn(
          headerClass,
          activeId !== 'items' && activeIndex > 2 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Items</h1>
    </div>
    <ChampionItemStats :class="cn(layoutClass)" />

    <!-- runes -->

    <div
      id="runes"
      :class="
        cn(
          headerClass,
          activeId !== 'runes' && activeIndex > 3 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Runes</h1>
    </div>
    <ChampionRuneStats :class="cn(layoutClass)" />

    <!-- skills -->

    <div
      id="skills"
      :class="
        cn(
          headerClass,
          activeId !== 'skills' && activeIndex > 4 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Abilities</h1>
    </div>
    <ChampionSkillStats :class="cn(layoutClass, '')" />

    <!-- pairings -->

    <div
      id="duos"
      :class="
        cn(
          'header-class justify-between',
          activeId !== 'items' && activeIndex > 5 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Synergy & Counters</h1>

      <Tabs v-model:model-value="duoView">
        <TabsList class="w-44">
          <TabsTrigger value="team">
            Synergy
          </TabsTrigger>

          <TabsTrigger value="enemy">
            Counter
          </TabsTrigger>
          <TabIndicator />
        </TabsList>
      </Tabs>
    </div>
    <ChampionDuoStats :view="duoView" :class="cn(layoutClass)" />

    <!-- allies -->

    <div
      id="allies"
      :class="
        cn(
          headerClass,
          activeId !== 'allies' && activeIndex > 6 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Allies</h1>
    </div>
    <ChampionAllyStats :class="cn(layoutClass)" />
    <!-- allies -->

    <div
      id="stats"
      :class="
        cn(
          headerClass,
          activeId !== 'stats' && activeIndex > 7 ? inActiveClass : activeClass,
        )
      "
    >
      <h1>Match Stats</h1>
    </div>
    <ChampionMatchStats :class="cn(layoutClass)" />
  </div>
</template>
