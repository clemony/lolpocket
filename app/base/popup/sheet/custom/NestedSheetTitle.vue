<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'
</script>

<template>
  <div
    class="
      absolute top-0 left-0 z-1 flex w-full items-center bg-b1/90 px-4 py-4
      backdrop-blur-md
    ">
    <DialogClose class="focus:outline-none">
      <icon
        name="arrow-left"
        class="size-6 dst" />
    </DialogClose>

    <Grow />

    <SheetTitle class="text-5dst">
      <slot />
    </SheetTitle>

    <VisuallyHidden>
      <SheetDescription>Choose a new look for your ui().</SheetDescription>
    </VisuallyHidden>
  </div>
</template>
