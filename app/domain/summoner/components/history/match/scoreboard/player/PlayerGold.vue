<script lang="ts" setup>
const {
  class: className,
  icon = true,
  player,
} = defineProps<{
  class?: HTMLAttributes["class"]
  player: Player
  icon?: boolean
}>()
</script>

<template>
  <Tooltip
    arrow
    :content="{ side: 'bottom' }"
    :ui="{ content: 'h-fit!' }"
    class="flex items-start self-start justify-self-end">
    <UBadge
      size="xs"
      icon="i-lp-gold"
      :ui="{
        base: 'gap-1.5 px-1.5',
        label: '@min-700:inline-flex @max-700:hidden font-semibold',
        leadingIcon: 'self-center text-vanguard!',
      }"
      color="neutral"
      variant="ghost"
      :label="`${roundDecimal(player.stats.goldEarned / 1000)}k`" />

    <template #content>
      <ul>
        <li>
          <Icon name="i-lp-gold" class="mr-1 inline size-3.5 text-nc" />
          {{ player.stats.goldEarned.toLocaleString() }} g
        </li>
        <li>
          <Icon
            name="clock"
            class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" />
          {{ player.stats.goldPerMin }} / min
        </li>
      </ul>
    </template>
  </Tooltip>
</template>
