<script setup lang="ts">
const props = defineProps<{
  roles: any
  datasets: any
  mostRoled: any
  colors: any
}>()

const hexColors = {
  support: '#99c4c8',
  bottom: '#ebcb8b',
  mid: '#be86b5',
  jungle: '#a3be8c',
  top: '#e0746b',
}
</script>

<template>
  <div class="relative size-22 grid items-center justify-center">
    <Donut
      :datasets="props.datasets"
      :colors="props.colors"
      type="gauge"
      aria="Playrate by role in percentage" />

    <div class="absolute top-7 left-7">
      <component
        :is="`i-roles-${props.mostRoled}`"
        v-if="roles && props.mostRoled"
        class="size-8 dst"
        :style="{ color: hexColors[props.mostRoled] }" />
    </div>
  </div>
</template>

<style></style>
