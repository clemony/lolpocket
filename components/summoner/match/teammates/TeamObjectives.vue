<script lang="ts" setup>
const props = defineProps<{
  team: any
  teamObject: any
  class?: HTMLAttributes['class']
}>()
console.log('💠 - teamObject:', props.teamObject)

const elder = computed (() => {
  return props.teamObject[0].challenges.teamElderDragonKills
})
console.log('💠 - elder - elder:', elder.value)
</script>

<template>
  <div class="" :class="cn('flex gap-4 pb-3 h-full justify-items-start items-center *:hover:underline tldr-20 **:font-medium', props.class)">
    <div
        v-tippy="'Dragon Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/dragon-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />
      {{ team.objectives.dragon.kills }}
    </div>

    <div
        v-tippy="'Baron Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/baron-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />
      {{ team.objectives.baron.kills }}
    </div>

    <div
        v-tippy="'Elder Dragon Kills'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/elder-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />
      {{ team.objectives.baron.kills }}
    </div>
    <div
        v-tippy="'Towers Taken'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/tower-${team.teamId}.png`" class="size-5 drop-shadow-sm opacity-85" />
      {{ team.objectives.tower.kills }}
    </div>

    <div
        v-tippy="'Inhibitors Taken'" class="flex items-center gap-1">
      <img
        :src="`/img/ui/inhibitor-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />
      {{ team.objectives.inhibitor.kills }}
    </div>
  </div>
</template>