<script lang="ts" setup>
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { AspectRatio } from 'reka-ui'
import '~/assets/css/plugins/embla.css'
import type { CarouselApi } from '~/base/carousel/carousel-index'
import {
  setupTweenParallax,
  teardownTweenParallax,
} from '~/assets/ts/embla-tween-parallax'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const emblaMainApi = ref<CarouselApi>()
const selectedIndex = ref(0)

watchOnce(emblaMainApi, (emblaApi) => {
  if (!emblaApi)
    return

  const teardown = setupTweenParallax(emblaApi)

  tryOnScopeDispose(() => {
    teardown()
    teardownTweenParallax(emblaApi)
  })
})
</script>

<template>
  <Carousel
    :opts="{ loop: true }"
    orientation="horizontal"
    :plugins="[WheelGesturesPlugin()]"
    class="relative w-full"

    @init-api="(val) => (emblaMainApi = val)">
    <CarouselContent class="h-full  flex embla__container justify-start">
      <CarouselItem
        v-for="champion in pocket.champions"
        :key="champion"
        class=" h-full basis-1/5">
        <AspectRatio
          :ratio="16 / 9"
          class="p-1 embla__slide size-full shrink-0">
          <Card class="size-full group relative border-0 grid place-items-center overflow-hidden embla__slide shrink-0 p-0 **:aspect-video shadow-sm shadow-black/15 drop-shadow-sm">
            <CardContent class="embla__parallax__layer grid place-items-center p-0 size-full scale-[360%] !aspect-video    absolute top-0 left-0 inset-0   relative  object-center shrink-0">
              <Champion
                :k="champion"
                type="centered"
                class="embla__slide__img embla__parallax__img shrink-0 translate-y-6">
                <input
                  v-model="pocket.champions"
                  :aria-label="`${champion}-select`"
                  type="checkbox"
                  :value="champion"
                  class="peer hidden" />
              </Champion>
            </CardContent>
            <div class="absolute flex gap-2 items-center left-0 w-full px-2.5  justify-between bottom-2.5">
              <Button
                size="sm"
                class=" btn-square opacity-0  transition-all duration-300 grid place-items-center group-hover:opacity-70 hover:opacity-100 bg-b1/90 backdrop-blur  size-8"
                variant="b1">
                <icon
                  name="x"
                  class="size-4" />
              </Button>
              <Button
                variant="b1"
                size="sm"
                class="opacity-0 h-8 transition-all duration-300 group-hover:opacity-70 hover:opacity-100 bg-b1/90 backdrop-blur hover:underline  pr-2.5 font-medium pl-3 btn-sm text-2  "
                @click="navigateTo(`/champions/${champion}`)">
                {{ ix().champNameByKey(champion) }}
              </Button>
            </div>
          </Card>
        </AspectRatio>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class=" self-center border-0 bg-b1/90 backdrop-blur left-1 rounded-lg w-8 h-12" />
    <CarouselNext class="self-center border-0 bg-b1/90 backdrop-blur -right-3 rounded-lg w-8 h-12" />
  </Carousel>
</template>
