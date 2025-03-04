<script lang="ts" setup>
import { Toaster as Sonner } from 'vue-sonner'
import type { ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        toast: 'group toast group-[.toaster]:bg-b1 group-[.toaster]:text-bc group-[.toaster]:border border-b2 -border border-b2  group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-b2-bc',
        actionButton:
          'group-[.toast]:bg-neutral group-[.toast]:text-neutral-bc',
        cancelButton:
          'group-[.toast]:bg-b2 group-[.toast]:text-b2-bc',
      },
    }"
  />
</template>
