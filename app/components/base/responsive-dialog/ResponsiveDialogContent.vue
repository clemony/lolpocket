<script lang="ts" setup>
import { DialogContent, DrawerContent } from '#components'

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <component :is="isDesktop ? DialogContent : DrawerContent">
    <slot />
  </component>
</template>