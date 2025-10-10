<script setup lang="ts">
const { class: className, open } = defineProps<{
  class?: HTMLAttributes['class']
  open: boolean
}>()
</script>

<template>
  <Button
    variant="link"
    :class="cn('px-2 inline mt-2 text-1 opacity-50 hover:opacity-100 text-end', className)">
    <span class="align-bottom">{{ open ? 'less' : 'more' }}</span>

    <span class="font-mono inline align-baseline -tracking-[2.5px] size-4.5 grid place-items-center">
      [{{ open ? '-' : '+' }}]
    </span>
  </Button>
</template>