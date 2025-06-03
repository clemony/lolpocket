<script lang="ts" setup>
import { motion } from 'motion-v'

const { championKey } = defineProps<{
  championKey: string
}>()

const ix = useIndexStore()
const { data: championData, pending } = useChampionDetails(computed (() => championKey))

const champion = computed (() => championData.value)

const loaded = ref(false)
const selected = ref('P')

watch(
  () => championData.value,
  (newVal) => {
    if (newVal)
      selected.value = 'P'
    loaded.value = false
  },
  { deep: true },
)

const tab = ref()

const colorVar = computed(() => getColorByChampionKey(championKey))
console.log('💠 - colorVar:', colorVar)
</script>

<template>
  <motion.div :variants="visibilityWrapper" class="relative flex flex-col gap-6   w-full">
    <AnimatePresence as="div" class="overflow-hidden rounded-t-xl   h-50 w-full drop-shadow-sm relative inset-shadow-sm bg-b2/30 " :class="{ 'shadow-warm': !champion }">
      <motion.div v-if="champion && loaded" :variants="fadeVariant" animate="visible" layout-id="splash" class="size-full  ">
        <ChampionSplash :key="champion.key" v-model:loaded="loaded" :champ-key="champion.key" bg-position="top" :name="champion?.name" type="centered" class="z-1 size-full  scale-180  " @loaded="loaded = true" />
        <header class="absolute bottom-4 *:text-right right-5 *:text-white/80 drop-shadow-sm z-2 *:dst *:text-shadow-sm w-full">
          <Grow />
          <h1 class="text-11  font-bold tracking-tight">
            {{ champion?.name }}
          </h1>
          <p class="text-3 tracking-tight font-medium uppercase ">
            {{ champion?.title }}
          </p>
        </header>
      </motion.div>
      <Skeleton v-else class=" h-50 z-0 w-full opacity-60" as-child>
        <motion.div :variants="fadeVariant" initial="visible" exit="hidden" animate="hidden" layout-id="splash" />
      </Skeleton>
    </AnimatePresence>
    <Separator class="absolute bg-b4 opacity-0 w-full z-3 top-50" :class="{ 'opacity-100': loaded }" />
    <div class="px-4">
      <motion.div v-if="pending" class="h-14 flex gap-2 " :variants="fadeVariant" initial="visible" exit="hidden" animate="hidden">
        <Skeleton v-for="i in 5" :key="i" class=" size-14 aspect-square " />
      </motion.div>
      <motion.div v-else-if="champion && champion?.abilities" class="flex flex-nowrap gap-3 w-full items-center" :variants="fadeVariant" initial="hidden" exit="hidden" animate="visible">
        <LazyChampionAbilityTabs v-model:model-value="selected" :abilities="champion?.abilities" @update:ability="e => selected = e" />
        <div class="grid *:text-3   w-46">
          <label class="btn btn-sm btn-ghost justify-between !font-medium gap-2" @click="selected = null">
            <icon name="lets-icons:user-fill" class="shrink-0 size-4 opacity-75" />
            Bio
            <input v-model="tab" type="radio" value="bio" class="peer hidden" />
          </label>

          <label class="btn btn-sm btn-ghost  justify-between !font-medium gap-2" @click="selected = null">
            <icon name="ri:bar-chart-fill" class="ml-px size-4" />
            Stats
            <input v-model="tab" type="radio" value="stats" class="peer hidden" />
          </label>
        </div>
      </motion.div>
    </div>
    <div v-if="pending" class=" h-10 size-full grid place-items-center">
      <icon name="svg-spinners:3-dots-fade" />
    </div>
    <transition-slide v-else-if="champion" group class="w-full ">
      <motion.div>
        <AbilityData v-if="selected" :ability="champion?.abilities[selected][0]" :index="selected[0]" :color="colorVar" />

        <ChampionBio v-else-if="selected == null && tab == 'bio'" :champion="champion" />
        <ChampionBasicData v-else-if="selected == null && tab == 'stats'" :champion="champion" />
      </motion.div>
    </transition-slide>
  </motion.div>
</template>