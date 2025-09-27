<script setup lang="ts">
import type { ContextMenuRootEmits, ContextMenuRootProps } from 'reka-ui'
import { ContextMenuRoot, useForwardPropsEmits } from 'reka-ui'
import { ref, watch } from 'vue'

const props = defineProps<
  ContextMenuRootProps & { modelValue?: boolean }
>()

const emits = defineEmits<
  ContextMenuRootEmits & { update: [modelValue: boolean | void] }
>()

// internal open state
const open = ref(props.modelValue ?? false)

watch(
  () => props.modelValue,
  (v) => {
    if (v !== undefined)
      open.value = v
  }
)

watch(open, (v) => {
  emits('update', v)
})

const forwarded = useForwardPropsEmits(props, emits)

// expose updater
function updateOpen(value: boolean) {
  open.value = value
}
</script>

<template>
  <ContextMenuRoot
    v-bind="forwarded"
    v-model:open="open">
    <slot
      :open="open"
      :update-open="updateOpen" />
  </ContextMenuRoot>
</template>