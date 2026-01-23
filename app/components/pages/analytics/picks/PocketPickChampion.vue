<script lang="ts" setup>
const { champion } = defineProps<{
  champion: any
}>()

const winrateDiff = computed(() => {
  return -1
})
</script>

<template>
  <!--     <NoDataOverlay v-if="!summoner.simplifiedMatches.length" /> -->

  <div class="border-shadow-sm stats h-34 w-210">
    <div class="stat items-center">
      <div class="stat-figure">
        <div
          class="
            relative grid size-8 place-items-center font-mono leading-none
            font-bold tracking-wide
          ">
          <span class="absolute right-1.5 object-center text-5xl"> S+ </span>
        </div>
      </div>

      <div class="stat-title">
        Pocket Pick
      </div>

      <div class="stat-value text-primary">
        {{ champion.champion }}
      </div>

      <div class="stat-desc">
        games in {{ ms().filter.patch }}
      </div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <div
          class="
            relative grid size-8 place-items-center leading-none font-black!
            tracking-wider
          ">
          <icon
            name="teenyicons:heart-circle-solid"
            class="text-bc dst -mt-0.5 size-8" />
        </div>
      </div>

      <div class="stat-title">
        Participation
      </div>

      <div class="stat-value">
        {{ champion.avgKp }}%
      </div>

      <div class="stat-desc tracking-wide!">
        {{ champion.avgKills }}&hairsp;&#47;&hairsp;{{
          champion.avgDeaths
        }}&hairsp;&#47;&hairsp;{{ champion.avgAssists }}
      </div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <div
          class="
            online avatar relative grid size-16 place-items-center rounded-full
            shadow-md drop-shadow-sm
          ">
          <div class="absolute size-20 overflow-hidden rounded-full">
            <ChampionIcon
              :id="champion.championId"
              :alt="champion.champion"
              class="size-full scale-109 object-center" />
          </div>
        </div>
      </div>

      <div class="stat-value">
        86% wr
      </div>

      <div class="stat-title">
        Winrate
      </div>

      <div class="stat-desc">
        {{ champion.games }} games played
      </div>
    </div>
  </div>
</template>
