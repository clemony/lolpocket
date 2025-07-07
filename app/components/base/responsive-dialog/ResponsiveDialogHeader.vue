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
      <slot name="title">

 <h1>{{ title }}</h1>
      </slot>
    </component>

    <component :is="isDesktop ? DialogDescription : DrawerDescription">
      <slot name="description" >
      <p class="font-medium opacity-60 mt-1">{{ description }}</p>
      </slot>
    </component>
  </component>
</template>