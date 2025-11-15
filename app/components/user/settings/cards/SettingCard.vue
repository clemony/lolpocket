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
  <Card class="flex flex-col pt-2 pb-3">
    <CardHeader class="w-full grow">
      <CardTitle class="drop-shadow-text flex items-center gap-6">
        <slot name="header-icon" />

        <h4 class="grow items-center capitalize">
          {{ props.title }}
        </h4>

        <slot name="header-badge" />
      </CardTitle>

      <CardDescription>
        {{ props.description }}
      </CardDescription>
    </CardHeader>

    <CardContent :class="cn('h-fit w-full px-8', props.contentClass)">
      <slot />
    </CardContent>
  </Card>
</template>

<style scoped></style>
