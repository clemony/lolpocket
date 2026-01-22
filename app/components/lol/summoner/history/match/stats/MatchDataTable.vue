<script lang="ts" setup>
import type { PlayerTimeline } from '~~/shared/.index';
import { matchStatRegistry } from '~~/shared/.index';

defineOptions({
  inheritAttrs: false
})

const { match } = defineProps<{
  match: MatchData
  timeline: PlayerTimeline
}>()
</script>

<template>
  <div
    class="not-before:z-2 sticky top-0 z-2 grid w-full grid-flow-col grid-cols-[2.24fr_repeat(10,1fr)] place-items-center gap-2 justify-self-center rounded-t-xl py-2 pr-3 pl-2">
    <div class="absolute top-0 z-2 size-full bg-linear-to-b from-[color-mix(in_lch,var(--color-b2)_60%,white_40%)] to-[color-mix(in_lch,var(--color-b2)_53%,white_33%,transparent_4%)] bg-blend-darken drop-shadow-[0_50px_3px_var(--color-b2)] backdrop-blur-md" />

    <div class="z-3 grid size-full items-center pb-3 pl-2 text-md font-semibold">
      Match Summary
    </div>
    <div
      v-for="p in match.participants"
      :key="p.puuid"
      :style="{ backgroundColor: `color-mix(in lch, ${matchTeams[p.teamId].color} 50%, transparent 50%)` }"
      class="z-2 grid size-16 place-items-center rounded-xl border border-bc/16">
      <ChampionIcon
        :id="p.championId"
        :data-id="p.icon"
        :data-name="p.name"
        :data-tag="p.tag"
        data-type="player"
        :alt="champNameById(p.championId)"
        class="size-14" />
    </div>
  </div>

  <TeamStatGroup :match />
  <TableMatchStatGroup
    v-for="group in matchStatGroups"
    :key="group.name"
    :group
    :match />
</template>
