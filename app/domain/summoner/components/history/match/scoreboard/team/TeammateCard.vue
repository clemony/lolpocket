<script lang="ts" setup>
import KDA from "~/domain/summoner/components/history/ui/KDA.vue"
import type { BarStat } from "./team.types"

const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()

const classes =
  "z-0 cursor-default transition-all hover:z-2 hover:scale-116 hover:ring-3 hover:ring-p0!"
</script>

<template>
  <!-- champion -->

  <div class="col-start-1 flex w-18 items-center">
    <div class="relative">
      <HoverIcon
        :id="player?.championId"
        type="champion"
        size="xl"
        :ui="{
          root: cn('rounded-full', classes),
        }" />
      <MvpBadge :match :player />
    </div>
    <PlayerRunes
      class="-space-y-1!"
      :backdrop="false"
      :keystone="{
        size: '2xs',
        ui: {
          root: 'z-1 bg-n2!',
          image: '',
        },
      }"
      :path="{
        size: '2xs',
        ui: { root: 'size-5!', image: ' ring-p0 z-3 ring-2!' },
      }"
      :player />
  </div>
  <!-- name and tag -->
  <div
    class="col-start-2 -ml-2 flex h-fit w-30 grow flex-col justify-center gap-0.5 overflow-hidden text-nowrap whitespace-nowrap tabular-nums">
    <div
      class="inline-flex items-center gap-1 leading-4"
      data-type="player"
      :data-name="player.name"
      :data-tag="player.tag"
      :data-icon="player.icon">
      <h4 class="truncate text-sm/4 font-semibold text-nowrap">
        {{ player.name }}
      </h4>

      <span
        class="@min-700:inline-flex hidden grow items-center gap-0! text-2xs/4 font-medium opacity-50">
        <Icon class="inline size-3.25" name="i-hash" />
        {{ player.tag }}
      </span>
    </div>

    <!-- badge - rank / kp -->
    <div class="flex items-center gap-2 leading-4">
      <span class="text-xs opacity-50">
        {{ player.lpScore?.score ?? 0 }}
      </span>
    </div>
  </div>

  <!-- kda -->
  <div class="col-start-3 flex h-fit w-26 flex-col items-center gap-0.5">
    <KDA :stats="player.stats" />

    <ScoreboardStatPanel class="" :player />
  </div>
  <!-- PROGRESS STAT ROW -->
  <div class="col-start-4 grid w-full max-w-52 grid-cols-3 items-center">
    <TeammateStatProgressBars :match :player />
  </div>

  <ScoreboardCardItems
    class="col-start-5"
    :player
    :classes
    :is-s-r="match?.mapId === 11" />

  <div
    class="@min-700:w-16 @max-700:w-5 col-start-6 flex h-fit flex-col items-end gap-1">
    <!-- minions -->
    <PlayerCS :player />
    <!-- gold -->
    <PlayerGold :player />
  </div>

  <div class="col-start-7 flex h-max flex-col items-center">
    <div class="flex flex-col gap-y-0">
      <HoverIcon
        v-for="(spell, i) in player?.spells"
        :id="spell"
        :key="spell"
        size="2xs"
        type="spell"
        :ui="{
          root: cn('z-2 ring-2 ring-p0', classes),
        }" />
    </div>
  </div>
</template>
