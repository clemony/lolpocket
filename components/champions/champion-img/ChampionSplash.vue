<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{

    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
    text?: boolean
    bgSize?: string
  }>(),
  {
    bgSize: '360%',
  },
)
const cs = useChampStore()

const champion = computed (() => {
  return props.champion
})

const adjust = computed (() => {
  if (champion.value.name != 'Sona') {
    return {
      size: props.bgSize,
      pos: 'center top 20%',
    }
  }
  const a = props.bgSize.replace('%', '')
  const b = useToNumber(a)
  return {
    size: `${(b.value * 1.30).toString()}%`,
    pos: '55% 14%',
  }
})
</script>

<template>
  <div
    :key="champion.id"
    class="" :class="cn('shadow-sm  min-h-64  cursor-pointer  rounded-lg  **:select-none inset-shadow-[0px_0px_10px_4px_#00000040] group ', props.class)"
    :style="{
      background: `url(/img/champion-centered/${champion.id}_0.webp)`,
      backgroundSize: adjust.size,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: adjust.pos,
    }">
    <slot />
    <div
      v-if="props.text"
      class="absolute inset-0 rounded-lg hover:ring-offset-2  hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 p-4 text-12 break-all hyphens-manual tracking-tighter font-bold flex flex-wrap leading-none text-balanced items-end whitespace-break-spaces">
      {{
        champion.name
          .replace('Ambessa', 'Am-\nbessa')
          .replace('Blitzcrank', 'Blitz-\ncrank')
          .replace('Cassiopeia', 'Cass-\niopeia')
          .replace('Dr. Mundo', 'Dr.\nMundo')
          .replace('Fiddlesticks', 'Fiddle-\nsticks')
          .replace('Gangplank', 'Gang-\nplank')
          .replace('Heimerdinger', 'Heimer-\ndinger')
          .replace('Jarvan IV', 'Jarvan\nIV')
          .replace('Kassadin', 'Kass-\nadin')
          .replace('Lissandra', 'Liss-\nandra')
          .replace('Mordekaiser', 'Morde-\nkaiser')
          .replace('Malzahar', 'Mal-\nzahar')
          .replace('Miss Fortune', 'Miss\nFortune')
          .replace('Master Yi', 'Master\nYi')
          .replace('Nocturne', 'Noc-\nturne')
          .replace('Pantheon', 'Pan-\ntheon')
          .replace('Renata Glasc', 'Renata\nGlasc')
          .replace('Renekton', 'Ren-\nekton')
          .replace('Seraphine', 'Sera-\nphine')
          .replace('Tahm Kench', 'Tahm\nkench')
          .replace('Tryndamere', 'Tryn-\ndamere')
      }}
    </div>
  </div>
</template>

<style scoped></style>
