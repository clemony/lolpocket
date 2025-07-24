<script setup lang="ts">
import type { ContextMenuRadioItemEmits, ContextMenuRadioItemProps } from 'reka-ui'
import {
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuRadioItem
    v-bind="forwarded"
    class="cursor-pointer text-nc/90 **:text-nc/90 rounded-md  focus:bg-b3/20 focus:text-nc ">
    <slot />
  </ContextMenuRadioItem>
</template>