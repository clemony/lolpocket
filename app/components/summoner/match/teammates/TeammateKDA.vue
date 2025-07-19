<script lang="ts" setup>
const { player, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
}>()
</script>

<template>
  <div class="" :class="cn(' grid items-center grid-rows-2 *:tracking-tight max-w-18 w-18  *:text-1 py-2 *:leading-0  ', className)">
    <p class=" font-bold  items-center text-nowrap flex flex-nowrap">
      {{ player.kills }}
      <icon name="slash" class="-mx-px dst  size-3" />
      {{ player.deaths }}
      <icon name="slash" class="-mx-px dst  size-3" />
      {{ player.assists }}
    </p>

    <p>
      <slot />
    </p>
  </div>
</template>
