<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()

const bars = computed (() => {
  return [
    {
      color: 'domination',
      icon: ['lol:scoreboard-sword', '-translate-y-px size-4 opacity-100'],
      max: match.participants.map(p => p.stats.totalDamage).sort((a, b) => (b - a))[0],
      tip: 'Total Damage Dealt to Champions',
      value: player.stats.totalDamage
    },
    {
      color: 'precision',
      icon: ['stat:armor'],
      max: match.participants.map(p => p.stats.totalDamageTaken).sort((a, b) => (b - a))[0],
      tip: 'Total Damage Taken by Champions',
      value: player.stats.totalDamageTaken
    },
    {
      color: 'resolve',
      icon: ['stat:health'],
      max: match.participants.map(p => p.stats.effectiveHealingAndShielding).sort((a, b) => (b - a))[0],
      tip: 'Effective Healing & Shielding',
      value: player.stats.effectiveHealingAndShielding
    },
  ]
})
</script>

<template>
  <Card
    v-if="player"
    :class="cn(
      'relative flex w-full max-w-full items-center justify-between overflow-hidden px-3 py-2.25 **:select-none dark:border-b3/70 dark:bg-b2/60 light:border-transparent! light:bg-b1/80! light:shadow-none! light:drop-shadow-none!')">
    <!-- champion -->

    <div class="flex w-18 items-center">
      <ChampionIcon
        :id="player?.championId"
        :data-id="player?.championId"
        data-type="champion"
        alt="champion-icon"
        class="z-0 size-10 rounded-full transition-all duration-300 hover:scale-105" />
      <ScoreboardCardRunes :player />
    </div>
    <!-- name and tag -->
    <div
      class="flex h-fit w-full max-w-26 grow flex-col justify-center gap-0.5 overflow-hidden text-nowrap whitespace-nowrap @min-700:max-w-32">
      <div
        data-type="player"
        :data-name="player.name"
        :data-tag="player.tag"
        :data-icon="player.icon"
        class="inline-flex items-center gap-1 leading-4">
        <h4
          class="truncate text-sm/4 font-semibold text-nowrap">
          {{ player.name }}
        </h4>

        <span class="hidden grow items-center gap-0! text-xxs/4 font-medium opacity-50 @min-700:inline-flex">
          <Icon
            name="hash"
            class="inline size-3.25" />
          {{ player.tag }}
        </span>
      </div>

      <!-- badge - rank / kp -->
      <div class="flex items-center gap-2 leading-4">
        <MvpBadge
          :match
          :player />
        <span class="text-xs opacity-50">
          {{ player.lpScore.score }}
        </span>
      </div>
    </div>

    <!-- kda -->
    <div class="flex h-fit w-full max-w-32 flex-col items-center gap-0.5">
      <KDA
        :stats="player.stats"
        class="leading-4" />

      <ScoreboardStatPanel
        :player
        class="" />
    </div>
    <!-- PROGRESS STAT ROW -->
    <div class="grid w-full max-w-52 grid-cols-3 items-center gap-3 overflow-hidden">
      <TeammateStatProgressBars
        v-for="s, i in bars"
        :key="i"
        :value="s.value"
        :max="s.max"
        :color="s.color"
        :icon="s.icon"
        :tip="s.tip" />
    </div>

    <ScoreboardCardItems
      :player
      class=""
      :is-s-r="match?.mapId === 11" />

    <div class="flex h-fit w-5 flex-col @min-700:w-16">
      <!-- minions -->
      <PlayerCS :player />
      <!-- gold -->
      <PlayerGold :player />
    </div>

    <div class="flex h-max flex-col items-center -space-y-2">
      <div
        v-for="spell, i in player?.spells"
        :key="spell"
        class="round-wrapper size-6"
        :style="{
          zIndex: i,
        }">
        <Spell
          :id="spell"
          size="c-5"
          :class="cn('img-active z-1', { 'no-img': !spell })" />
      </div>
    </div>
  </Card>
</template>
