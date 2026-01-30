<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(
  defineProps<SeparatorProps & { class?: HTMLAttributes['class'] }>(),
  {
    orientation: 'vertical',
  }
)
const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    data-slot="button-group-separator"
    :orientation="props.orientation"
    :class="
      cn(
        'bg-b3 relative m-0! self-stretch data-[orientation=vertical]:h-auto',
        props.class,
      )
    "
  />
</template>
