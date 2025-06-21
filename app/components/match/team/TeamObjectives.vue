<script lang="ts" setup>
const props = defineProps<{
  team: any
  teamObject: any
  class?: HTMLAttributes['class']
}>()

const elder = computed (() => {
  return props.teamObject[0].challenges.teamElderDragonKills
})
</script>

<template>
  <div class="" :class="cn('flex  *:hover:underline tldr-20 **:font-medium', props.class)">
    <div
      v-tippy="'Dragon Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/dragon-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.dragon.kills }}
      </span>
    </div>

    <div
      v-tippy="'Baron Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/baron-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.baron.kills }}
      </span>
    </div>

    <div
      v-tippy="'Elder Dragon Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/elder-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.baron.kills }}
      </span>
    </div>

    <div
      v-tippy="'Towers Taken'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/tower-${team.teamId}.png`" class="size-5 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.tower.kills }}
      </span>
    </div>

    <div
      v-tippy="'Inhibitors Taken'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/inhibitor-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.inhibitor.kills }}
      </span>
    </div>
  </div>
</template>