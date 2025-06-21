<script lang="ts" setup>

</script>

<template>
  <Toaster
    class="toaster group !top-20 !right-0 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {

        toast: ' w-110 bg-neutral/80 backdrop-blur-md text-nc border-accent shadow-pretty px-6 gap-4 justify-start-items-start py-7 text-3 rounded-xl relative flex',
        title: 'text-nc font-medium -mt-0.75',
        description: 'text-nc',
        actionButton: ' !text-neutral !bg-b1 !border-b1 mt-2 btn text-2 font-medium self-end',
        cancelButton: '!text-nc  size-8 text-3 absolute right-2 top-1',
        closeButton: '!bg-transparent absolute !right-0 ',
      },
    }" />
</template>