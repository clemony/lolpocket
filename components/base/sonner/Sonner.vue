<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        toast: 'justify-self-end !right-0 group toast group-[.toaster]:bg-b1/90 backdrop-blur-md group-[.toaster]:text-bc group-[.toaster]:border-b2 group-[.toaster]:shadow-lg text-3 !top-16 !w-fit !pr-15 !pl-7 !pt-4 !pb-3.5 !shadow-pretty',
        description: 'group-[.toast]:text-bc/60',
        actionButton:
          'group-[.toast]:bg-neutral group-[.toast]:text-bc',
        cancelButton:
          'group-[.toast]:bg-b2/60 group-[.toast]:text-bc/60',
      },
    }"
  />
</template>
