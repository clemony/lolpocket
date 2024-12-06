<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
<Sonner class="toaster group" v-bind="props" :toast-options="{
  classes: {
    toast: 'group toast group-[.toaster]:bg-b1/90 backdrop-blur-md group-[.toaster]:text-ac group-[.toaster]:border-b2 group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:text-ac/60',
    actionButton:
      'group-[.toast]:bg-accent group-[.toast]:text-ac',
    cancelButton:
      'group-[.toast]:bg-b2/60 group-[.toast]:text-ac/60',
  },
}" />
</template>
