<script lang="ts" setup>
const {
  class: className,
  icon = true,
  player
} = defineProps<{
  class?: HTMLAttributes["class"]
  player: Player
  icon?: boolean
}>()
</script>

<template>
  <Tooltip
    :ui="{ content: 'h-fit!' }"
    class="flex items-start self-start justify-self-end">
    <UBadge
      icon="i-lp-gold"
      :ui="{
        label: '@min-700:block @max-700:hidden font-semibold',
        leadingIcon: 'text-vanguard/90!'
      }"
      :label="`${roundDecimal(player.stats.goldEarned / 1000)}k`"
      color="neutral"
      variant="ghost"
      size="2xs" />

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
