<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const heal = computed(() => {
  return player.challenges.effectiveHealAndShielding > 0
    ? player.challenges.effectiveHealAndShielding
    : null
})
</script>

<template>
  <div
    class="
      mx-1 h-full w-24 max-w-24 p-1 font-medium *:text-1 *:tracking-tight
      **:leading-none
    ">
    <tippy
      class="flex items-center gap-2 truncate text-nowrap hover:underline"
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="relative grid size-3 justify-center">
        <icon
          name="el:fire"
          class="absolute size-3.25 text-domination dst" />
      </span>
      {{ player.totalDamageDealtToChampions.toLocaleString() }}
    </tippy>

    <tippy
      class="
        mt-2.25 flex items-center gap-2 truncate text-nowrap hover:underline
      "
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="relative grid size-3 justify-center">
        <icon
          name="oi:plus"
          class="size-2.75 text-inspiration dst" />
      </span>
      {{ Math.round(heal).toLocaleString() }}

      <template #content>
        <p>
          <span class="grow">Healing</span>
          {{ player.totalHealsOnTeammates.toLocaleString() }}
        </p>

        <p>
          <span class="grow">Shielding</span>
          {{ player.totalDamageShieldedOnTeammates.toLocaleString() }}
        </p>

        <p>
          <span class="grow">Lives Saved</span>
          {{ player.challenges.saveAllyFromDeath || 0 }}
        </p>
      </template>
    </tippy>

    <div
      class="
        mt-2 flex items-center gap-2.25 truncate text-nowrap hover:underline
      "
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="relative grid size-3 justify-center">
        <icon
          name="ph:shield-fill"
          class="size-3.25 text-[#C2A76E]! dst" />
      </span>
      {{ Math.round(player.totalDamageTaken).toLocaleString() }}
    </div>
  </div>
</template>
