<script setup lang="ts">
const props = defineProps<{
  set: RuneSet
  style: any
}>()
</script>

<template>
  <div
    class="bg-neutral shadow-warm ring-neutral/20 absolute top-3 left-3 z-20 flex size-16 items-center justify-center rounded-full ring-1 backdrop-blur-xs"
    :style="{
      //outlineColor: 'var(--n) / 0.2',
      borderColor: `var(--${set.primary})`,
      borderWidth: '4px',
      borderStyle: 'solid',
    }"
  >
    <div class="z-40 grid aspect-square! size-full place-items-center rounded-full">
      <img
        :style="props.style"
        class="h-14 w-auto shrink-0 object-center drop-shadow-md"
      />
      <ShadowedPlaceholder class="size-14 rounded-full" />
    </div>
  </div>
</template>

<style scoped></style>
