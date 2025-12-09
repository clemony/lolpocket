<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()

const gameOutcome = computed(() => {
  return {
    player: match.player?.win ? 'Ally' : 'Enemy',
    win: match?.teams[0]?.win === true ? 'Blue Team Win' : 'Red Team Win',
  }
})
const open = shallowRef<boolean>(false)

const groups = [{
  name: 'stats',
  color: '',
  icon: '',
}, {
  name: 'offense',
  // color: '--color-domination',
  icon: '',
}, {
  name: 'defense',
  // color: '--color-resolve',
  icon: '',
}, {
  name: 'utility',
  // color: '--color-enchanter',
  icon: '',
}, {
  name: 'farming',
  // color: '--color-precision',
  icon: '',
}, {
  name: 'vision',
  color: '',
  icon: '',
},]
</script>

<template>
  <div
    class="
      group/head sticky top-0 z-3 grid w-full grid-flow-col grid-cols-[116px_repeat(10,54px)] overflow-hidden bg-tint-b2/40 py-1">
    <div>
      <div class="text-1 font-semibold text-bc/60 uppercase">
        {{ gameOutcome.player }}
      </div>
      <div :class=" cn('font-medium dst', match.teams[0].win ? 'text-inspiration' : 'text-domination') ">
        {{ gameOutcome.win }}
      </div>
    </div>
    <div
      v-for="p, i in match.participants"
      :key="p.puuid"
      :class="cn('relative grid size-full place-items-center py-2 after:absolute after:z-0 after:size-full after:scale-92 after:rounded-xl', { ' after:bg-inspiration/40': i < 5, ' after:bg-tint-domination/70': i >= 5 })">
      <ChampionIcon
        :id="p.championId"
        :alt="champNameById(p.championId)"
        class="z-1 size-13.25!" />
    </div>
  </div>

  <div
    v-for="group in groups"
    :key="group.name"
    class="match-data-table z-auto grid h-max w-full auto-rows-auto **:text-1">
    <!--  -->
    <!-- sticky header -->

    <div
      class="
            sticky! top-20 left-0 z-2 -mr-4 -ml-2 grid w-full items-center bg-tint-b3/30 px-2 py-1 leading-4 font-semibold text-nowrap capitalize italic
          ">
      {{ group.name }}
    </div>

    <!-- collapsible stats -->

    <div
      v-for="row, ix in match.player[group.name]"
      :key="ix"
      class="z-auto h-fit w-full">
      <Collapsible
        v-if="row && row.expandable"
        v-model:open="open"
        class="h-fit w-full">
        <!-- trigger -->
        <CollapsibleTrigger as-child>
          <MatchPlayerStatRow
            :key="ix"
            :match
            :stat="row.value"
            :ix
            :group="group.name">
            <Icon
              name="up"
              :class="cn('transition-rotate size-4 duration-200', { '-rotate-180': open })" />
          </MatchPlayerStatRow>
        </CollapsibleTrigger>

        <!-- content -->
        <CollapsibleContent
          class="grid h-fit w-fit auto-rows-max overflow-hidden border border-b3 bg-b3/30">
          <MatchPlayerStatRow
            v-for="stat, i in row.stats"
            :key="i"
            :sub-stat="true"
            :match
            :ix="i"
            :stat />
        </CollapsibleContent>
      </Collapsible>

      <!-- regular stats -->
      <MatchPlayerStatRow
        v-else
        :key="ix"
        :match
        :stat="row"
        :ix
        :group="group.name" />
    </div>
  </div>
</template>
