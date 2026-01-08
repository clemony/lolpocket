<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :class="cn('inline text-3 font-bold tracking-tight whitespace-nowrap', className)">
    {{ team.kills }}
    /
    <span class="text-shade-domination/30">{{ team.deaths }}</span>
    /
    {{ team.assists }}
  </div>
</template>
