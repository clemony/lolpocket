<script lang="ts" setup>
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'

const clem = [
  {
    class: 'object-cover',
    url: '/img/cat/clem1.webp',
  },
  {
    class: 'object-contain',
    url: '/img/cat/clem0.webp',
  },
  {
    class: 'object-cover',
    url: '/img/cat/clem2.webp',
  },
  {
    class: 'object-cover',
    url: '/img/cat/clem3.webp',
  },
]

const showClem = ref('/img/cat/clem1.webp')

const photoBox = useTemplateRef('photoBox')
const { enter, exit, isFullscreen, toggle } = useFullscreen(photoBox)
</script>

<template>
  <Dialog>
    <DialogTrigger
      class="
        flex cursor-pointer underline-offset-2
        hover:bg-b2/35 hover:underline
      ">
      <slot />
    </DialogTrigger>

    <DialogContent
      class="top-[10%] w-190 !max-w-190 translate-y-1/4 !rounded-xl px-16 pb-10">
      <DialogHeader>
        <DialogTitle>Clem</DialogTitle>

        <DialogDescription>Clementine Breakfast Cat</DialogDescription>
      </DialogHeader>

      <Carousel
        ref="photoBox"
        :opts="{ loop: true }"
        :class="cn(`
          relative max-h-full w-full
          focus-visible:outline-0
          **:focus-visible:outline-0
        `)">
        <CarouselContent>
          <CarouselItem
            v-for="(img, i) in clem"
            :key="i">
            <div>
              <Card
                :key="showClem"
                class="
                  relative mx-auto flex aspect-square max-h-screen items-center
                  justify-center overflow-hidden rounded-xl border-0 bg-black
                  p-0 shadow-sm inset-shadow-sm shadow-black/18
                  inset-shadow-black/15 drop-shadow-sm drop-shadow-black/18
                  focus-visible:outline-0
                ">
                <img
                  :src="img.url"
                  alt="clem"
                  :class="cn('m-auto size-full rounded-lg', img.class)" />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <Button
          v-tippy="{ content: isFullscreen ? 'Exit fullscreen' : 'Fullscreen', placement: 'bottom-end' }"
          variant="ghost"
          hover="neutral"
          class="absolute top-4 right-4 grid btn-square place-items-center"
          @click="toggle()">
          <icon
            v-show="!isFullscreen"
            class="absolute"
            name="fullscreen" />
          <icon
            v-show="isFullscreen"
            class="absolute"
            name="exit-fullscreen" />
        </Button>
        <CarouselPrevious
          :variant="!isFullscreen ? 'ghost' : 'neutral'"
          :class="cn(`
            size-12 rounded-lg
            *:size-6
          `, !isFullscreen ? '-left-14 ' : 'left-10')" />
        <CarouselNext
          :variant="!isFullscreen ? 'ghost' : 'neutral'"
          :class="cn(`
            size-12 rounded-lg
            *:size-6
          `, !isFullscreen ? '-right-14 ' : 'right-10')" />
      </Carousel>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
