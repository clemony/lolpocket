<script setup lang="ts">
const {
  id,
  class: className,
  k,
  ratio,
  src,
  type,
} = defineProps<{
  k?: string
  id?: number
  ratio?: number
  src?: string
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
  lower.includes(k) ? `30%` : mid.includes(k) ? '20%' : '40%',
)
/* , {'translate-y-10': } */
const x = computed(() => (left.includes(k) ? '70%' : '50%'))
</script>

<template>
  <Img
    :src="src || getSplash(k ?? id, type)"
    :ratio

    :class="
      cn('overflow-hidden rounded-lg object-cover shadow-sm drop-shadow-sm select-none',
         className,
      )
    "
    :alt="`${k}-Splash`" />
</template>
