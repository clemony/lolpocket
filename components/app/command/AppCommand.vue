<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'

const us = useUiStore()

onMounted (() => {
  console.log('hi')
})
</script>

<template>
  <Dialog v-model:open="us.commandOpen">
    <MotionDialogContent class="bg-b1/80 backdrop-blur-md inset-shadow-sm w-170 !rounded-3xl !p-0 -mt-54 border-2 inset-shadow-dark-1 focus:!outline-0 !border-dark-1/70 focus:!ring-dark-2 focus:!ring-offset-dark-2" @interact-outside="us.commandOpen = false">
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>
            Lolpockets Command Search
          </DialogTitle>
          <DialogDescription>
            Search the app
          </DialogDescription>
        </DialogHeader>
      </VisuallyHidden>
      <div class="  size-full">
        <div class="w-full !h-16 flex items-center relative">
          <icon name="search-bold" class="absolute left-5  top-4.25 text-dark-1/70 dst size-7" />
          <input class="size-full rounded-3xl text-dark-1 h-14 pl-16 !text-6" pt-1 />
        </div>
      </div>
    </MotionDialogContent>
  </Dialog>
</template>