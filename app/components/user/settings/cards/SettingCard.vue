<script lang="ts" setup>
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  title: string
  description: string
  noContent?: boolean
  contentClass?: HTMLAttributes["class"]
}>()
</script>

<template>
  <UCard class="flex flex-col pt-2 pb-3">
    <template #header>
      <div class="drop-shadow-text flex items-center gap-6">
        <slot name="header-icon" />

        <h4 class="grow items-center capitalize">
          {{ props.title }}
        </h4>

        <slot name="header-badge" />
      </div

   <div>
      {{ props.description }}
      </div>
    </template>

    <slot />
  </UCard>
</template>
