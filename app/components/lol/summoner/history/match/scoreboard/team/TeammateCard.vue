<script lang="ts" setup>
import KDA from "~/components/lol/summoner/history/ui/KDA.vue"
import type { BarStat } from "./team.types"

const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()
</script>

<template>
  <div
    v-if="player"
    class="relative flex w-full max-w-full items-center justify-between overflow-hidden px-3 py-2.25 **:select-none">
    <!-- champion -->

    <div class="flex w-18 items-center">
      <Champion
        :id="player?.championId"
        class="z-0 size-10 rounded-full transition-all duration-300 hover:scale-105"
        :data-id="player?.championId"
        data-type="champion"
        alt="champion-icon" />
      <ScoreboardCardRunes :player />
    </div>
    <!-- name and tag -->
    <div
      class="@min-700:max-w-32 flex h-fit w-full max-w-26 grow flex-col justify-center gap-0.5 overflow-hidden text-nowrap whitespace-nowrap">
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
        <MvpBadge :match :player />
        <span class="text-xs opacity-50">
          {{ player.lpScore?.score ?? 0 }}
        </span>
      </div>
    </div>

    <!-- kda -->
    <div class="flex h-fit w-full max-w-32 flex-col items-center gap-0.75">
      <KDA class="leading-4" :stats="player.stats" />

      <ScoreboardStatPanel class="" :player />
    </div>
    <!-- PROGRESS STAT ROW -->
    <div class="grid w-full max-w-52 grid-cols-3 items-center gap-3">
      <TeammateStatProgressBars :match :player />
    </div>

    <ScoreboardCardItems class="" :player :is-s-r="match?.mapId === 11" />

    <div class="@min-700:w-16 @max-700:w-5 flex h-fit flex-col items-end gap-1">
      <!-- minions -->
      <PlayerCS :player />
      <!-- gold -->
      <PlayerGold :player />
    </div>

    <div class="flex h-max flex-col items-center -space-y-2">
      <div
        v-for="(spell, i) in player?.spells"
        :key="spell"
        class="round-wrapper size-6"
        :style="{
          zIndex: i
        }">
        <Spell
          :id="spell"
          :class="
            cn('img-active z-1 size-5 rounded-full', { 'no-img': !spell })
          " />
      </div>
    </div>
  </div>
</template>
