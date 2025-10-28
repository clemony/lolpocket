<script lang="ts" setup>
<<<<<<< HEAD
const { class: className, direction = 'left' } = defineProps<{
  class?: HTMLAttributes['class']
  direction?: Direction
}>()

const directionClass = computed (() =>
  direction === 'left' ? ' group-data-[state=open]/collapse:-rotate-90 ' : direction === 'right' ? ' group-data-[state=open]/collapse:rotate-90 ' : ''
)
=======
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <icon
<<<<<<< HEAD
    :name="direction"
    :class="
      cn(
        'size-4.5 !opacity-50 transition-rotate duration-150  group-hover/collapse:!text-bc/100 group-hover/collapse:**:stroke-[2.5] ', directionClass,
=======
    name="left"
    :class="
      cn(
        'size-4.5 !opacity-50 group-data-[state=open]/collapse:-rotate-90  transition-rotate duration-150  group-hover/collapse:!text-bc/100 group-hover/collapse:**:stroke-[2.5] ',
>>>>>>> refs/remotes/origin/main
        className,
      )
    " />
</template>
