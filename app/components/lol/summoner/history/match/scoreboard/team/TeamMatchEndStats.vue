<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'to-tint-p2/40 inset-shadow-xxs relative z-1 mx-auto flex h-9 w-[99%] items-center justify-between gap-2 overflow-hidden rounded-xl border border-pc/10 bg-linear-to-r pr-2 pl-5',
        className
      )
    ">
    <h3
      class="dst text-start text-xl font-bold text-nowrap text-white/86 uppercase">
      {{ team.win ? "Win" : "Loss" }}
    </h3>
    <div
      :class="
        cn(
          'flex w-16 justify-start pl-2 font-bold tracking-wide! brightness-70',
          {
            'text-insp': team.teamId === 100,
            'text-dom': team.teamId === 200,
          }
        )
      ">
      {{ team.teamId === 100 ? "Blue" : "Red" }}
    </div>

    <TeamKDA :team="team" />
    <TeamObjectives :team="team" :team-object="team" />

    <div class="mx-4 grid w-35 grid-cols-5 gap-1 px-1">
      <Champion
        v-for="champion in team.bans"
        :id="champion"
        :key="champion"
        class="size-6.25 rounded-md opacity-80 brightness-100 contrast-120 grayscale-80"
        :data-id="champion"
        data-type="champion" />
    </div>

    <p class="inline-flex items-center justify-end gap-1">
      <Icon class="inline size-4.5 text-g" name="lp:gold" />

      <span
        v-if="team.gold"
        class="flex items-center font-semibold tracking-tight">
        {{ team.gold.toLocaleString() }} G
      </span>
    </p>
  </div>
</template>
