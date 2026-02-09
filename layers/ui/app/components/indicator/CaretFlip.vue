<script lang="ts" setup>
const { class: className, fill } = defineProps<{
  class?: HTMLAttributes['class']
  fill?: boolean
}>()
</script>

<template>
  <icon
    v-if="fill"
    name="caret-up"
    :class="
      cn(
        'transition-rotate text-pc/60 duration-150 group-data-[state=open]/collapse:-rotate-180',
        className,
      )
    " />
  <icon
    v-else
    name="up"
    :class="
      cn(
        'transition-rotate text-pc/60 duration-150 group-hover/collapse:text-pc/100! group-hover/collapse:**:stroke-[2.5] group-data-[state=open]/collapse:-rotate-180',
        className,
      )
    " />
</template>
