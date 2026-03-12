<script setup lang="ts">
import type { AvatarProps, TooltipProps } from "@nuxt/ui"

const {
  id,
  side,
  class: className,
  k,
  loadingIcon,
} = defineProps<{
  class?: HTMLAttributes["class"]
  k?: string
  id?: number
  side?: Side
  ui?: Record<string, HTMLAttributes["class"]>
  loadingIcon?: LoadingStyle
}>()

const emit = defineEmits(["loaded"])

const champId = computed(() => (k ? champIdByKey(k) : id))
const champName = computed(() =>
  champId.value ? champNameById(champId.value) : "",
)
</script>

<template>
  <Avatar
    v-if="champId"
    :id="champId"
    :ui
    :loading-icon
    :class="className"
    :label="champName"
    :src="champId ? `/img/champions/${champId}.webp` : undefined" />
</template>
