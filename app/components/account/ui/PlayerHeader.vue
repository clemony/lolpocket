<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()

const user = inject<User>('user')
</script>

<template>
  <div class="flex w-120 h-22 items-center  gap-6 ">
    <div class="relative grid place-items-center">
      <LazySummonerIcon v-if="summoner" :summoner class="size-22 rounded-full relative" />



    <UpdateMatchHistoryButton :summoner  button-class="btn-circle btn-neutral btn-sm" class="-left-1 -bottom-1 absolute" />




<!--       <tippy class="has-disabled:!cursor-help">
            <p v-else>

          <template #content>
            <div class="max-w-64">
              <h4>Is this yours?</h4>

              <p>
                Connect your Riot ID to claim, access more statistics, and customize.
              </p>
            </div>
            </p>
          </template>
        </tippy> -->

    </div>

    <div class="flex flex-col grow justify-center gap-1.5 ">
      <div class="flex items-center gap-4">
      <SummonerName class="!text-12 drop-shadow-sm font-serif text-bc/94 leading-none font-bold" />

</div>

      <div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
        <SummonerTag :summoner />

        <SummonerRegion :region-id="summoner.region" />

        <SummonerLevel :summoner />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
