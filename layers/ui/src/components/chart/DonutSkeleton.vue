<script lang="ts" setup>
const { class: className, label, thickness = '6px' } = defineProps<{
  class?: HTMLAttributes['class']
  label?: string
  thickness?: string
}>()
</script>

<template>
  <div
    class=""
    :class="
      cn('radial-progress size-22 text-b3 after:hidden',
         className,
      )
    "
    :style="`--value: 100; --thickness: ${thickness}`"
    role="progressbar">
    <span class="font-medium text-bc/60">
      {{ label }}
    </span>
  </div>
</template>
