<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :class="cn('flex  w-26 flex-nowrap justify-items-start ', className)">
    <p
      class="text-sm grid items-center font-semibold grid justify-start tracking-tight text-nowrap inline-flex flex-nowrap">
      {{ team.kills }}
      /
      {{ team.deaths }}
      /
      {{ team.assists }}
    </p>
  </div>
</template>
