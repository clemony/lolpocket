<script lang="ts" setup>
/* import { DrawerContent, FadeDialogContent } from '#components' */

defineOptions({
  inheritAttrs: false,
})

const { side } = defineProps<{
  side?: Side
}>()

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <DialogContent
    v-if="isDesktop"
    v-bind="$attrs">
    <slot />
  </DialogContent>

  <DrawerContent
    v-else
    :side="side"
    v-bind="$attrs">
    <slot />
  </DrawerContent>
</template>
