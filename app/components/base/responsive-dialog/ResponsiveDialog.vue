<script lang="ts" setup>
import { Dialog, Drawer } from '#components'

const isDesktop = useMediaQuery('(min-width: 768px)')

const { drawerOnly } = defineProps<{
drawerOnly?: boolean
}>()
</script>

<template>
  <Drawer v-if="drawerOnly">
    <slot  />
  </Drawer>

  <component v-else :is="isDesktop ? Dialog : Drawer">
    <slot />
  </component>
</template>