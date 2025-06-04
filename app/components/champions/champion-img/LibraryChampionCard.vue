<script setup lang="ts">
const { class: className, champKey,
}
  = defineProps<{
    class?: HTMLAttributes['class']
    champKey?: string
  }>()
const emit = defineEmits(['loaded'])
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
const ix = useIndexStore()
const formatName = (n: string) => nameHyphenMap[n] ?? n

const loaded = ref(false)

watchEffect(() => {
  if (loaded.value)
    emit('loaded', loaded.value)
})
</script>

<template>
  <div
    as="div" :class="cn('grid place-items-center parallax relative cursor-pointer  rounded-xl size-full **:select-none  group relative', { '': loaded }, className)">
    <ChampionLoadScreen
      :quality="60"
      :champ-key="champKey"
      type="load"
      @loaded="loaded = true"
      class=" !rounded-xl *:rounded-xl"/>
    <label
      v-show="champKey"
      class="absolute inset-0 rounded-xl hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden *:not-first-line:!indent-8 opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 py-4 px-3.5 grid justify-start text-12 break-all hyphens-manual tracking-tighter font-bold leading-none text-wrap items-end whitespace-break-spaces">
      {{ formatName(ix.champNameByKey(champKey)) }}

    </label>
    <!--
    <Skeleton v-else class=" z-0 top-0 left-0 rounded-xl absolute inset-0 opacity-90" :class="{ 'animate-out fade-out duration-600 ': loaded }" /> -->

    <div v-show="loaded" class="size-full absolute top-0 left-0 !shadow-sm drop-shadow-sm  border-b4 border animate-in fade-in duration-500 rounded-xl" />
  </div>
</template>

<style scoped></style>
