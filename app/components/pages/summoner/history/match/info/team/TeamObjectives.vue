<script lang="ts" setup>
const {
  team,
  teamObject,
  class: className,
} = defineProps<{
  team: any
  teamObject: any
  class?: HTMLAttributes['class']
}>()

console.log('team: ', team)
const elder = computed(() => {
  return teamObject[0].challenges.teamElderDragonKills
})
</script>

<template>
  <div
    class=""
    :class="
      cn(
        'grid grid-cols-5 justify-center 0 **:font-semibold **:text-bc',
        className,
      )
    ">
    <div
      v-tippy="'Dragon Kills'"
      class="flex items-center gap-1">
      <img
        :src="`/img/ui/dragon-${team.teamId}.png`"
        class="size-4 drop-shadow-sm opacity-85" />

      <span>
        {{ team.objectives.dragon.kills ?? 0 }}
      </span>
    </div>

    <div
      v-tippy="'Baron Kills'"
      class="flex items-center gap-1">
      <img
        :src="`/img/ui/baron-${team.teamId}.png`"
        class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.baron.kills ?? 0 }}
      </span>
    </div>

    <div
      v-tippy="'Elder Dragon Kills'"
      class="flex items-center gap-1">
      <img
        :src="`/img/ui/elder-${team.teamId}.png`"
        class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.baron.kills ?? 0 }}
      </span>
    </div>

    <div
      v-tippy="'Towers Taken'"
      class="flex items-center gap-1">
      <img
        :src="`/img/ui/tower-${team.teamId}.png`"
        class="size-5 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.tower.kills }}
      </span>
    </div>

    <div
      v-tippy="'Inhibitors Taken'"
      class="flex items-center gap-1">
      <img
        :src="`/img/ui/inhibitor-${team.teamId}.png`"
        class="size-4 drop-shadow-sm opacity-85" />

      <span class="w-7 max-w-7">
        {{ team.objectives.inhibitor.kills }}
      </span>
    </div>
  </div>
</template>
