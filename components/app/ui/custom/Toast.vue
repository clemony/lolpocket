<script lang="ts" setup>
import { ToastAction, ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'reka-ui'

</script>

<template>
<Toaster
    class="toaster group !-top-4 flex items-center"
    :toast-options="{
      classes: {
        toast: 'group toast group-[.toaster]:!bg-neutral/80 backdrop-blur-md group-[.toaster]:!text-nc group-[.toaster]:border !border-accent   group-[.toaster]:shadow-lg !py-4  gap-3 h-auto min-h-14 !rounded-b-2xl !text-3 !rounded-t-none  **:!text-3',
        description: 'group-[.toast]:!text-nc !font-medium',
        actionButton:
          'group-[.toast]:!bg-nc group-[.toast]:!text-neutral',
        cancelButton:
          'group-[.toast]:!bg-accent group-[.toast]:!text-nc',
      },
    }"
  />
<!--
      <ToastRoot as-child>
  <Motion
   as="div"
  :initial="{}"
  :animate="{
    translate: ['0 -100%', '0 0']
  }"
  :exit="{
     translate: [ '0 0', '0 -100%']
  }"
  :transition="{
    type: 'ease-in-out',
    duration: 0.3
  }" >
      <ToastTitle />
      <ToastDescription />
      <ToastAction />
      <ToastClose />
  </Motion>
    </ToastRoot>
 -->
</template>