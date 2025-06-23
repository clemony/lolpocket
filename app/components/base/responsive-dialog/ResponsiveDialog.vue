<script lang="ts" setup>
import { Dialog, Drawer } from '#components'

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <component :is="isDesktop ? Dialog : Drawer">
    <slot />
  </component>
</template>