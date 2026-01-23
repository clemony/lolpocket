<script lang="ts" setup>
const DialogTrigger = resolveComponent('DialogTrigger')
const Drawer = resolveComponent('Sheet')

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <component :is="isDesktop ? DialogTrigger : DialogTrigger">
    <slot />
  </component>
</template>
