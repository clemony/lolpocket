<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <MotionMin v-bind="$attrs" :initial="{ maxWidth: 0, opacity: 0 }" :animate="{ maxWidth: '100%', opacity: 1 }" :exit="{ opacity: 0 }" class="size-full relative grid place-items-center">
    <icon name="tick-sm" class="shrink-0 absolute size-5 dst" />
  </MotionMin>
</template>