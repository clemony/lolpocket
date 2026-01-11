<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchDataCurrentPlayer
}>()

const isSR = computed (() => queueIndex.filter(q => q.map.id === 11).map(q => q.queueId).includes(match.queueId))

const bars = computed (() => {
  return [
    {
      color: 'domination',
      icon: ['lol:scoreboard-sword', '-translate-y-px size-4 opacity-100'],
      max: match.participants.map(p => p.offense.totalDamage).sort((a, b) => (b - a))[0],
      tip: 'Total Damage Dealt to Champions',
      value: player.offense.totalDamage
    },
    {
      color: 'precision',
      icon: ['stat:armor'],
      max: match.participants.map(p => p.defense.totalDamageTaken).sort((a, b) => (b - a))[0],
      tip: 'Total Damage Taken by Champions',
      value: player.defense.totalDamageTaken
    },
    {
      color: 'resolve',
      icon: ['stat:health'],
      max: match.participants.map(p => p.utility.effectiveHealingAndShielding).sort((a, b) => (b - a))[0],
      tip: 'Effective Healing & Shielding',
      value: player.utility.effectiveHealingAndShielding
    },
  ]
})
</script>

<template>
  <Card
    v-if="player"
    class="grid w-full max-w-full grid-cols-[54px_1fr_50px] grid-rows-[repeat(3,13px)_auto] gap-x-3 gap-y-0.75 overflow-hidden px-3.5 py-3.5">
    <!-- champion -->

    <div class="row-span-2 flex items-center">
      <ChampionIcon
        :id="player?.championId"
        :data-id="player?.championId"
        data-tip="champion"
        alt="champion-icon"
        class="z-0 mt-2 size-12 self-center rounded-full transition-all duration-300 hover:scale-105" />
      <ScoreboardCardRunes :player />
    </div>
    <!-- name and tag -->
    <div
      class="inline-flex grow items-center gap-1 text-nowrap whitespace-nowrap">
      <h4
        :title="player.name"
        :class="cn('', { 'opacity-0': player.name.match(/Here/g) })"
        class="truncate text-2 font-semibold text-nowrap">
        {{ player.name }}
      </h4>

      <span class="inline-flex grow items-center gap-0! text-0 font-medium opacity-50">
        <Icon
          name="hash"
          class="inline size-3.25" />
        {{ player.tag }}
      </span>

      <!-- badge - rank / kp -->
      <div class="flex grow items-center justify-end gap-2">
        <span class="grow text-end! text-1 opacity-50">
          {{ roundDecimal(player.stats.mvpScore) }}
        </span>
        <MvpBadge
          :match
          :player />
      </div>
    </div>

    <!-- kda -->
    <KDA
      :stats="player.stats"
      class="col-start-3 self-center justify-self-end" />

    <!-- PROGRESS STAT ROW -->
    <div class="col-start-2 row-span-2 row-start-2 flex w-full grow items-center gap-4 pb-1">
      <TeammateStatProgressBars
        v-for="s, i in bars"
        :key="i"
        :value="s.value"
        :max="s.max"
        :color="s.color"
        :icon="s.icon"
        :tip="s.tip" />
    </div>

    <div class="col-start-1 row-span-2 row-start-3 grid size-full auto-rows-fr items-end pt-3 pl-px">
      <!-- gold -->

      <label
        :data-tip="`Total gold earned: ${player.farming.goldEarned.toLocaleString()}`"
        class="s-badge">
        <Icons
          base="btn"
          size="c"
          variant="neutral"
          wrapper-class="size-3.75! border-0"
          name="lol:minion"
          class="size-3" />
        <span>{{ player.farming.minionsKilled + player.farming.neutralMinionsKilled }}</span>
      </label>

      <label
        :data-tip="`Total gold earned: ${player.farming.goldEarned.toLocaleString()}`"
        class="s-badge translate-y-0.5">
        <Icons
          size="c"
          variant="neutral"
          wrapper-class="size-3.75! border-0"
          name="lol:gold"
          class="size-3 **:text-precision" />
        <span>{{ roundDecimal(player.farming.goldEarned / 1000) }}k</span>
      </label>
    </div>
    <ScoreboardCardItems
      :player
      class="col-span-2 col-start-2 row-start-4"
      :is-s-r />

    <ScoreboardStatPanel
      :player
      class="col-start-3 row-span-2 row-start-2" />
  </Card>
</template>

<style scoped>
@reference '@css/tailwind.css';

.s-badge {
  @apply text-0! flex gap-2 items-center leading-none font-bold;
}
</style>