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
        'bg-neutral text-nc relative grid size-full shrink-0 place-items-center overflow-hidden',
        {
          'shadow-sm shadow-black/6 drop-shadow-sm drop-shadow-black/6':
            !transparent || (transparent && !img),
        },
        className,
      )
    "
  >
    <Img
      v-if="img"
      :src="img"
      alt="pocket icon"
      :class="
        cn(
          'pointer-events-none absolute z-2 mt-1.5 size-full shrink-0 scale-160 object-center opacity-0 transition-opacity duration-300',
          { 'opacity-100': loaded },
          imgClass,
        )
      "
      @load="loaded = true"
    />

    <icon
      v-if="!loaded && img"
      class="text-nc absolute opacity-80"
      name="svg-spinners:bars-scale-middle"
    />

    <span
      v-else
      :class="
        cn(
          'text-nc absolute z-0 grid size-full place-items-center text-lg font-semibold uppercase subpixel-antialiased',
          { 'mt-px text-[0.74rem]! font-semibold': size && size === 'sm' },
        )
      "
    >
      LP
    </span>
    <slot />
  </label>
</template>

<style scoped></style>
