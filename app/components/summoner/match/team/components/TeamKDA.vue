<script lang="ts" setup>
const { team, class: className } = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()

/* const kda = computeKDA(team.kills, team.assists, team.deaths) */
</script>

<template>
  <div class="" :class="cn('flex  w-26 flex-nowrap justify-items-start ', className)">
    <p class="text-3 grid items-center font-semibold grid   justify-start tracking-tight text-nowrap inline-flex flex-nowrap">
      {{ team.kills }}
      <icon name="slash" class="-mx-px dst size-4" />
      {{ team.deaths }}
      <icon name="slash" class="-mx-px dst size-4" />
      {{ team.assists }}
    </p><!--
    <p class="text-3 text-bc/80  pb-0.25 text-nowrap font-medium items-center">
      {{ math / 100 }}:1 <span class="font-mono ">TEAM KDA</span>
    </p> -->
  </div>
</template>