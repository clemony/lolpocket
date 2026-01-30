<script setup lang="ts">
import { useSidebar } from './sidebar-utils'

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
        '*:dst relative grid place-items-center *:absolute *:size-4.75 *:opacity-70 *:**:stroke-[1.7] hover:*:opacity-100',
        props.class,
      )
    "
    @click="toggleSidebar"
  >
    <icon v-show="state === 'expanded'" name="left-to-line" />

    <icon v-show="state === 'collapsed'" name="right-from-line" />
    <slot />
    <span class="sr-only">Toggle Sidebar</span>
  </Label>
</template>
