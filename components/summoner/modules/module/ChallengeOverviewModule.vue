<script lang="ts" setup>
const winrate = ref(60)

const labels = ['Current', 'Max']
const datasets = [
  {
    data: [challenges.totalPoints.max, challenges.totalPoints.current],
  },
]

const colors = [getColorFromVariable('--color-b3'), getColorFromVariable(`--color-${challenges.totalPoints.level.toLowerCase()}`)]
</script>

<template>
  <ModuleTemplate title="Challenge Totals" class="module-bg">
    <div class="grid  size-[96%] grid-cols-[1fr_2fr]  gap-4 pt-1.5 self-center items-center">
      <div class=" h-fit grid-cols-1 items-center  relative py-4.5">
        <div v-tippy="`${challenges.totalPoints.current.toLocaleString()} / ${challenges.totalPoints.max.toLocaleString()}`" class="relative -mt-1 justify-self-center">
          <Donut
            :datasets="datasets"
            :colors="colors"
            :labels="labels"
            :no-tooltip="true"
            type="gauge"
            aria="Total Challenge Level"
            class="!size-28 dst"
          />

          <div class=" absolute top-0.25 left-0 grid place-items-center size-full">
            <img :src="`/img/challenges/crystal_${challenges.totalPoints.level.toLowerCase()}.webp`" class="size-16 drop-shadow-sm opacity-90" />

          <!--   <i-challenges-icon-points class="size-9 dst absolute bottom-0" /> -->
          </div>
        </div>

        <div class="flex flex-col mt-6.5 pl-9 gap-3">
          <div>
            <p class="f-sb tracking-wide  text-2 opacity-50">
              Level
            </p>
            <div class="flex relative">
              <span class=" text-3 f-sb capitalize">{{ challenges.totalPoints.level.toLowerCase() }}</span>
              <div class="size-8">
                <!--     -->
              </div>
            </div>
          </div>
          <div>
            <p class="f-sb tracking-wide text-2  opacity-50">
              Points
            </p>
            <p class="f-sb  text-3  ">
              {{ challenges.totalPoints.current.toLocaleString() }} / {{ challenges.totalPoints.max.toLocaleString() }}
            </p>
          </div>

          <p v-tippy="`Top ${challenges.totalPoints.percentile * 100} Percentile!`" class="badge badge-ghost font-medium mt-1 border-b2 flex gap-2 i-c">
            ★ {{ challenges.totalPoints.percentile * 100 }}%
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-6 pt-2.5 justify-center pr-5 h-full">
        <div v-for="cat in Object.keys(challenges.categoryPoints)" :key="cat" class="flex i-c gap-5 w-full group">
          <div v-tippy="`${challenges.categoryPoints[cat].current.toLocaleString()} / ${challenges.categoryPoints[cat].max.toLocaleString()}`" class="flex-col flex gap-2">
            <div class="flex gap-3">
              <i-challenges-icon_category_veterancy v-if="cat.toLowerCase() == 'veterancy'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_imagination v-if="cat.toLowerCase() == 'imagination'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_collection v-if="cat.toLowerCase() == 'collection'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_teamwork v-if="cat.toLowerCase() == 'teamwork'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_expertise v-if="cat.toLowerCase() == 'expertise'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <p class="text-3 f-sb tracking-tight capitalize">
                {{ cat.toLowerCase() }}
              </p>
            </div>
            <progress
              class="bg-b3/60 progress w-68 dst " :value="challenges.categoryPoints[cat].current" :max="challenges.categoryPoints[cat].max"
              :style="{ color: `var(--color-${challenges.categoryPoints[cat].level.toLowerCase()})` }"
            ></progress>
          </div>

          <div class="relative size-8 grid p-i-c ">
            <div v-tippy="{ content: challenges.categoryPoints[cat].level }" class="absolute size-10 -top-1 rounded-full ">
              <img :src="`/img/challenges/crystal_${challenges.categoryPoints[cat].level.toLowerCase()}.webp`" class=" h-10 opacity-90 drop-shadow-sm   top-1 mt-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>