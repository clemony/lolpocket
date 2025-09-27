<script setup lang="ts">
const {
  id,
  class: className,
  img,
  k,
  type,
} = defineProps<{
  k?: string
  id?: number
  img?: string
  type?: SplashType
  class?: HTMLAttributes['class']
}>()

const lower = [
  'Seraphine',
  'Sett',
  'Illaoi',
  'Irelia',
  'Yuumi',
  'Senna',
  'Taric',
  'Morgana',
  'Mordekaiser',
  'Darius',
  'Ryze',
]
const mid = ['Fiora', 'Fizz', 'Lilia', 'Nami', 'DrMundo']
const left = ['Ivern', 'Riven', 'Ryze', 'Hwei', '', '']
const out = [
  'Yuumi',
  'KogMaw',
  'Mordekaiser',
  'TahmKench',
  'Zac',
  'Kindred',
  'Yorick',
  'Zed',
  'Alistar',
  'Xayah',
  'Malzahar',
  'Anivia',
  'Aatrox',
  'Evelynn',
  'Fiddlesticks',
  'Ivern',
  'Yone',
]

const y = computed(() =>
  lower.includes(k)
    ? `30%`
    : mid.includes(k)
      ? '20%'
      : '40%'
)
/* , {'translate-y-10': } */
const x = computed(() => (left.includes(k) ? '70%' : '50%'))

const image = useImage()
const splash = computed (() => `url('${image(getSplash(k ?? id, type))}')`)
console.log('🌱 - splash:', splash)
</script>

<template>
  <div
    :class="
      cn(
        'size-full grid place-items-center shrink-0 overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg bg-cover size-full **:select-none  group relative',
        className)"
    :style="{
      /*       'background': splash,
      'background-position-y': y, */

    }">
    <Img
      :img="img || getSplash(k ?? id, type)"
      :class="cn('object-cover shrink-0  !aspect-video  size-full')"
      :style="{
        transform: `()`,
      }"
      :alt="`${k}-Splash`" />
    <slot />
  </div>
</template>

<style scoped></style>
