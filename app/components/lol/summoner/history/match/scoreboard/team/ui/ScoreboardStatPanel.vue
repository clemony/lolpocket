<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('-mt-0.5 grid size-full auto-rows-fr pb-1 opacity-60', className)">
    <Badge
      v-if="player.stats.kills + player.stats.assists / player.stats.deaths === Infinity"
      variant="base"
      size="4"
      class="s-badge border-master/40 bg-master/20 saturate-180">
      <Icon
        name="fa6-solid:infinity"
        class="mt-[0.04em] size-3.5 dst" />
      <span>KDA</span>
    </Badge>

    <span class="s-badge">
      {{ roundDecimal(player.stats.kda) }} <span>kda</span>
    </span>

    <span class="s-badge">
      {{ roundDecimalToPercent(player.stats.kp, 1) }} kp
    </span>
  </div>
</template>

<style scoped>
@reference '@css/tailwind.css';

.s-badge {
  @apply text-0! inline-flex gap-1 text-end w-full justify-end flex-nowrap whitespace-nowrap text-nowrap items-center leading-none tracking-tight font-semibold;
}
</style>