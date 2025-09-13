<script lang="ts" setup>
const { team, class: className } = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :class="cn('flex  w-26 flex-nowrap justify-items-start ', className)">
    <p class="text-3 grid items-center font-semibold grid   justify-start tracking-tight text-nowrap inline-flex flex-nowrap">
      {{ team.kills }}
      <icon
        name="slash"
        class="-mx-px dst size-4" />
      {{ team.deaths }}
      <icon
        name="slash"
        class="-mx-px dst size-4" />
      {{ team.assists }}
    </p>
  </div>
</template>