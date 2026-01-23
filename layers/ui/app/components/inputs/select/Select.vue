<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'reka-ui'
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const toggleOpen = useToggle(props.open)
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <slot :toggle-open />
  </SelectRoot>
</template>
