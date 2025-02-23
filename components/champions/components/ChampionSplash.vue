<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  champion: Champion
  pocket?: pocket
  class?: HTMLAttributes['class']
}>()
const ts = useTempStore()
/// console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
  <label
    :key="champion.id"
    class="shadow-sm ring-b2 h-[195px] w-[170px] hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border border-b3 ring-1 **:select-none hover:ring-offset-2 inset-shadow-[0px_0px_10px_4px_#00000040] group"
    :style="{
      background: `url(/img/champion/centered/${champion.apiname.replace('Fiddlesticks', 'FiddleSticks')}_0.jpg)`,
      backgroundSize: '360%',
      backgroundRepeat: 'none',
      backgroundPosition: 'center top 20%',
    }"
  >
    <input
      type="checkbox"
      class="hidden"
    />

    <div
      class="size-full max-w-full overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 p-4 text-10 break-all hyphens-manual tracking-tighter font-bold flex flex-wrap leading-none text-balanced items-end whitespace-break-spaces"
    >
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
  </label>
</template>

<style scoped></style>
