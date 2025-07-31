<script lang="ts" setup>

</script>

<template>
  <Toaster
    class="toaster group !bottom-4 !right-4 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {
        toast: ' w-96 bg-b1/90 **:antialiased backdrop-blur-md text-bc border flex-col !border-b3 shadow-lg px-6 gap-3 justify-start-items-start pt-3 pb-4 text-3 rounded-xl relative flex',
        title: 'text-bc !text-5 tracking-tight pr-6 pl-8  leading-normal !font-bold opacity-70 -mt-1.75 mb-2 ',
        description: 'text-bc leading-normal opacity-70',
        actionButton: ' !rounded-lg  btn btn-neutral btn-sm text-2 !font-semibold self-end',
        cancelButton: '!text-bc  size-8 text-3 absolute right-2 top-2 btn btn-ghost  rounded-lg btn-sm',
        closeButton: 'btn btn-ghost btn-sm absolute !right-0 top-2 rounded-xl',
      },
    }">
    <template #success-icon>
      <icon
        name="mingcute:check-circle-fill"
        class="absolute top-3.75 left-5 size-7 drop-shadow-sm rounded-full" />
    </template>
  </Toaster>
</template>
