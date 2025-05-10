<script lang="ts" setup>
const { array, class: className } = defineProps<{
  array: Array<string | number | null> | null
  class?: HTMLAttributes['class']
}>()
  console.log("💠 - array:", array)
</script>

<template>
  <div v-if=" array && array.length" :class="cn('flex items-center gap-px align-bottom ', className)">
    <slot  />
    <span v-for="(value, i) in array" :key="i" class="flex flex-wrap">
      <template v-if="value">
        {{ typeof value == 'number' ? Math.round(value * 100) / 100 : value}}
      </template><span v-if="i != array.length - 1">/</span>
    </span>
    <slot  name="after"/>
  </div>
</template>