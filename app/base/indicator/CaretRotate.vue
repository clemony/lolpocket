<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <icon
    name="left"
    :class="
      cn(
        'size-4.5 !opacity-50 group-data-[state=open]/collapse:-rotate-90  transition-rotate duration-150  group-hover/collapse:!text-bc/100 group-hover/collapse:**:stroke-[2.5] ',
        className,
      )
    " />
</template>
