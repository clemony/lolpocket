<script lang="ts" setup>
const clem = [
  {
    class: "object-cover",
    url: "/img/cat/clem1.webp",
  },
  {
    class: "object-contain",
    url: "/img/cat/clem0.webp",
  },
  {
    class: "object-cover",
    url: "/img/cat/clem2.webp",
  },
  {
    class: "object-cover",
    url: "/img/cat/clem3.webp",
  },
]

const showClem = ref("/img/cat/clem1.webp")

const photoBox = ref<HTMLElement | null>(null)
const { enter, exit, isFullscreen, toggle } = useFullscreen(photoBox)
</script>

<template>
  <UModal title="Clem" description="Clementine Breakfast Cat">
    <UButton
      class="flex cursor-pointer underline-offset-2 hover:bg-p2/35 hover:underline">
      <slot />
    </UButton>
    <template #content>
      <div
        class="top-[10%] w-190 max-w-190! translate-y-1/4 rounded-xl! px-16 pb-10">
        <div
          ref="photoBox"
          class="relative max-h-full w-full focus-visible:outline-0 **:focus-visible:outline-0">
          <Carousel
            :opts="{ loop: true }"
            :class="
              cn(
                `relative max-h-full w-full focus-visible:outline-0 **:focus-visible:outline-0`
              )
            ">
          <CarouselContent>
            <CarouselItem v-for="(img, i) in clem" :key="i">
              <div>
                <Card
                  :key="showClem"
                  class="relative mx-auto flex aspect-square max-h-screen items-center justify-center overflow-hidden rounded-xl border-0 bg-black p-0 shadow-sm inset-shadow-sm shadow-black/18 inset-shadow-black/15 drop-shadow-sm drop-shadow-black/18 focus-visible:outline-0">
                  <img
                    :src="img.url"
                    alt="clem"
                    :class="cn('m-auto size-full rounded-lg', img.class)" />
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <Tooltip
            :text="isFullscreen ? 'Exit fullscreen' : 'Fullscreen'"
            side="bottom">
            <UButton
              class="absolute top-4 right-4 grid btn-square place-items-center"
              variant="ghost"
              color="neutral"
              square
              :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
              @click="toggle()" />
          </Tooltip>
          <CarouselPrevious
            :variant="!isFullscreen ? 'ghost' : 'neutral'"
            :class="
              cn(
                `size-12 rounded-lg *:size-6`,
                !isFullscreen ? '-left-14' : 'left-10'
              )
            " />
          <CarouselNext
            :variant="!isFullscreen ? 'ghost' : 'neutral'"
            :class="
              cn(
                `size-12 rounded-lg *:size-6`,
                !isFullscreen ? '-right-14' : 'right-10'
              )
            " />
          </Carousel>
        </div>
      </div>
    </template>
  </UModal>
</template>
