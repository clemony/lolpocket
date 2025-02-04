<!-- eslint-disable vue/no-irregular-whitespace -->
<script lang="ts" setup>
import type { CSSProperties } from 'vue'



const target = ref(null)

const parallax = reactive(useParallax(target))


const layerBase: CSSProperties = { // layer4

  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  perspective: '300px',
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
  <div ref="target" class="bg-b2/40 shadow-smooth mt-10 h-90 w-full rounded-lg relative  transition-all ease-out duration-300" :style="containerStyle"  >
    <div class="size-full absolute"  :style="layer0" >
      <div class="bg-b1/90 h-[95%] w-[45%] rounded-xl shadow-md shadow-black/10 right-10 top-2 absolute z-0  flex pt-7 px-8"
      :style="containerStyle">

        <div class="grid grid-cols-1 h-fit w-full justify-start justify-items-start gap-3"
        >
          <p class="font-medium tracking-tight dst">
            New Pocket
          </p>

          <div class="h-6 w-32 border border-b3 rounded-sm inset-shadow-xs shadow-sm bg-b1 shadow-black/8"  :style="layer0"/>

          <p class="text-1">
            Search Tags
          </p>
          <div class="grid grid-cols-2 w-full h-fit grid-flow-row grid-rows-2 gap-y-5"  :style="layer0">
            <div class="badge badge-md z-10 bg-b1 text-3 shadow-md shadow-black/10 ring ring-b3">
              # jungle
            </div>
            <div class="badge badge-md z-10 bg-b1 text-3 shadow-md shadow-black/10 ring ring-b3">
              # support
            </div>
            <div class="badge badge-md z-10 bg-b1 text-3 shadow-md shadow-black/10 ring ring-b3">
              # marksman
            </div>
          </div>

          <div class="grid grid-cols-3 grid-flow-row w-full place-items-center mt-2"  :style="layer1">
            <div v-for="index in 3" :key="index" class="bg-b2 border-b3 btn btn-lg aspect-square rounded-md shadow-md shadow-black/10" />
          </div>

          <div class="badge badge-md badge-neutral absolute bottom-6 right-5 bg-neutral z-10 bg-b1 text-3 shadow-pretty shadow-black/10 ring ring-b3">
            Create
          </div>
        </div>
      </div>

      <div class="h-10 absolute bg-b1 border-b3 shadow-pretty shadow-b3/70 border rounded-lg flex px-3 items-center w-54 justify-between select-none top-23 left-9 align-end"
      :style="layerBase">
        <span class="dst">Pocket Name</span>
        <div class="btn pointer-events-none btn-xs shadow-sm px-0.5 aspect-square">
          <icon name="tick-sm" class="size-5 dst" />
        </div>
      </div>


      <i-arrow-3 class="size-30 absolute top-32  left-34 !drop-shadow-md "  :style="layerBase" />
    <!--     <PocketIcon image="/img/champion/centered/Sona_56.jpg" class="size-34  left-22 bottom-6 absolute !shadow-md shadow-black/70" :style="layer1" />
   <icon name="teenyicons:chat-solid" class="text-b1 bottom-34 left-6   size-22 absolute z-0  drop-shadow-[10_15px_15px_#00000090]" :style="layerBase"/>


        <div class=" tracking-tight absolute text-3  bottom-38 left-10   dst z-10 font-medium text-center"  :style="layerBase">
          Choose<br />Icon
          </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>