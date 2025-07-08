<script lang="ts" setup>

</script>

<template>
  <Toaster
    class="toaster group !top-20 !right-6 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {

        toast: ' w-120 bg-b1/90 backdrop-blur-md text-bc border !border-b3 shadow-lg px-6 gap-4 justify-start-items-start py-7 text-3 rounded-xl relative flex',
        title: 'text-bc !text-4 !font-semibold -mt-1.75 mb-2 tracking-tight',
        description: 'text-bc',
        actionButton: ' !text-nc !bg-n1 !rounded-lg !border-accent mt-2 btn text-2 font-medium self-end',
        cancelButton: '!text-bc  size-8 text-3 absolute right-2 top-1',
        closeButton: '!bg-transparent absolute !right-0 ',
      },
    }" />
</template>

<!--
<Toaster
class="toaster group !top-20 !right-6 flex items-center"
:toast-options="{
  unstyled: true,
  classes: {

    toast: ' w-120 bg-n1/80 backdrop-blur-md text-nc border-accent shadow-pretty px-6 gap-4 justify-start-items-start py-7 text-3 rounded-xl relative flex',
    title: 'text-nc font-medium -mt-0.75',
    description: 'text-nc',
    actionButton: ' !text-n1 !bg-b1 !border-b1 mt-2 btn text-2 font-medium self-end',
    cancelButton: '!text-nc  size-8 text-3 absolute right-2 top-1',
    closeButton: '!bg-transparent absolute !right-0 ',
  },
}" /> -->