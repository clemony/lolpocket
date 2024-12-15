<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue'

const props = defineProps<{
if: boolean
}>()
</script>

<template>

    <template v-if="props.if">
  <VisuallyHidden>
    <slot />
  </VisuallyHidden>
</template>

<template v-else>
    <slot />
</template>
</template>