<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        `
          flex h-9 w-full items-center justify-between gap-2 overflow-hidden
          border-y border-y-b4/50 bg-linear-to-r to-transparent px-5
          inset-shadow-xxs
        `,
        className,
      )
    ">
    <h3
      class="
        text-start text-5 font-bold text-nowrap text-white/86 uppercase dst
      ">
      {{ team.win ? "Win" : "Loss" }}
    </h3>
    <div
      class="
        flex w-24 justify-start pl-2 font-bold !tracking-wide brightness-70
      "
      :class="
        cn('', {
          'text-inspiration': team.teamId === 100,
          'text-domination': team.teamId === 200,
        })
      ">
      {{ team.teamId === 100 ? "Blue" : "Red" }}
    </div>

    <TeamKDA :team="team" />

    <TeamObjectives
      :team="team"
      :team-object="team" />

    <p class="flex justify-end gap-2">
      <i-lol-gold class="size-4 text-[#C2A76E]" />

      <span
        v-if="team.gold"
        class="flex items-center font-semibold tracking-wide">
        {{ team.gold.toLocaleString() }}
      </span>
    </p>
  </div>
</template>
