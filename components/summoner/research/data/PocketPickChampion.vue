<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
}>()
const ds = useDataStore()
const ms = useMatchStore()

const highestChamp = computed (() => {
  const c = ref(getPatchChampions(props.patchGames))
  return c.value.slice(0, 3)
    .sort((a, b) => b.winrate - a.winrate)[0] || null
})

const champion = computed (() => {
  if (!highestChamp.value)
    return null
  return ds.champions.find(c => c.name == highestChamp.value.champion) || null
})

const winrateDiff = computed (() => {
  return -1
})
</script>

<template>
  <!--   <div class="flex gap-10  w-full">
    <div class="stats h-36 w-1/2  py-4 px-5">

 -->

  <transition-slide>
    <div v-if="champion" :key="champion.id" class="stats bg-b1  rounded-box border border-b3 h-full shadow-warm-soft grid w-full grid-cols-3 group/champ-bar min-h-32">
      <div class="stat py-5">
        <div class="stat-figure">
          <div class="avatar online inset-shadow-sm">
            <div class="w-16 rounded-full inset-shadow-sm">
              <img :src="`/img/champion/${champion.id}.webp`" class="scale-116" />
            </div>
          </div>
        </div>
        <div class="stat-title text-3 flex gap-1 items-center pl-0.5">
          Pocket Pick
        </div>
        <div class="stat-value text-6">
          {{ champion.name }}
        </div>
        <div class="stat-desc text-2 font-medium pl-0.5">
          Patch {{ ds.currentPatch }}
        </div>
      </div>

      <div class="stat relative">
        <div class="stat-figure top-1 right-4 absolute">
          <icon v-if="props.patchGames" name="ph:arrow-up-right-bold" class="opacity-50 size-5 dst" :class="{ ' -scale-y-100': winrateDiff < 0 }" />
        </div>
        <div class="stat-title text-2">
          Overall
        </div>
        <div v-if="champion" class="stat-value dst flex items-center">
          25.6
          <icon name="ph:percent-bold" class="size-7" />
        </div>
        <div class="stat-desc text-2">
          21% higher <APDtooltip /> than {{ ms.previousPatch }}
        </div>
      </div>

      <div class="stat relative">
        <div class="stat-figure absolute right-4 top-1">
          <icon v-if="props.patchGames" name="ph:arrow-up-right-bold" class="size-5 dst opacity-50" :class="{ ' -scale-y-100': winrateDiff < 0 }" />
        </div>
        <div class="stat-title text-2">
          Adjusted
        </div>
        <div v-if="champion" class="stat-value dst flex items-center">
          25.6
          <icon name="ph:percent-bold" class="size-7" />
        </div>
        <div class="stat-desc text-2">
          21% higher <APDtooltip /> than {{ ms.previousPatch }}
        </div>
      </div>
      <NoDataOverlay v-if="!props.patchGames.length" />
    </div>
  </transition-slide>
</template>