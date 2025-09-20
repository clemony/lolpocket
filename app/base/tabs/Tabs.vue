<script setup lang="ts">
import type { TabsRootEmits } from 'reka-ui'
import type { TabsRootPropsWithNullableModel } from '~~/shared/types/types.extend'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TabsRootPropsWithNullableModel>()
const emits = defineEmits<TabsRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot v-bind="forwarded">
    <slot />
  </TabsRoot>
</template>
