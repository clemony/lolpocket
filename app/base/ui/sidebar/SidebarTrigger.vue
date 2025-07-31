<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar">
    <icon
      name="right-sm"
      class="size-4" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
