<script setup lang="ts">
import { MenubarRadioGroup, useForwardPropsEmits } from 'reka-ui'
import type { MenubarRadioGroupEmits, MenubarRadioGroupProps } from 'reka-ui'

const props = defineProps<MenubarRadioGroupProps>()

const emits = defineEmits<MenubarRadioGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarRadioGroup v-bind="forwarded">
    <slot />
  </MenubarRadioGroup>
</template>
