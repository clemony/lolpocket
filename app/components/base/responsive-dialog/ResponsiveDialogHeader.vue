<script lang="ts" setup>
import { DialogDescription, DialogHeader, DialogTitle, DrawerDescription, DrawerHeader, DrawerTitle } from '#components'

const { title, description } = defineProps<{
  title?: string
  description?: string
}>()

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <component :is="isDesktop ? DialogHeader : DrawerHeader">
    <component :is="isDesktop ? DialogTitle : DrawerTitle">
      {{ title }}
      <slot name="title" />
    </component>

    <component :is="isDesktop ? DialogDescription : DrawerDescription">
      {{ description }}
      <slot name="description" />
    </component>
  </component>
</template>