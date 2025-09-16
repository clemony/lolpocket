<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import type { SelectLabelProps } from 'reka-ui'
import { SelectLabel } from 'reka-ui'

const props = defineProps<
  SelectLabelProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <SelectLabel :class="cn('px-2 py-1.5 text-xs font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
