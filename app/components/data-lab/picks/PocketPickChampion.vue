<script lang="ts" setup>
const { champion } = defineProps<{
  champion: any
}>()

const ms = useMatchStore()
const as = useAccountStore()
const ss = useSummonerStore()

const winrateDiff = computed (() => {
  return -1
})
</script>

<template>

      <!--     <NoDataOverlay v-if="!summoner.simplifiedMatches.length" /> -->


  <div class="stats border-shadow-sm w-210 h-34">
    <div class="stat items-center">
      <div class="stat-figure">
        <div class="size-8 leading-none tracking-wide font-mono font-bold relative grid place-items-center">
    
        <span class="text-9 object-center absolute object-center  right-1.5">
          S+
        </span>
    
          </div>
      </div>
      <div class="stat-title">
        Pocket Pick
      </div>
      <div class="stat-value text-primary">
           {{ champion.champion.name }}
      </div>
      <div class="stat-desc">
         games in {{ ms.af.patch }}
      </div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">

        <div class="size-8 leading-none tracking-wider  !font-black relative grid place-items-center">
          <icon name="teenyicons:heart-circle-solid"  class="size-8 text-bc  -mt-0.5 dst"/>
  
          </div>
      </div>
      <div class="stat-title">
        Participation
      </div>
      <div class="stat-value">
{{champion.avgKp}}%
      </div>
      <div class="stat-desc !tracking-wide">
               {{champion.avgKills}}&hairsp;&#47;&hairsp;{{champion.avgDeaths}}&hairsp;&#47;&hairsp;{{champion.avgAssists}}
      </div>
    </div>
    <div class="stat">
      <div class="stat-figure text-secondary">
        <div class="avatar online shadow-md drop-shadow-sm rounded-full size-16 relative grid place-items-center">
          <div class="size-20 absolute rounded-full overflow-hidden">
            <NuxtImg :src="`/img/champion/${champion.champion.id}.webp`" class="size-full scale-109 object-center" />
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
        {{champion.games}} games played
      </div>
    </div>
  </div>
</template>