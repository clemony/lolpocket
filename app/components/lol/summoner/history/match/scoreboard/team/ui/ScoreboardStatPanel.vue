<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('-mt-0.5 grid size-full auto-rows-fr pb-1', className)">
    <Badge
      v-if="player.stats.kills + player.stats.assists / player.stats.deaths === Infinity"
      variant="base"
      size="4"
      class="s-badge border-ad bg-tint-ad/10 px-1.5! font-semibold! text-white">
      <Icons
        size="3.5"
        name="proicons:infinity"
        class="mt-[0.04em] size-4.5 text-white dst **:stroke-[2.4]" />
      <span class="tracking-wide">kda</span>
    </Badge>

    <span
      v-else
      class="s-badge opacity-60">
      {{ roundDecimal(player.stats.kda) }} <span>kda</span>
    </span>

    <span class="s-badge opacity-60">

    </span>
  </div>
</template>

<style scoped>
@reference '@css/tailwind.css';

.s-badge {
  @apply text-0! inline-flex gap-1 text-end  justify-self-end justify-end flex-nowrap whitespace-nowrap text-nowrap items-center leading-none tracking-tight font-bold;
}
</style>