<script setup lang="ts">
const { img, class: className, champKey, scale, translate } = defineProps<{
  champKey?: string
  img: string
  scale?: string
  translate?: string
  type?: SplashType
  class?: HTMLAttributes['class']
}>()

const lower = ['Seraphine', 'Sett', 'Illaoi', 'Irelia', 'Yuumi', 'Senna', 'Taric', 'Mordekaiser', 'Darius', 'Ryze', 'Sona']
const mid = ['Fiora', 'Fizz', 'Lilia', 'Nami', 'DrMundo']
const left = ['Ivern', 'Riven', 'Ryze', 'Hwei', '', '']
const out = ['Yuumi', 'KogMaw', 'Mordekaiser', 'TahmKench', 'Zac', 'Kindred', 'Yorick', 'Zed', 'Alistar', 'Xayah', 'Malzahar', 'Anivia', 'Aatrox', 'Evelynn', 'Fiddlesticks', 'Ivern', 'Yone']

const y = computed (() => lower.includes(champKey) ? `40%` : mid.includes(champKey) ? '20%' : '40%')

const x = computed (() => left.includes(champKey) ? '70%' : '50%')

const bgSize = computed (() => scale || out.includes(champKey) ? '160%' : '180%')
</script>

<template>
  <div
    class="size-full"
    :class="cn('grid place-items-center shrink-0 overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg  size-full **:select-none  group relative', className)">
    <Img
      :img="img"
      class="object-center"
      :style="{
        scale: bgSize,
        transform: `translate(${translate})`,
        objectPosition: `${x} ${y}`,
      }"
      :alt="`${champKey}-Splash`">
    </Img>
    <slot />
  </div>
</template>

<style scoped></style>
