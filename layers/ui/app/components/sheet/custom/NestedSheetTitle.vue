<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'
</script>

<template>
  <div
    class="bg-b1/90 absolute top-0 left-0 z-1 flex w-full items-center p-4 backdrop-blur-md"
  >
    <DialogClose class="focus:outline-none">
      <icon class="dst size-6" name="arrow-left" />
    </DialogClose>

    <Grow />

    <SheetTitle class="text-xldst">
      <slot />
    </SheetTitle>

    <VisuallyHidden>
      <SheetDescription>Choose a new look for your ui().</SheetDescription>
    </VisuallyHidden>
  </div>
</template>
