<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const heal = computed (() => {
  return player.challenges.effectiveHealAndShielding > 0 ? player.challenges.effectiveHealAndShielding : null
})
</script>

<template>
  <div class=" p-1 h-full max-w-24 w-24  mx-1 **:leading-none  *:text-1 *:tracking-tight font-medium ">
    <tippy
      class="flex gap-2 items-center hover:underline text-nowrap truncate"
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="size-3 relative grid justify-center">
        <icon
          name="el:fire"
          class="text-domination dst absolute size-3.25" />
      </span>
      {{ player.totalDamageDealtToChampions.toLocaleString() }}
    </tippy>

    <tippy
      class="flex gap-2 mt-2.25 items-center hover:underline text-nowrap truncate"
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="size-3 relative grid justify-center">
        <icon
          name="oi:plus"
          class="text-inspiration dst size-2.75" />
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
      class="flex gap-2.25 mt-2 items-center hover:underline  text-nowrap truncate"
      content-class="py-1 space-y-1 w-32 *:w-full *:flex *:tracking-tight *:text-2">
      <span class="size-3 relative grid justify-center">
        <icon
          name="ph:shield-fill"
          class="!text-[#C2A76E] dst size-3.25" />
      </span>
      {{ Math.round(player.totalDamageTaken).toLocaleString() }}
    </div>
  </div>
</template>