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
  <Tooltip :ui="{ content: 'h-fit!' }" class="justify-self-end">
    <UBadge
      icon="i-lp-minion"
      :ui="{
        label: '@min-700:block @max-700:hidden font-semibold',
        leadingIcon: 'opacity-85',
      }"
      :label="player.stats.totalCs"
      color="neutral"
      variant="ghost"
      size="2xs" />

    <template #content>
      <div class="grid grid-cols-2 gap-3 p-0.5 *:leading-5.5">
        <ul class="w-fit">
          <li>
            <Icon name="role:all" class="mr-px inline size-4 text-nc" />
            {{ player.stats.minionsKilled }} cs
          </li>
          <li class="pl-px">
            <Icon
              name="lucide:clock"
              class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" />
            {{ player.stats.csPerMin }} / min
          </li>
          <li class="pl-px">
            <Icon
              name="lucide:equal"
              class="mr-1 inline size-3.5 -translate-y-px text-nc **:stroke-[3.2]" />
            {{ player.stats.totalCs }} total
          </li>
        </ul>

        <ul
          class="w-fit pr-2 before:absolute before:my-auto before:h-5/6 before:w-px before:-translate-x-1.5 before:border-l before:border-l-nc/30 [&_li]:not-first:pl-5">
          <li>
            <Icon name="role:jungle" class="inline size-4 text-nc" /> Jungle
          </li>
          <li>{{ player.stats.allyJungleMinions }} ally</li>
          <li>{{ player.stats.enemyJungleMinions }} enemy</li>
        </ul>
      </div>
    </template>
  </Tooltip>
</template>
