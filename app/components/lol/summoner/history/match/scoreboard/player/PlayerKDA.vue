<script lang="ts" setup>
const { class: className, match, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  match: MatchDataCurrentPlayer
}>()
</script>

<template>
  <div
    class="ml-2 grid h-15 max-h-15 w-fit min-w-20 auto-rows-max justify-self-end pb-1">
    <!-- kda -->
    <KDA
      :stats="player.stats"
      class="h-6 text-start text-4 leading-5 font-bold" />

    <span class="label-class">
      {{ Math.round(player.stats.kp * 100) }}%&nbsp;
      <span>KP</span>
    </span>

    <MvpBadge
      v-if="match.mvp === match.player.puuid || match.ace === match.player.puuid"
      :match
      :player="match.player" />
    <span
      v-if="!player.stats.deaths"
      class="flex h-4 items-center gap-1 truncate tracking-tight text-nowrap">
      <icon
        name="proicons:infinity"
        class="size-4.5 **:stroke-[1.6]" />
      KDA
    </span>

    <span
      v-else
      class="label-class">
      {{ roundDecimal(player.stats.kda, 2) }}
      <span>&nbsp;KDA</span>
    </span>
  </div>
</template>

<style scoped>
  @reference '@css/tailwind.css';

.label-class {
  @apply h-4 gap-0 text-1 text-start whitespace-nowrap text-nowrap lowercase   *:tracking-wide leading-4;
}
</style>