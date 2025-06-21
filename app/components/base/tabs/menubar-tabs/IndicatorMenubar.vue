<script setup lang="ts">
import type { MenubarRootEmits, MenubarRootProps, TabsRootEmits, TabsRootProps } from 'reka-ui'
import { MenubarRoot, TabsRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TabsRootProps & MenubarRootProps>()

const emits = defineEmits<TabsRootEmits & MenubarRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const previousTab = ref()
const tabs = ref()
const menu = ref()
const route = useRoute()

watchEffect(() => {
  if (!menu.value)
    return
  if (tabs.value.charAt(0) == '/') {
    previousTab.value = tabs.value
  }
  tabs.value = menu.value
})

watch(
  () => menu.value,
  (newVal) => {
    if (!newVal)
      tabs.value = previousTab.value
  },
)

onMounted (() => {
  if (route.path != '/')
    route.meta.section.toString().charAt(0) != '/' ? tabs.value = route.path : tabs.value = route.meta.section.toString()
})
</script>

<template>
  <TabsRoot
    v-bind="forwarded" v-model:model-value="tabs">
    <MenubarRoot v-model:model-value="menu" as-child @update:model-value="console.log(menu)">
      <slot />
    </MenubarRoot>
  </TabsRoot>
</template>
