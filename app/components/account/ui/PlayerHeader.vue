<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <SplashTabsHeader>
    <template #icon>
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="rounded-full relative" />
      <UpdateSummoner
        :summoner
        button-class="btn-circle btn-neutral btn-sm [&_.radial-progress]:text-b1"
        class="-left-1 -bottom-1 absolute" />

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
    </template>
    <template #header>
      <SummonerName
        class="drop-shadow-sm font-serif text-bc/94 leading-none font-bold" />
    </template>

    <template #text>
      <SummonerTag :summoner />

      <SummonerRegion :region-id="summoner.region" />

      <SummonerLevel :summoner />
    </template>
  </SplashTabsHeader>
</template>

<style scoped></style>
