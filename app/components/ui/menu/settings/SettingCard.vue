<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  title: string
  description: string
  noContent?: boolean
  contentClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <Card class="flex flex-col pb-3 pt-2">
    <CardHeader class="w-full grow">
      <CardTitle class="flex items-center gap-6 drop-shadow-text">
        <slot name="header-icon" />
        <h4 class="capitalize grow items-center">
          {{ props.title }}
        </h4>
        <slot name="header-badge" />
      </CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent :class="cn('px-8 h-fit w-full', props.contentClass)">
      <slot />
    </CardContent>
  </Card>
</template>

<style scoped></style>
