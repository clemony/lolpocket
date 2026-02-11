<script setup lang="ts">
import type { CollapsibleTriggerProps } from "reka-ui"
import { CollapsibleTrigger } from "reka-ui"

const props = defineProps<
  CollapsibleTriggerProps & {
    class?: HTMLAttributes["class"]
  }
>()
</script>

<template>
  <CollapsibleTrigger v-bind="props" :class="cn('group/collapse', props.class)">
    <slot />
  </CollapsibleTrigger>
</template>
