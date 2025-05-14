<script lang="ts" setup>

</script>

<template>
  <Toaster
    class="toaster group !top-18 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {

        toast: 'bg-neutral/80 backdrop-blur-md text-nc border-accent shadow-pretty px-6 gap-4 justify-start-items-start py-7 text-3 rounded-xl relative flex',
        title: 'text-nc font-medium -mt-0.75',
        description: 'text-nc',
        actionButton: ' !text-neutral !bg-b1 !border-b1 mt-2 btn text-2 font-medium self-end',
        cancelButton: '!text-nc  size-8 text-3 absolute right-2 top-1',
        closeButton: '!bg-transparent absolute !right-0 ',
      },
    }" />

<!--  <div class="min-w-64 bg-neutral/80 backdrop-blur-md text-nc border-accent shadow-lg py-6 px-10 text-3 rounded-xl relative">
    <h3 class="text-3 font-medium"></h3>
    <p class="text-2"></p>
    <button></button>
  </div>

  <Toaster
    close-button
    as-child
    class="toaster group !top-4 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {

        toast: 'bg-neutral/80 backdrop-blur-md text-nc border-accent shadow-lg py-6 px-10 text-3 rounded-xl relative',
        title: 'text-nc font-medium',
        description: 'text-nc',
        actionButton: ' text-neutral mt-2 btn text-2 font-medium',
        cancelButton: 'btn',
        closeButton: '!bg-transparent absolute !right-0 ',
      },
    }" />

        toast: 'group min-h-34 toast group-[.toaster]: group-[.toaster]:!text-nc group-[.toaster]:border !border-accent   group-[.toaster]:shadow-lg !py-4  gap-3 h-auto min-h-14 !rounded-2xl !text-3  **:!text-3',
        description: 'group-[.toast]:!text-nc !font-medium',
        actionButton:
          'group-[.toast]:!bg-nc group-[.toast]:!text-neutral !mt-2',
        cancelButton:
          'group-[.toast]:!bg-transparent !bg-transparent group-[.toast]:!te
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