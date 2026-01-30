<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { match } = defineProps<{
  match: MatchData
  timeline: PlayerTimeline
}>()
</script>

<template>
  <div
    class="not-before:z-2 sticky top-0 z-2 grid w-full grid-flow-col grid-cols-[2.24fr_repeat(10,1fr)] place-items-center gap-2 justify-self-center rounded-t-xl py-2 pr-3 pl-2"
  >
    <div
      class="absolute top-0 z-2 size-full bg-linear-to-b from-[color-mix(in_lch,var(--color-b2)_60%,white_40%)] to-[color-mix(in_lch,var(--color-b2)_53%,white_33%,transparent_4%)] bg-blend-darken drop-shadow-[0_50px_3px_var(--color-b2)] backdrop-blur-md"
    />

    <div
      class="text-md z-3 grid size-full items-center pb-3 pl-2 font-semibold"
    >
      Match Summary
    </div>
    <div
      v-for="p in match.participants"
      :key="p.puuid"
      class="border-bc/16 z-2 grid size-16 place-items-center rounded-xl border"
      :style="{
        backgroundColor: `color-mix(in lch, ${matchTeams[p.teamId].color} 50%, transparent 50%)`,
      }"
    >
      <ChampionIcon
        :id="p.championId"
        class="size-14"
        :data-id="p.icon"
        :data-name="p.name"
        :data-tag="p.tag"
        data-type="player"
        :alt="champNameById(p.championId)"
      />
    </div>
  </div>

  <TeamStatGroup :match />
  <TableMatchStatGroup
    v-for="group in matchStatGroups"
    :key="group.name"
    :group
    :match
  />
</template>
