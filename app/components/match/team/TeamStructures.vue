<script lang="ts" setup>
const { team, class: className } = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="" :class="cn('flex gap-4 pb-4 h-full justify-items-start items-center **:font-medium', className)">
    <div class="flex items-center gap-1">
      <img
        v-tippy="'Towers Taken'"
        :src="`/img/ui/tower-${team.teamId}.png`" class="size-5 drop-shadow-sm opacity-85" />
      {{ team.objectives.tower.kills }}
    </div>

    <div class="flex items-center gap-1">
      <img
        v-tippy="'Inhibitors Taken'"
        :src="`/img/ui/inhibitor-${team.teamId}.png`" class="size-4 drop-shadow-sm opacity-85" />
      {{ team.objectives.inhibitor.kills }}
    </div>
  </div>
</template>