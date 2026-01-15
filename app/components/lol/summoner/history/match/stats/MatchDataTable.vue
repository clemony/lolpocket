<script lang="ts" setup>
import { matchStatRegistry } from '#shared'

const { match } = defineProps<{
  match: MatchData
}>()

const open = shallowRef<boolean>(false)

const groups = [{
  name: 'stats',
  icon: '',
}, {
  name: 'offense',
  icon: 'lp:scoreboard-kda',
}, {
  name: 'defense',
  icon: 'stat:armor',
}, {
  name: 'utility',
  icon: 'stat:hsp',
}, {
  name: 'farming',
  icon: 'lp:gold',
}, {
  name: 'vision',
  icon: 'role:support',
},]
</script>

<template>
  <div
    class="flex w-full flex-nowrap">
    <div class="grid h-15 self-center px-2 *:grid *:grid-cols-2 **:tracking-tight">
      <div class="place-items-center text-center *:leading-5">
        <span
          class="rounded-tl-lg bg-inspiration font-medium text-nowrap text-white dst">
          Blue
        </span>

        <span
          class="rounded-tr-lg bg-domination font-medium text-nowrap text-white dst">
          Red
        </span>
      </div>
      <div
        data-tip="Team KDA"
        data-placement="left"
        class="grid h-5 w-full items-center overflow-hidden *:w-full **:text-0! hover:**:underline">
        <span
          v-for="i in [0, 1]"
          :key="i"
          :class="cn('flex flex-nowrap items-center justify-center gap-px px-1.5 pt-0.5 font-medium', i === 1 ? 'bg-domination/40' : 'bg-inspiration/30')">

          {{ `${match.teams[i].kills}/${match.teams[i].deaths}/${match.teams[i].assists}` }}

        </span>
      </div>

      <div
        data-tip="Team gold"
        data-placement="left"
        class="grid h-6 w-full items-center overflow-hidden *:w-full **:text-0! hover:*:underline">
        <span
          v-for="i in [0, 1]"
          :key="i"
          :class="cn('flex h-full items-center justify-center gap-px font-medium', i === 1 ? 'bg-domination/40 rounded-br-lg' : 'bg-inspiration/30 rounded-bl-lg')">
          {{ match.teams[i].gold.toLocaleString() }} G
        </span>
      </div>

      <div class="flex h-full w-fit items-center justify-end gap-1">
        <Icon
          name="x"
          class="mr-0.5 size-4 translate-y-px opacity-50 **:stroke-[2.6]" />
        <ChampionBan
          v-for="champion, i in match.teams[0].bans"
          :id="champion"
          :key="champion"
          :style="{ zIndex: i }" />
      </div>

      <div class="flex h-full w-fit items-center justify-end gap-1">
        <Icon
          name="ban"
          class="mr-1 size-5 translate-y-px opacity-50" />
        <ChampionBan
          v-for="champion, i in match.teams[1].bans"
          :id="champion"
          :key="champion"
          :style="{ zIndex: i }" />
      </div>
    </div>
  </div>
  <div class="group/head sticky top-0 z-3 grid w-full grid-flow-col grid-cols-[116px_repeat(10,54px)] overflow-hidden py-1 dark:bg-b2/60 light:bg-tint-b2/40">
    <div
      v-for="p, i in match.participants"
      :key="p.puuid"
      :data-id="p.icon"
      :data-name="p.name"
      :data-tag="p.tag"
      data-tip="player"
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
    class="match-data-table z-auto grid h-max w-full auto-rows-auto pb-0.5 **:text-1">
    <!--  -->
    <!-- sticky header -->

    <div
      class="
            sticky! top-19 left-0 z-2 -mr-4 mb-0.5 -ml-2 inline-flex w-full items-center justify-between gap-2 bg-tint-b3/30 px-2 py-1 leading-5 font-semibold text-nowrap capitalize
          ">
      {{ group.name }}
    </div>

    <!-- collapsible stats -->

    <div
      v-for="[k, v] in Object.entries(matchStatRegistry).filter(s => s[1].group === group.name)"
      :key="k"
      class="group/row z-auto h-fit w-full">
      <Collapsible
        v-if="k && k === 'kills'"
        v-model:open="open"
        class="h-fit w-full">
        <!-- trigger -->
        <CollapsibleTrigger as-child>
          <MatchPlayerStatRow
            :key="k"
            :match
            :stat="[k, v]">
            <Icon
              name="up"
              :class="cn('transition-rotate size-4 duration-200', { '-rotate-180': open })" />
          </MatchPlayerStatRow>
        </CollapsibleTrigger>

        <!-- content -->
        <CollapsibleContent
          class="grid size-fit auto-rows-max overflow-hidden border border-b3 bg-b3/30">
          <MatchPlayerStatRow
            v-for="[k2, v2] in Object.entries(matchStatRegistry).filter(s => s[1].group === 'kills')"
            :key="k2"
            :match
            :stat="[k2, v2]" />
        </CollapsibleContent>
      </Collapsible>

      <!-- regular stats -->
      <MatchPlayerStatRow
        v-else
        :key="k"
        :match
        :stat="[k, v]" />
    </div>
  </div>
</template>
