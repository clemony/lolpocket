<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar, state } = useSidebar()
</script>

<template>
  <Label
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7 relative grid place-items-center *:absolute *:**:stroke-[1.5] *:size-5.5', props.class)"
    @click="toggleSidebar">
    <icon
      v-show="state == 'expanded'"
      name="expand" />

    <icon
      v-show="state == 'collapsed'"
      name="collapse" />
    <slot />
    <span class="sr-only">Toggle Sidebar</span>
  </Label>
</template>
