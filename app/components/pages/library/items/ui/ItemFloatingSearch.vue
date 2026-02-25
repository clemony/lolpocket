<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const {
  variant = "solid",
  color = "neutral",
  class: className,
} = defineProps<{
  source?: Index[]
  color?: InputProps["color"]
  class?: HTMLAttributes["class"]
  variant?: InputProps["variant"]
}>()

const { filters } = storeToRefs(is())
</script>

<template>
  <!-- search -->
  <UPopover
    :ui="{ content: 'backdrop-blur-unset rounded-xl bg-unset ring-unset' }"
    :content="{ side: 'left' }">
    <template #default="{ open }">
      <UButton
        color="p0"
        active-color="neutral"
        :active="open"
        icon="i-search"
        class="rounded-full drop-shadow-black/4 fx-0"
        size="lg" />
    </template>
    <template #content>
      <ItemSearchInput />
    </template>
  </UPopover>
</template>
