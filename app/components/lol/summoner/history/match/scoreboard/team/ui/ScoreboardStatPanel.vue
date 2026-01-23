<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex gap-2', className)">
    <Badge
      v-if="player.stats.kills + player.stats.assists / player.stats.deaths === Infinity"
      variant="base"
      size="4"
      class="text-badge-xs dark:font-bld border-ad dark:bg-ad/70 dark:text-b1 light:bg-tint-ad/10 light:font-semibold! light:text-white px-2!">
      <Icons
        size="3.5"
        name="proicons:infinity"
        class="dst dark:text-b1 light:text-white mt-[0.04em] size-4.5 **:stroke-[2.2]" />
      <span class="tracking-wide">kda</span>
    </Badge>

    <span
      v-else
      class="text-badge-xs opacity-60">
      {{ player.stats.kda }} <span>kda</span>
    </span>

    <span class="text-badge-xs opacity-60">
      {{ player.stats.kp }} kp
    </span>
  </div>
</template>
