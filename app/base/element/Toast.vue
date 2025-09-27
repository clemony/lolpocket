<script lang="ts" setup></script>

<template>
  <Toaster
    class="toaster absolute group !top-22 !right-4.5 flex items-center"
    :toast-options="{
      unstyled: true,
      classes: {
        toast:
          ' w-96 bg-b1/90 **:antialiased backdrop-blur-md text-bc border flex-col !border-b3 shadow-lg px-6 gap-3 justify-start-items-start pt-3 pb-4 text-3 rounded-xl relative flex',
        title:
          'text-bc/80 !text-5dst tracking-[-0.3px]  pr-6 pl-8  leading-normal !font-bold  -mt-1.75 mb-2 ',
        description: 'text-bc leading-normal opacity-90 tracking-tight !text-3',
        actionButton:
          ' !rounded-lg  btn btn-neutral btn-sm text-2 !font-semibold self-end',
        cancelButton:
          '!text-bc  size-8 text-3 absolute right-2 top-2 btn btn-ghost  rounded-lg btn-sm',
        closeButton: 'btn btn-ghost btn-sm absolute !right-0 top-2 rounded-xl',
      },
    }">
    <template #success-icon>
      <icon
        name="mingcute:check-circle-fill"
        class="absolute top-4.75 left-5 size-6 drop-shadow-sm rounded-full" />
    </template>

    <!--   <template #loading-icon>
    <LoadingIcon />
  </template>
  <template #error-icon>
    <ErrorIcon />
  </template>
  <template #info-icon>
    <InfoIcon />
  </template>
  <template #warning-icon>
    <WarningIcon />
  </template> -->
  </Toaster>
</template>
