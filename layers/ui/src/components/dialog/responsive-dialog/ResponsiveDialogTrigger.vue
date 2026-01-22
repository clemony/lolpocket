<script lang="ts" setup>
import { DialogTrigger } from '#components'

const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <component :is="isDesktop ? DialogTrigger : DialogTrigger">
    <slot />
  </component>
</template>
