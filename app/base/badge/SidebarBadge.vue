<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    class="absolute flex grow items-center justify-end gap-2 tracking-wide dst group-not-disabled:text-bc/80 group-disabled:text-bc/60 group-disabled:opacity-70"
    :class="cn('right-11 text-[0.73rem]', props.class)"
  >
    <slot />
  </div>
</template>
