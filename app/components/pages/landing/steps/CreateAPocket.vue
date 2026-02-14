<script lang="ts" setup>
import type { MotionValue } from "motion-v"
import type { CSSProperties } from "vue"

const { scrollProg } = defineProps<{
  scrollProg: MotionValue
}>()
const target = useTemplateRef<HTMLElement>("target")

const parallax = reactive(useParallax(target))

const layerBase: CSSProperties = {
  // layer4

  transition: ".3s ease-out all",
}
const containerStyle: CSSProperties = {
  perspective: "300px",
}

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 5
  }px)`,
}))

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 10
  }px)`,
}))

const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 15
  }px)`,
}))

const layer4 = layerBase

const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}))
</script>

<template>
  <div
    ref="target"
    class="relative size-full rounded-lg"
    :style="containerStyle">
    <div class="absolute size-full" :style="layer0">
      <div
        class="absolute top-2 right-10 z-0 flex h-[95%] w-[45%] rounded-xl bg-p0/90 px-8 pt-7 shadow-md shadow-black/5"
        :style="containerStyle">
        <div
          class="grid h-fit w-full grid-cols-1 justify-start justify-items-start gap-3">
          <p class="dst font-medium tracking-tight">
            New Pocket
          </p>

          <div
            class="h-6 w-32 rounded-sm border border-p3 bg-p0 shadow-sm inset-shadow-xs shadow-black/8"
            :style="layer0" />

          <p class="text-xs">
            Search Tags
          </p>

          <div
            class="grid h-fit w-full grid-flow-row grid-cols-2 grid-rows-2 gap-y-5"
            :style="layer0">
            <div
              class="z-10 badge bg-p0 badge-md text-md shadow-md ring shadow-black/10 ring-p3">
              #&#x202F;jungle
            </div>

            <div
              class="z-10 badge bg-p0 badge-md text-md shadow-md ring shadow-black/10 ring-p3">
              #&#x202F;support
            </div>

            <div
              class="z-10 badge bg-p0 badge-md text-md shadow-md ring shadow-black/10 ring-p3">
              #&#x202F;marksman
            </div>
          </div>

          <div
            class="mt-2 grid w-full grid-flow-row grid-cols-3 place-items-center"
            :style="layer1">
            <div
              v-for="index in 3"
              :key="index"
              class="btn aspect-square rounded-md border-p3 bg-p2 shadow-md shadow-black/10 btn-lg" />
          </div>

          <div
            class="absolute right-5 bottom-6 z-10 badge badge-neutral bg-neutral badge-md text-md shadow-pretty ring shadow-black/10 ring-p3">
            Create
          </div>
        </div>
      </div>

      <div
        class="align-end absolute top-23 left-9 flex h-10 w-54 items-center justify-between rounded-lg border border-p3 bg-p0 px-3 shadow-pretty shadow-p3/70 select-none"
        :style="layerBase">
        <span class="dst">Pocket Name</span>

        <div
          class="btn pointer-events-none aspect-square px-0.5 shadow-sm btn-xs">
          <icon class="dst size-5" name="tick-sm" />
        </div>
      </div>

      <i-arrow-3
        class="absolute top-32 left-34 size-30 drop-shadow-md!"
        :style="layerBase" />
      <!--     <PocketIcon image="/img/champion-centered/Sona_56.webp" class="size-34  left-22 bottom-6 absolute !shadow-md shadow-black/70" :style="layer1" />
   <icon name="teenyicons:chat-solid" class="text-p0 bottom-34 left-6   size-22 absolute z-0  drop-shadow-[10_15px_15px_#00000090]" :style="layerBase"/>

        <div class=" tracking-tight absolute text-md  bottom-38 left-10   ds-2xs z-10 font-medium text-center"  :style="layerBase">
          Choose<br />Icon
          </div> -->
    </div>
  </div>
</template>
