<script setup lang="ts">
import {
  MenubarRoot,

  useForwardPropsEmits,
} from 'reka-ui'
import type { MenubarRootEmits, MenubarRootProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<MenubarRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="
      cn(
        'flex h-9 items-center space-x-1 rounded-md border border-b2  bg-b1 p-1 shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
