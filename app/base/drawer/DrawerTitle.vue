<script lang="ts" setup>
import { reactiveOmit } from '@vueuse/core'
import type { DrawerTitleProps } from 'vaul-vue'
import { DrawerTitle } from 'vaul-vue'

const props = defineProps<DrawerTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DrawerTitle
    v-bind="delegatedProps"
    :class="cn('text-6 font-semibold leading-none tracking-tight', props.class)">
    <slot />
  </DrawerTitle>
</template>
