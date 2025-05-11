<script setup lang="ts">

const {name, url, class: className} = defineProps<{
  name: string
  url: string
  class?: HTMLAttributes['class']
}>()
/*
      v-tippy="{content: `${champion.name}`, hideOnClick: true,   delay: [100, 0]}" */

const trigger = ref(null)
const isHovered = useElementHover(trigger)

const lower = ['Seraphine', 'Sett', 'Illaoi', 'Irelia', 'Yuumi', 'Senna', 'Taric',  'Mordekaiser', 'Darius', 'Ryze']
const mid = [ 'Fiora', 'Fizz', 'Lilia', 'Nami', 'DrMundo']
const left = ['Ivern','Riven','Ryze','Hwei','','',]
const out = ['Yuumi', 'KogMaw', 'Mordekaiser', 'TahmKench', 'Zac', 'Kindred', 'Yorick', 'Zed', 'Alistar', 'Xayah', 'Malzahar', 'Anivia', 'Aatrox', 'Evelynn', 'Fiddlesticks', 'Ivern', 'Yone']

const y = computed (() => lower.includes(name) ? `10%` : mid.includes(name) ? '20%' : '40%')

const x= computed (() => left.includes(name) ? '70%' : '50%')

const bgSize = computed (() => out.includes(name) ? '160%' :  '180%')
</script>

<template>
  <label ref="trigger"
    :class=" cn('size-full grid aspect-square overflow-hidden rounded-lg shadow-sm drop-shadow-sm',className)">
      <slot />
        <ChampionSplash
           :url="url"
        class="size-full relative z-0" :bg-size="bgSize" :bg-position="`${x} ${y}`" >

      <PrismaticShine v-if=" isHovered"  class="absolute size-full  scale-107 top-0 left-0 z-1" />
  </ChampionSplash>
  </label>
</template>

<style scoped></style>
