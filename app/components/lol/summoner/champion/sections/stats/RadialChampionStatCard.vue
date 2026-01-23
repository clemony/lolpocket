<script lang="ts" setup>
const { title, icon } = defineProps<{
  icon?: string[]
  title: string
  value: number
  color?: string
}>()
</script>

<template>
  <div class="relative grid aspect-square size-44 place-items-center select-none">
    <div
      class="radial-progress dss absolute aspect-square"
      :style="{
        '--value': value,
        '--size': '11rem',
        '--thickness': '0.6rem',
      }"
      :aria-valuenow="value"
      role="progressbar">
      <div class="absolute -translate-y-1 place-self-center leading-7">
        <div class="text-xs font-medium">
          {{ title }}
        </div>
        <h2 class="place-self-center">
          {{ value }}
        </h2>
      </div>
    </div>
  </div>
</template>