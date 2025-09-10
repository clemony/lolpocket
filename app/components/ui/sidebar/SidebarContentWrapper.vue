<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'

const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
  description?: string
}>()
</script>

<template>
  <Paper
    side="left"
    class="z-9 left-16 border-l-0 flex flex-col ">
    <SheetTitle
      :class="cn('gap-0 !h-16 border-b  px-3 w-full', className)">
      <slot name="header">
        <h2 class="dst font-bold pt-1">
          {{ title }}
        </h2>
      </slot>
    </SheetTitle>
    <VisuallyHidden>
      <SheetDescription>{{ description }}</SheetDescription>
    </VisuallyHidden>
    <div class="px-0  h-full">
      <slot />
    </div>
  </Paper>
</template>