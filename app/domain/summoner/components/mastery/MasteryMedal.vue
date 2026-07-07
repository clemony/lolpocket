<script lang="ts" setup>
const { mastery } = defineProps<{
  mastery: ChampionMastery
}>()
</script>

<template>
  <div
    class="group relative grid size-36 shrink-0 cursor-pointer place-items-center rounded-full select-none">
    <LazySplashCard
      :thickness="8"
      :ui="{
        root: 'absolute grid size-full place-items-center rounded-full! shadow-md drop-shadow-sm',
        imageWrapper:
          'relative grid size-full place-items-center rounded-full!',
        container:
          'size-full rounded-full! ring ring-iron *:grid *:size-full *:place-items-center',
      }">
      <template #foil>
        <LazyMasteryRing
          class="absolute size-full bg-(--primary-800) ring ring-iron/60"
          :size="107"
          :mastery="mastery.level"
          :value="
            roundDecimalToPercent(
              mastery.pointsUntilLevel /
                (mastery.pointsUntilLevel + mastery.pointsSinceLevel),
              1
            )
          " />
        <div
          class="relative size-[calc(100%-16px)] overflow-hidden rounded-full">
          <LazyNuxtImg
            :width="150"
            :height="150"
            :src="getSplash(mastery.championId, 'tile')"
            type="tile"
            :alt="mastery.championId"
            class="pointer-events-none scale-130" />
          <div
            class="absolute inset-px rounded-full border border-iron ring inset-shadow-sm ring-iron/60 inset-shadow-black/20"></div>
        </div>
      </template>
    </LazySplashCard>

    <!--     <div class="pointer-events-none absolute -bottom-4 z-4 size-14">
            <LazyNuxtImg
              :width="52"
              :height="52"
              :src="`/img/mastery/mastery-${(champion?.mastery.level ?? 0 > 10) ? 10 : mastery.level}.webp`"
              :alt="mastery.level?.toString()"
              class="drop-shadow-sm drop-shadow-black/20" />
          </div>-->
  </div>
</template>
