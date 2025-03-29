<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <label class="flex gap-4 py-2 cursor-pointer items-center **:text-nc">
    <input v-bind="$attrs"  type="radio" class="radio radio-xs !bg-transparent outline outline-nc checked:text-nc **:text-nc border-nc" />
    <slot />
  </label>
</template>