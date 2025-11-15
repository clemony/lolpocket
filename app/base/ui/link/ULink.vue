<script lang="ts" setup>
const { class: className, to } = defineProps<{
  class?: HTMLAttributes['class']
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    :class="
      cn(
        `
          cursor-pointer underline-offset-2
          hover:underline
        `,
        className,
      )
    ">
    <slot />
  </NuxtLink>
</template>
