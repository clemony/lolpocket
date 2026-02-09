<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()

const bars = computed(() => {
  return [
    {
      color: "domination",
      class:
        "hover:bg-domination-200! hover:text-pc! hover:ring-offset-domination-200!  hover:ring-domination-300!",
      max: match.participants
        .map((p) => p.stats?.totalDamage ?? 0)
        .sort((a, b) => b - a)[0] ?? 0,
      tip: "Total Damage Dealt to Champions",
      value: player.stats?.totalDamage ?? 0,
      icon: ["lol:scoreboard-sword", "-translate-y-px size-4 opacity-100"],
    },
    {
      color: "precision",
      class:
        "hover:bg-precision-200! hover:text-pc! hover:ring-offset-precision-200!  hover:ring-precision-400!",
      max: match.participants
        .map((p) => p.stats?.totalDamageTaken ?? 0)
        .sort((a, b) => b - a)[0] ?? 0,
      tip: "Total Damage Taken by Champions",
      value: player.stats?.totalDamageTaken ?? 0,
      icon: ["stat:armor"],
    },
    {
      color: "resolve",
      class:
        "hover:bg-resolve-100! bg-blend-hue hover:text-pc! hover:ring-offset-resolve-100! hover:ring-resolve-200!",
      max: match.participants
        .map((p) => p.stats?.effectiveHealingAndShielding ?? 0)
        .sort((a, b) => b - a)[0] ?? 0,
      tip: "Effective Healing & Shielding",
      value: player.stats?.effectiveHealingAndShielding ?? 0,
      icon: ["stat:health"],
    },
  ]
})
</script>

<template>
  <Card
    v-if="player"
    :class="
      cn(
        'relative flex w-full max-w-full items-center justify-between overflow-hidden px-3 py-2.25 **:select-none dark:border-p3/70 dark:bg-p2/60 light:border-transparent! light:bg-p0/80! light:shadow-none! light:drop-shadow-none!'
      )
    ">
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
      class="flex h-fit w-full max-w-26 grow flex-col justify-center gap-0.5 overflow-hidden text-nowrap whitespace-nowrap @min-700:max-w-32">
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
          class="hidden grow items-center gap-0! text-2xs/4 font-medium opacity-50 @min-700:inline-flex">
          <Icon class="inline size-3.25" name="hash" />
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
      <TeammateStatProgressBars
        v-for="(s, i) in bars"
        :key="i"
        :value="s.value"
        :max="s.max"
        :class="s.class"
        :color="s.color"
        :icon="s.icon"
        :tip="s.tip" />
    </div>

    <ScoreboardCardItems class="" :player :is-s-r="match?.mapId === 11" />

    <div class="flex h-fit w-5 flex-col items-end gap-1 @min-700:w-16">
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
          zIndex: i,
        }">
        <Spell
          :id="spell"
          :class="
            cn('img-active z-1 size-5 rounded-full', { 'no-img': !spell })
          " />
      </div>
    </div>
  </Card>
</template>
