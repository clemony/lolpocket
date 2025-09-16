<script lang="ts" setup>
const { class: className, solid } = defineProps<{
  class?: HTMLAttributes['class']
  solid?: boolean
}>()
</script>

<template>
  <icon
    v-if="solid"
    name="up-fill"
    :class="
      cn(
        '!text-bc/60 group-data-[state=open]/collapse:-rotate-180 transition-rotate duration-200',
        className,
      )
    " />
  <icon
    v-else
    name="up"
    :class="
      cn(
        '!text-bc/60 group-data-[state=open]/collapse:-rotate-180 transition-rotate duration-200',
        className,
      )
    " />
</template>
