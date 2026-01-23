<script lang="ts" setup>
const { drawerOnly } = defineProps<{
  drawerOnly?: boolean
}>()
const Dialog = resolveComponent('Dialog')
const Drawer = resolveComponent('Sheet')

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
