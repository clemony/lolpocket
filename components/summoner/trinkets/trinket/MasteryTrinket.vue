<script lang="ts" setup>
const props = defineProps<{
container: any
}>()

const ds = useDataStore()
const champion = computed (() => {
  return ds.champions.find(c => c.key == championMastery.championId.toString())
})
</script>

<template>

<Trinket size="md" solid  :container="props.container"  :style="{
      backgroundImage:
        `url(/img/champion-centered/${champion.id}_0.webp)`,
      backgroundSize: '290%',
      backgroundPositionX: '44%',
      backgroundPositionY: '21%',
    }">
    <div class="py-5 px-5 inset-shadow-sm size-full bg-radial-[at_75%_0] from-b1/2 from-18% via-b1/90 via-50% to-b1 to-80% inset-shadow flex flex-col justify-end">
      <div class="flex gap-6 self-end w-full">
        <div class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
          <h1 class="!text-9 font-serif  opacity-90 text-shadow-md  font-bold pb-3 ">
            {{ champion.name }}
          </h1>

          <div v-tippy="`${championMastery.championPointsSinceLastLevel.toLocaleString()} / ${championMastery.championPointsUntilNextLevel.toLocaleString()} to next level`" class="group dst flex flex-col gap-1">
            <p>Mastery Level {{ championMastery.championLevel }}</p>
            <p>
              {{ championMastery.championPoints.toLocaleString() }} Total Points
            </p>
          </div>
        </div>
        <img
          :src="`/img/mastery/mastery-${
            computed (() => {
              const a = championMastery.championLevel
              return a < 4 ? 0 : a >= 10 ? 10 : a
            }).value}.webp`" class="size-22 pointer-events-none drop-shadow-md drop-shadow-[#000]/50 self-end  opacity-96 " />
      </div>

      <div class="pl-3 pr-2.25">
        <progress
          class="bg-b3/60 progress w-full opacity-90 drop-shadow-[#000]/30 drop-shadow-sm group-hover:ring group-hover:ring-neutral/40 transition-all duration-300" :value="championMastery.championPointsSinceLastLevel" :max="championMastery.championPointsSinceLastLevel + championMastery.championPointsUntilNextLevel"></progress>
      </div>
    </div>

</Trinket>
</template>

<style scoped>

</style>