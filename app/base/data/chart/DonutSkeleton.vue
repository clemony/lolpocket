<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  label?: string
}>()
</script>

<template>
  <div
    class=""
    :class="
      cn(
        `
          radial-progress size-22 text-b3
          after:hidden
        `,
        props.class,
      )
    "
    style="--value: 100"
    role="progressbar">
    <span class="font-medium text-bc/60">
      {{ props.label }}
    </span>
  </div>
</template>
