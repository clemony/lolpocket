<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()

const player = computed (() => {
  return props.player
})
</script>

<template>
  <div class="" :offset="[2, -2]" :class="cn('flex flex-col gap-1 *:text-1 py-1 *:leading-none font-medium items-start tracking-tight justify-start size-full **:text-nowrap', props.class)">
    <p>
      {{ player.role }}
    </p>
    <p>
      {{ player.individualPosition }}
    </p>
  </div>
</template>