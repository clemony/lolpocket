<script setup lang="ts">
import type { TabsRootEmits } from 'reka-ui'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'
import type { TabsRootPropsWithNullableModel } from '~~/shared/types/types-extend'

const props = defineProps<TabsRootPropsWithNullableModel>()
const emits = defineEmits<TabsRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot v-bind="forwarded">
    <slot />
  </TabsRoot>
</template>
