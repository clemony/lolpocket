<script lang="ts" setup>
import { Dialog, Drawer } from '#components'

const { drawerOnly } = defineProps<{
  drawerOnly?: boolean
}>()
const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <Drawer v-if="drawerOnly">
    <slot />
  </Drawer>

  <component
    :is="isDesktop ? Dialog : Drawer"
    v-else>
    <slot />
  </component>
</template>
