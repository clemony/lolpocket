<script lang="ts" setup>
import type { DrawerDescriptionProps } from 'vaul-vue'
import { reactiveOmit } from '@vueuse/core'
import { DrawerDescription } from 'vaul-vue'

const props = defineProps<DrawerDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DrawerDescription
    v-bind="delegatedProps"
    :class="cn('text-2 text-bc/70', props.class)">
    <slot />
  </DrawerDescription>
</template>
