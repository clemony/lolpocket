<script setup lang="ts">
import type { AvatarProps } from "@nuxt/ui"

const {
  id,
  class: className,
  loadingIcon = "default",
  map,
  disabled,
  ui,
} = defineProps<{
  id: number | null
  class?: HTMLAttributes["class"]
  loadingIcon?: LoadingStyle
  map?: number
  side?: Side
  disabled?: boolean
  ui?: AvatarProps["ui"]
}>()
</script>

<template>
  <Avatar
    v-if="id"
    :id
    class="size-17"
    :src="id ? `/img/items/${id}.webp` : undefined"
    :label="id ? itemNameById(id) : ''"
    :loading-icon
    :disabled>
    <template #content>
      <LazyItemTooltip v-if="id" :id :map />
    </template>
  </Avatar>
</template>
