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
  <Tooltip :ui="{ content: 'h-fit!' }">
    <UBadge
      icon="i-lp-minion"
      size="xs"
      :ui="{
        base: 'justify-end gap-1.5 px-1.5! text-end',
        label: '@min-700:inline-flex @max-700:hidden font-semibold',
        leadingIcon: 'size-3.5 self-center opacity-85',
      }"
      :label="player.stats.totalCs"
      color="neutral"
      variant="ghost" />

    <template #content>
      <div class="grid gap-3 p-0.5 *:leading-5.5">
        <ul class="w-fit">
          <li>
            <Icon name="i-lp-minion" class="mr-px inline size-4 text-nc" />
            {{ player.stats.minionsKilled }} cs
          </li>
          <li>
            <Icon name="i-lp-jungle" class="mr-px inline size-4 text-nc" />
            {{ player.stats.allyJungleMinions }} ally +
            {{ player.stats.enemyJungleMinions }} enemy
          </li>
          <li class="pl-px">
            <Icon
              name="i-lucide-equal"
              class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" />
            {{ player.stats.totalCs }} total
          </li>
          <li class="pl-px">
            <Icon
              name="i-lucide-clock"
              class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" />
            {{ player.stats.csPerMin }} / min
          </li>
        </ul>
      </div>
    </template>
  </Tooltip>
</template>
