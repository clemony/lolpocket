<script lang="ts" setup>
import { motion } from 'motion-v'

const { championKey } = defineProps<{
  championKey: string
}>()

const ix = useIndexStore()
const { data: championData, pending } = useChampionDetails(computed (() => championKey))

const champion = computed (() => championData.value)

watch(
  () => championData.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
    console.log('💠 - champion:', champion)
  },
)

const selected = ref('P')
const tab = ref()

watch(
  () => selected.value,
  (newVal) => {
    if (newVal)
      console.log(champion.value.abilities[selected.value][0])
  },
)
</script>

<template>
  <motion.div :variants="visibilityWrapper" class="relative flex flex-col gap-6   w-full">
    <AnimatePresence as="div" class="overflow-hidden rounded-xl   h-50 w-full drop-shadow-sm relative inset-shadow-sm bg-b2/30" :class="{ 'shadow-warm ': !champion }">
      <motion.div v-if="champion" :variants="fadeVariant" initial="hidden" exit="hidden" animate="visible" layout-id="splash" class="size-full  ">
        <ChampionSplash bg-position="top" :url="getSplash(ix.centeredByKey(championKey))" :name="champion?.name" class="z-1 size-full  scale-180  " />
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

    <motion.div v-if="pending" class="h-14 flex gap-2" :variants="fadeVariant" initial="visible" exit="hidden" animate="hidden">
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
  </motion.div>

  <Skeleton v-if="pending" class=" h-10 w-full" />
  <div v-else-if="champion" class="w-full mt-8">
    <AbilityData v-if="selected" :ability="champion?.abilities[selected][0]" :index="selected[0]" />

    <ChampionBio v-else-if="selected == null && tab == 'bio'" :champion="champion" />
    <ChampionBasicData v-else-if="selected == null && tab == 'stats'" :champion="champion" />
  </div>
</template>