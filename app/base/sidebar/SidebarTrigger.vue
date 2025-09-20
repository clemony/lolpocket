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
    :class="
      cn(
        ' relative grid place-items-center *:opacity-70 *:dst *:absolute *:**:stroke-[1.7] *:size-4.75 hover:*:opacity-100',
        props.class,
      )
    "
    @click="toggleSidebar">
    <icon
      v-show="state === 'expanded'"
      name="collapse" />

    <icon
      v-show="state === 'collapsed'"
      name="expand" />
    <slot />
    <span class="sr-only">Toggle Sidebar</span>
  </Label>
</template>
