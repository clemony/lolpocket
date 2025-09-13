<script setup lang="ts">
import type { CollapsibleTriggerProps } from 'reka-ui'
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<CollapsibleTriggerProps>()
</script>

<template>
  <CollapsibleTrigger
    v-bind="props"
    class="flex justify-between  items-center gap-3 group/collapse [&_svg]:opacity-60 [&_svg]:opacity-100 cursor-pointer">
    <slot />
  </CollapsibleTrigger>
</template>
