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
      class="hover:underline underline-offset-2 flex hover:bg-b2/35 cursor-pointer">
      <slot />
    </DialogTrigger>

    <DialogContent
      class="!rounded-xl top-[10%] translate-y-1/4 !max-w-190 w-190 pb-10 px-16">
      <DialogHeader>
        <DialogTitle>Clem</DialogTitle>

        <DialogDescription>Clementine Breakfast Cat</DialogDescription>
      </DialogHeader>

      <Carousel
        ref="photoBox"
        :opts="{ loop: true }"
        :class="cn('relative w-full max-h-full  focus-visible:outline-0  **:focus-visible:outline-0')">
        <CarouselContent>
          <CarouselItem
            v-for="(img, i) in clem"
            :key="i">
            <div>
              <Card
                :key="showClem"
                class="border-0 focus-visible:outline-0 bg-black rounded-xl overflow-hidden aspect-square shadow-sm shadow-black/18 drop-shadow-black/18 drop-shadow-sm max-h-screen overflow-hidden bg-black mx-auto flex items-center p-0 relative justify-center rounded-xl inset-shadow-sm inset-shadow-black/15">
                <img
                  :src="img.url"
                  :class="cn('size-full m-auto rounded-lg', img.class)" />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <Button
          v-tippy="{ content: isFullscreen ? 'Exit fullscreen' : 'Fullscreen', placement: 'bottom-end' }"
          variant="ghost"
          hover="neutral"
          class="absolute  top-4 grid place-items-center btn-square right-4"
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
          :class="cn('size-12 rounded-lg *:size-6', !isFullscreen ? '-left-14 ' : 'left-10')" />
        <CarouselNext
          :variant="!isFullscreen ? 'ghost' : 'neutral'"
          :class="cn('size-12 rounded-lg *:size-6', !isFullscreen ? '-right-14 ' : 'right-10')" />
      </Carousel>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
