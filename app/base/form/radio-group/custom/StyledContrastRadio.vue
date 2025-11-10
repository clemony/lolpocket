<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <label
    class="
      flex cursor-pointer items-center gap-4 py-2
      **:text-nc
    ">
    <input
      v-bind="$attrs"
      type="radio"
      class="
        radio border-nc !bg-transparent radio-xs outline outline-nc
        **:text-nc
        checked:text-nc
      " />

    <slot />
  </label>
</template>
