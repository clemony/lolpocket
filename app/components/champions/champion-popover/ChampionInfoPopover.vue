<script lang="ts" setup>
const { championKey } = defineProps<{
  championKey: string
}>()

const { data } = await useFetch(`/api/champions/${championKey}.json`)

const champion = computed (() => data.value as Champion)
const selected = ref('P')

watch(
  () => selected.value,
  (newVal) => {
    if (newVal)
      console.log(champion.value.abilities[selected.value][0])
  },
)
</script>

<template>
  <Dialog>
    <DialogTrigger class="size-full shadow-sm ">
      <ChampionSplash bg-size="250%" :url="champion.splash" :name="champion.name" text class="min-h-64" />
    </DialogTrigger>
    <LazyMotionDialogContent :delay="0" class=" h-200 backdrop-blur-lg bg-b1/94  min-w-300 w-300 flex z-1000 py-9 px-8 flex gap-8">
      <div class="relative flex flex-col gap-6 h-full h-140 w-100">
        <ChampionSplash bg-size="150%" object-position="50% 4rem" :url="champion.splash" :name="champion.name" class=" h-140 w-100 size-full shadow-sm drop-shadow-sm relative after:absolute z-0  after:rounded-lg after:top-0 after:left-0 after:z-1 after:size-full after:mask-edges  after:bg-[#00000050] overflow-hidden  ">
          <DialogHeader class="absolute bottom-4 *:text-right right-5 *:text-light/80 drop-shadow-sm *:dst *:text-shadow-sm w-full">
            <Grow />
            <DialogTitle class="text-11  font-bold tracking-tight">
              {{ champion.name }}
            </DialogTitle>
            <DialogDescription class="text-3 tracking-tight font-medium uppercase ">
              {{ champion.title }}
            </DialogDescription>
          </DialogHeader>
        </ChampionSplash>

        <LazyChampionAbilities v-if="champion && champion.abilities" v-model:model-value="selected" :abilities="champion.abilities" @update:ability="e => selected = e" />
<div class="grid gap-3 w-full">
        <button class="btn focus:outline-0 !border-b3 hover:!bg-b3/60 !font-medium brightness-95 inline-flex justify-between *:align-bottom" @click="selected = null">
          <icon name="lets-icons:user-fill" class="shrink-0 size-5 opacity-75" />
          Bio
        </button>

        <button class="btn focus:outline-0 !border-b3 hover:!bg-b3/65 !font-medium brightness-95 inline-flex justify-between *:align-bottom" @click="selected = null">
          <icon name="ri:bar-chart-fill" class="ml-px size-4.5" />
          Stats
        </button>
        </div>
      </div>
      <div class="w-full">
        <AbilityData v-if="selected" :ability="champion.abilities[selected][0]" :index="selected[0]" />

        <ChampionBasicData v-else :stats="champion.stats" />
      </div>
    </LazyMotionDialogContent>
  </Dialog>
</template>