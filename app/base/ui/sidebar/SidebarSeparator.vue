<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { Separator } from 'base/ui/separator'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    :class="cn('bg-b3/80 mx-2 w-auto', props.class)">
    <slot />
  </Separator>
</template>
