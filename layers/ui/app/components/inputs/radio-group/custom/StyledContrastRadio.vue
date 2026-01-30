<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <label class="**:text-nc flex cursor-pointer items-center gap-4 py-2">
    <input
      class="radio border-nc radio-xs outline-nc **:text-nc checked:text-nc bg-transparent! outline"
      v-bind="$attrs"
      type="radio"
    >

    <slot />
  </label>
</template>
