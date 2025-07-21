<script setup lang="ts">
const { class: className, url, size, transparent, img } = defineProps<{
  url?: string
  img?: string
  class?: HTMLAttributes['class']
  imgClass?: HTMLAttributes['class']
  size?: string | number
  transparent?: boolean
}>()
const loaded = ref(false)
</script>

<template>
  <label :class="cn(' size-full overflow-hidden  shrink-0 grid place-items-center', { 'shadow-sm drop-shadow-sm': !transparent || (transparent && !url) }, className)">

    <Img v-if="url || img" :img="url || img" alt="pocket icon"  :class="cn(' pointer-events-none  size-full  scale-160 mt-1.5 shrink-0 size-full absolute object-center opacity-0 transition-opacity duration-300', {'opacity-100': loaded}, imgClass)" @load="loaded = true"/>

<icon v-if="!loaded" name="svg-spinners:3-dots-fade" class="absolute opacity-80" />



    <NuxtImg v-else-if="size && size == 'sm'" src="/img/lp/29-2x-solid.png" class="size-full aspect-square scale-110" />

    <div v-else-if="transparent" class="grid place-items-center size-full font-semibold text-4 dst">
      LP
    </div>




      <NuxtImg   v-else class="size-full object-cover object-center place-self-center" src="img/lp/192.webp" />
  <slot>   </slot>

  </label>
</template>

<style scoped></style>
