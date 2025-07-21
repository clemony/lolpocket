<script setup lang="ts">
const { img, class: className, champKey} = defineProps<{
    champKey?: string
    img: string
    type?: SplashType
    class?: HTMLAttributes['class']
  }>()

const lower = ['Seraphine', 'Sett', 'Illaoi', 'Irelia', 'Yuumi', 'Senna', 'Taric', 'Mordekaiser', 'Darius', 'Ryze']
const mid = ['Fiora', 'Fizz', 'Lilia', 'Nami', 'DrMundo']
const left = ['Ivern', 'Riven', 'Ryze', 'Hwei', '', '']
const out = ['Yuumi', 'KogMaw', 'Mordekaiser', 'TahmKench', 'Zac', 'Kindred', 'Yorick', 'Zed', 'Alistar', 'Xayah', 'Malzahar', 'Anivia', 'Aatrox', 'Evelynn', 'Fiddlesticks', 'Ivern', 'Yone']

const y = computed (() => lower.includes(champKey) ? `10%` : mid.includes(champKey) ? '20%' : '40%')

const x = computed (() => left.includes(champKey) ? '70%' : '50%')

const bgSize = computed (() => out.includes(champKey) ? '160%' : '180%')
</script>

<template>
  <div class="size-full" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg  size-full **:select-none  group relative', className)">
    <Img
      :img="img"
      class="object-center"
      :style="{
        scale: bgSize,
      objectPosition: `${x} ${y}`,
      }"
      :alt="`${champKey}-Splash`">
      <slot />
    </Img>
  </div>
</template>

<style scoped></style>
