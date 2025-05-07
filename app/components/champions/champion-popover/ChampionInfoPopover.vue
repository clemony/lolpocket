<script lang="ts" setup>
const { championKey } = defineProps<{
  championKey: string
}>()

const { data } = await useFetch(`/api/champions/${championKey}.json`)

const champion = computed (() => data.value as Champion)
const selectedAbility = ref()
</script>

<template>
    <Dialog >
      <DialogTrigger class="size-full shadow-sm ">

          <ChampionSplash  bg-size="250%"  :url="champion.splash" :name="champion.name" text class="min-h-64"/>
      </DialogTrigger>
  <LazyMotionDialogContent :delay="0"  class=" h-1/2 backdrop-blur-lg bg-b1/85 !max-w-1/2  flex z-1000 py-9 pl-8 pr-12 flex gap-8">

      <div class="relative flex flex-col gap-6 h-full h-140 w-100">
        <ChampionSplash bg-size="200%" object-position="50% 0rem" :url="champion.splash" :name="champion.name" class=" h-140 w-100 size-full shadow-sm drop-shadow-sm relative after:absolute z-0  after:rounded-lg after:top-0 after:left-0 after:z-1 after:size-full after:mask-edges  after:bg-[#00000050] overflow-hidden  ">

        <DialogHeader class="absolute bottom-4 *:text-right right-5 *:text-light/80 drop-shadow-sm *:dst *:text-shadow-sm w-full">
        <Grow  />
          <DialogTitle class="text-11  font-bold tracking-tight">
            {{ champion.name }}
          </DialogTitle>
          <DialogDescription class="text-3 tracking-tight font-medium uppercase ">
            {{ champion.title }}
          </DialogDescription>
        </DialogHeader>
        </ChampionSplash>

      <LazyChampionAbilities v-if="champion && champion.abilities" :abilities="champion.abilities" v-model:model-value="selectedAbility" @update:ability="e => selectedAbility = e"/>
      </div>
    <div class="w-full">


  <AbilityData v-if="selectedAbility" :ability="champion.abilities[selectedAbility][0]" :index="selectedAbility[0]"  />
    </div>
  </LazyMotionDialogContent>
    </Dialog>
</template>