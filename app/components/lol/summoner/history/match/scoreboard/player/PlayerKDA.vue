<script lang="ts" setup>
const { class: className, match, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  match: MatchData
}>()
</script>

<template>
  <div
    class="ml-2 grid h-15 max-h-15 w-fit min-w-20 auto-rows-max place-self-end">
    <!-- kda -->
    <KDA
      :stats="player.stats"
      class="-mt-0.5 h-6.75 text-start text-lg font-bold" />

    <span class="h-4 gap-0 text-start text-xs/4 text-nowrap whitespace-nowrap lowercase *:tracking-wide">
      {{ player.stats.kp }}%&nbsp;
      <span>KP</span>
    </span>

    <!--    <MvpBadge
      :match
      :player="player" /> -->
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
      class="h-4 gap-0 text-start text-xs/4 text-nowrap whitespace-nowrap lowercase *:tracking-wide">
      {{ player.stats.kda }}
      <span>&nbsp;KDA</span>
    </span>
  </div>
</template>
