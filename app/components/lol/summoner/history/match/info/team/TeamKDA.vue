<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: any;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    class=""
    :class="cn('flex w-26 flex-nowrap justify-items-start', className)"
  >
    <p
      class="grid inline-flex flex-nowrap items-center justify-start text-3 font-semibold tracking-tight text-nowrap"
    >
      {{ team.kills }}
      /
      {{ team.deaths }}
      /
      {{ team.assists }}
    </p>
  </div>
</template>
