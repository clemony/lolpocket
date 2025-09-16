<script lang="ts" setup>
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'

const clem = [
  '/img/cat/clem1.webp',
  '/img/cat/clem0.webp',
  '/img/cat/clem2.webp',
  '/img/cat/clem3.webp',
]

const showClem = ref('/img/cat/clem1.webp')
</script>

<template>
  <Dialog>
    <DialogTrigger
      class="hover:underline underline-offset-2 flex hover:bg-b2/35 cursor-pointer">
      <slot />
    </DialogTrigger>

    <MotionDialogContent
      class="!rounded-xl top-[10%] translate-y-1/4 !max-w-171">
      <DialogHeader>
        <DialogTitle>Clem</DialogTitle>

        <DialogDescription>Clementine Breakfast Cat</DialogDescription>
      </DialogHeader>

      <div class="">
        <AnimatePresence mode="wait">
          <Motion
            class="aspect-square shadow-warm"
            :initial="{ x: 10, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :exit="{ x: -10, opacity: 0 }"
            :transition="{ duration: 0.2 }"></Motion>
        </AnimatePresence>
      </div>

      <Carousel class="relative w-full max-w-xs">
        <CarouselContent>
          <CarouselItem
            v-for="(img, i) in clem"
            :key="i">
            <div class="p-1">
              <Card :key="showClem">
                <CardContent
                  class="w-full max-h-150 overflow-hidden bg-black flex aspect-square items-center justify-center rounded-lg">
                  <img
                    :src="img"
                    class="size-full rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MotionDialogContent>
  </Dialog>
</template>

<style scoped></style>
