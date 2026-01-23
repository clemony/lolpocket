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
      cn('radial-progress text-b3 size-22 after:hidden',
         className,
      )
    "
    :style="`--value: 100; --thickness: ${thickness}`"
    role="progressbar">
    <span class="text-bc/60 font-medium">
      {{ label }}
    </span>
  </div>
</template>
