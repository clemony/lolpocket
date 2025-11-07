<script lang="ts" setup>
const { class: className, fill } = defineProps<{
  class?: HTMLAttributes['class']
  fill?: boolean
}>()
</script>

<template>
  <icon
    v-if="fill"
    name="up-fill"
    :class="
      cn(
        'text-bc/60  group-data-[state=open]/collapse:-rotate-180 transition-rotate duration-150',
        className,
      )
    " />
  <icon
    v-else
    name="up"
    :class="
      cn(
        'text-bc/60 group-hover/collapse:!text-bc/100 group-hover/collapse:**:stroke-[2.5]  group-data-[state=open]/collapse:-rotate-180  transition-rotate duration-150',
        className,
      )
    " />
</template>
