<script lang="ts" setup>
import { DrawerContent, FadeDialogContent } from '#components'

const isDesktop = useMediaQuery('(min-width: 768px)')

const { side } = defineProps<{
side?: Side
}>()
</script>

<template>
  <component :is="isDesktop ? FadeDialogContent : DrawerContent" :side="side">
    <slot />
  </component>
</template>