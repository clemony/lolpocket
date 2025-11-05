<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :offset="[2, -2]"
    :class="
      cn(
        'flex flex-col gap-1 *:text-1 py-1 *:leading-none font-medium items-start tracking-tight justify-start size-full **:text-nowrap',
        className,
      )
    ">
    <p>
      {{ player.teamPosition }}
    </p>
  </div>
</template>
