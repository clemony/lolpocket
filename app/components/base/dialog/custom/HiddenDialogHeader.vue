<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'

const props = defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <VisuallyHidden>
    <DialogHeader>
      <DialogTitle>
        {{ props.title }}
      </DialogTitle>
      <DialogDescription>
        {{ props.desc }}
      </DialogDescription>
    </DialogHeader>
  </VisuallyHidden>
</template>