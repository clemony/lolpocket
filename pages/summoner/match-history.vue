<script setup lang="ts">
definePageMeta({
  name: 'match history',
  title: 'Match History',
})

const as = useAccountStore()
</script>

<template>
  <div class=" relative w-full px-14">
    <PlayerHeader :summoner="as.userAccount">
      <SummonerIcon class="rounded-full size-19" />
    </PlayerHeader>
    <div
      class="grid size-full grid-cols-2 justify-start  gap-3">

        <div
          class="flex max-w-120 flex-col gap-8 overflow-auto overscroll-auto  pb-10">
 

          <div class="h-52 flex items-center py-3">
            <RankCard title="Solo/Duo" queue="soloDuo" />
          </div>
     <div class="h-52 flex items-center py-3">
            <RankCard title="Flex" queue="flex" />
          </div>

          <Field class="bg-b2/40 border-b2">
       <ChampTabs />
       </Field>
        </div>
 

   
        <div
          class="size-full justify-center overflow-auto overscroll-auto px-3">
  

          <MatchCard />
        </div>
 
    </div>
  </div>
</template>
