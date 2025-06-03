<script setup lang="ts">
const { class: className, champKey,
}
  = defineProps<{
    class?: HTMLAttributes['class']
    champKey?: string
  }>()
const nameHyphenMap: Record<string, string> = {
  'Aurelion Sol': 'Aurelion\n Sol',
  'Ambessa': 'Am-\n bessa',
  'Blitzcrank': 'Blitz-\n crank',
  'Cassiopeia': 'Cass-\n iopeia',
  'Dr. Mundo': 'Dr.\n Mundo',
  'Fiddlesticks': 'Fiddle-\n sticks',
  'Gangplank': 'Gang-\n plank',
  'Heimerdinger': 'Heimer-\n dinger',
  'Jarvan IV': 'Jarvan\n IV',
  'Kassadin': 'Kass-\n adin',
  'Lissandra': 'Liss-\n andra',
  'Mordekaiser': 'Morde-\n kaiser',
  'Malzahar': 'Mal-\n zahar',
  'Miss Fortune': 'Miss\n Fortune',
  'Master Yi': 'Master\n Yi',
  'Nocturne': 'Noc-\n turne',
  'Pantheon': 'Pan-\n theon',
  'Renata Glasc': 'Renata\n Glasc',
  'Renekton': 'Ren-\n ekton',
  'Seraphine': 'Sera-\n phine',
  'Tahm Kench': 'Tahm\n kench',
  'Tryndamere': 'Tryn-\n damere',

}

const formatName = (n: string) => nameHyphenMap[n] ?? n

const loaded = ref(false)
</script>

<template>
  <div
    class="" :class="cn('grid place-items-center overflow-hidden  relative cursor-pointer  rounded-xl  size-full **:select-none  group relative', { 'shadow-sm drop-shadow-sm border-b3 border': loaded }, className)">
    <div class="size-full rounded-lg ">
      <ChampionSplash
        v-model:loaded="loaded"
        :quality="60"
        :champ-key="champKey"
        type="load"
        :style="{
          width: '190%',
          height: '190%',
          objectPosition: '50% -1.8rem',
        }"
        @load="loaded = true" @loaded="loaded = true" />
      <slot />
      <label
        v-if="loaded"
        class="absolute inset-0 rounded-lg hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden *:not-first-line:!indent-8 opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 py-4 px-3.5 grid justify-start text-12 break-all hyphens-manual tracking-tighter font-bold leading-none text-wrap items-end whitespace-break-spaces">  <slot />
        {{ formatName(ix.champNameByKey(champKey)) }}

      </label>
    </div>
  </div>
</template>

<style scoped></style>
