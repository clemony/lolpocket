<script lang="ts" setup>
const {
  class: className,
  icon = true,
  player,
} = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
  icon?: boolean
}>()
</script>

<template>
  <Tooltip
    arrow
    :ui="{ content: 'h-fit!' }"
    :class="cn('badge-tooltip-hover text-badge-xs w-fit', className)"
  >
    <Icons
      v-if="icon === true"
      class="inline size-3.25 translate-y-px opacity-75"
      size="c-3.5"
      name="lol:gold"
    />

    <span class="hidden @min-700:flex">
      {{ roundDecimal(player.stats.goldEarned / 1000) }}k
    </span>

    <template #content>
      <ul>
        <li>
          <Icon name="lol:gold" class="mr-1 inline size-3.5 text-nc" /> {{ player.stats.goldEarned.toLocaleString() }} g
        </li>
        <li>
          <Icon name="clock" class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" /> {{ player.stats.goldPerMin }} / min
        </li>
      </ul>
    </template>
  </Tooltip>
</template>
