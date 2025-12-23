<script lang="ts" setup>
const { percent, stat } = defineProps<{
  stat: number
  percent?: boolean
  tip?: number[]
}>()
</script>

<template>
  <div
    class="flex cursor-default flex-col py-2 pr-2 leading-none select-none"
    :data-tip="tip ? `${tip[0]}% winrate
        ${tip[1]} games
        ${tip[2]} pickrate
        ${tip[3] ? `${tip[3]} acquired` : ''}` : null">
    <h4 class="font-bold dst">
      {{ stat }}{{ percent ? '%' : '' }}
    </h4>
    <span class="mt-0.5 text-2 font-medium">Winrate</span>
  </div>
</template>