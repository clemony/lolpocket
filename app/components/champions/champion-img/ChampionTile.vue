<script setup lang="ts">
const { url, text, bgSize = '250%', class: className, name, top = '-25%', objectPosition = 'center',
}
  = defineProps<{
    url: string
    class?: HTMLAttributes['class']
    name?: string
    text?: boolean
    bgSize?: string
    top?: string
    objectPosition?: string
  }>()

const loaded = ref(false)
</script>

<template>
  <div
    class="" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer  rounded-lg  size-full **:select-none  group relative', { 'inset-shadow-[0px_0px_10px_4px_#00000040]': loaded }, className)">
    <div class="size-full rounded-lg overflow-hidden">
      <Image
        :image="url.replace('centered', 'tile')"
        alt="champion image"
        class="absolute  object-cover rounded-lg object-center"
        :style="{
          width: bgSize,
          height: bgSize,
          top,
          objectPosition,
        }" preload />
      <slot />
      <div
        v-if="text && loaded"
        class="absolute inset-0 rounded-lg hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 p-4 text-12 break-all hyphens-manual tracking-tighter font-bold flex flex-wrap leading-none text-balanced items-end whitespace-break-spaces">
        {{ formatName(name) }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
