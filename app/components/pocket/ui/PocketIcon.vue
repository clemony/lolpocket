<script setup lang="ts">
const {
  class: className,
  img,
  size,
  transparent,
} = defineProps<{
  img?: string
  class?: HTMLAttributes['class']
  imgClass?: HTMLAttributes['class']
  size?: string | number
  transparent?: boolean
}>()
const loaded = ref(false)
</script>

<template>
  <label
    :class="
      cn(
        ' size-full relative text-nc overflow-hidden bg-neutral shrink-0 grid place-items-center',
        {
          'shadow-sm shadow-black/6 drop-shadow-sm drop-shadow-black/6':
            !transparent || (transparent && !img),
        },
        className,
      )
    ">
    <Img
      v-if=" img"
      :img="img"
      alt="pocket icon"
      :class="
        cn(
          ' pointer-events-none  size-full z-2 scale-160 mt-1.5 shrink-0 size-full absolute object-center opacity-0 transition-opacity duration-300',
          { 'opacity-100': loaded },
          imgClass,
        )
      "
      @load="loaded = true" />

    <icon
      v-if="!loaded && img"
      name="svg-spinners:bars-scale-middle"
      class="absolute opacity-80 text-nc" />

    <span
      v-else
      :class="
        cn(
          'uppercase subpixel-antialiased text-nc z-0 absolute grid place-items-center size-full font-semibold text-4 ',
          { '!text-[0.74rem] mt-px font-semibold': size && size === 'sm' },
        )
      ">
      LP
    </span>
    <slot />
  </label>
</template>

<style scoped></style>
