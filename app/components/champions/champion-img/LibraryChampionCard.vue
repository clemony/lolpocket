<script setup lang="ts">
const { url,  bgSize = '150%', class: className, name, objectPosition = 'center',
}
  = defineProps<{
    url: string
    class?: HTMLAttributes['class']
    name?: string
    text?: boolean
    bgSize?: string
    objectPosition?: string
  }>()

  const nameHyphenMap: Record<string, string> = {
  'Ambessa': 'Am-\nbessa',
  'Blitzcrank': 'Blitz-\ncrank',
  'Cassiopeia': 'Cass-\niopeia',
  'Dr. Mundo': 'Dr.\nMundo',
  'Fiddlesticks': 'Fiddle-\nsticks',
  'Gangplank': 'Gang-\nplank',
  'Heimerdinger': 'Heimer-\ndinger',
  'Jarvan IV': 'Jarvan\nIV',
  'Kassadin': 'Kass-\nadin',
  'Lissandra': 'Liss-\nandra',
  'Mordekaiser': 'Morde-\nkaiser',
  'Malzahar': 'Mal-\nzahar',
  'Miss Fortune': 'Miss\nFortune',
  'Master Yi': 'Master\nYi',
  'Nocturne': 'Noc-\nturne',
  'Pantheon': 'Pan-\ntheon',
  'Renata Glasc': 'Renata\nGlasc',
  'Renekton': 'Ren-\nekton',
  'Seraphine': 'Sera-\nphine',
  'Tahm Kench': 'Tahm\nkench',
  'Tryndamere': 'Tryn-\ndamere',
}

const formatName = (n: string) => nameHyphenMap[n] ?? n

const loaded = ref(false)
</script>

<template>
  <div
    class="" :class="cn('grid place-items-center overflow-hidden  relative cursor-pointer  rounded-xl  size-full **:select-none  group relative', { 'shadow-sm drop-shadow-sm border-b3 border': loaded }, className)">
  
    <div class="size-full rounded-lg ">
      <Img
        :img="url"
        alt="champion image"
        class="absolute  object-cover rounded-lg object-center"
        loaded-class="  "
        :style="{
          width: '190%',
          height: '190%',
          objectPosition: '50% -1.8rem',
        }"  @loaded="loaded = true"/>
      <slot />
      <label
        v-if="loaded"
        class="absolute inset-0 rounded-lg hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 p-4 text-12 break-all hyphens-manual tracking-tighter font-bold flex flex-wrap leading-none text-balanced items-end whitespace-break-spaces">  <slot  />
        {{ formatName(name) }}
      </label>
    </div>
  </div>
</template>

<style scoped></style>
