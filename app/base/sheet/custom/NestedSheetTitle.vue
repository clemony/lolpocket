<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'
</script>

<template>
  <div class="w-full flex z-1  items-center bg-b1/90 backdrop-blur-md absolute top-0 left-0 px-4 py-4">
    <DialogClose
      class="focus:outline-none  ">
      <icon name="arrow-left" class="size-6 dst" />
    </DialogClose>

    <Grow />

    <SheetTitle class="text-5 dst ">
      <slot />
    </SheetTitle>

    <VisuallyHidden>
      <SheetDescription>
        Choose a new look for your ui.
      </SheetDescription>
    </VisuallyHidden>
  </div>
</template>