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
        'flex size-full flex-col items-start justify-start gap-1 py-1 font-medium tracking-tight *:text-xs *:leading-none **:text-nowrap',
        className,
      )
    ">
    <p>
      {{ player.role }}
    </p>
  </div>
</template>
