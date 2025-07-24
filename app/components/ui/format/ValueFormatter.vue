<script lang="ts" setup>
const { array, class: className } = defineProps<{
  array: Array<string | number | null> | null
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    v-if=" array && array.length"
    :class="cn(' items-center   overflow-hidden w-full inline-flex flex-wrap text-wrap', className)">
    <slot />

    <span
      v-for="(value, i) in array"
      :key="i"
      class="inline-flex flex-wrap items-center text-wrap overflow-hidden">
      <span
        v-if="value"
        class="inline-flex items-center ">
        {{ typeof value == 'number' ? Math.round(value * 100) / 100 : value }}
        <span
          v-if="i != array.length - 1"
          class="whitespace-pre">&nbsp;/&nbsp;&#8203;</span>
      </span>
    </span>

    <slot name="after" />
  </div>
</template>