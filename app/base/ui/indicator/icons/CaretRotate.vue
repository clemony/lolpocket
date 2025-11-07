<script lang="ts" setup>
const { class: className, direction = 'left' } = defineProps<{
  class?: HTMLAttributes['class']
  direction?: Direction
}>()

const directionClass = computed (() =>
  direction === 'left' ? ' group-data-[state=open]/collapse:-rotate-90 ' : direction === 'right' ? ' group-data-[state=open]/collapse:rotate-90 ' : ''
)
</script>

<template>
  <icon
    :name="direction"
    :class="
      cn(
        'size-4.5 !opacity-50 transition-rotate duration-150  group-hover/collapse:!text-bc/100 group-hover/collapse:**:stroke-[2.5] ', directionClass,
        className,
      )
    " />
</template>
