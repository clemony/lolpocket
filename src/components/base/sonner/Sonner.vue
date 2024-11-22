<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
<Sonner class="toaster group" v-bind="props" :toast-options="{
  classes: {
    toast: 'group toast group-[.toaster]:bg-b1/90 backdrop-blur-md group-[.toaster]:font-size-4-content group-[.toaster]:border-b2 group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:font-size-4-content/60',
    actionButton:
      'group-[.toast]:bg-neutral group-[.toast]:text-neutral-content',
    cancelButton:
      'group-[.toast]:bg-b2/60 group-[.toast]:font-size-4-content/60',
  },
}" />
</template>
