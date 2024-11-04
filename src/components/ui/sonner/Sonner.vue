<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
<Sonner class="toaster group" v-bind="props" :toast-options="{
  classes: {
    toast: 'group toast group-[.toaster]:bg-base-100/90 backdrop-blur-md group-[.toaster]:text-base-content group-[.toaster]:border-base-200 group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:text-base-content/60',
    actionButton:
      'group-[.toast]:bg-neutral group-[.toast]:text-neutral-content',
    cancelButton:
      'group-[.toast]:bg-base-200/60 group-[.toast]:text-base-content/60',
  },
}" />
</template>
