<script setup lang="ts">
import type {
  ContextMenuRadioItemEmits,
  ContextMenuRadioItemProps,
} from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ContextMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuRadioItem
    class="text-nc/90 **:text-nc/90 focus:bg-b3/20 focus:text-nc cursor-pointer rounded-md"
    v-bind="forwarded"
  >
    <slot />
  </ContextMenuRadioItem>
</template>
