<script setup lang="ts">
import { championFull } from 'data/championFull'

const ts = useTempStore()
const ds = useDataStore()
console.log('💠 - ds:', ds.championTemplates)
definePageMeta({
  name: 'admin',
})

function reset() {
  ds.paths.length = 0
  ds.champions.length = 0
  ds.items.length = 0
  ds.SRitems.length = 0
  ds.SRitems.length = null
  console.log('store arrays reset')
}

function reGet() {
  // getRuneData()
  getItemsFromDatabase()
  getChampsFromDatabase()
  // getRuneData()
  // getShardData()
  console.log('data fetch complete!')
}

console.log('💠 - getWikiChampionAbility - data:', championFull.data)

async function parseAbilities() {
  const c = await parseChampionAbilities(ds.championTemplates)
  console.log('💠 - parseAbilities - c:', c)
}
</script>

<template>
  <NuxtLayout
    name="header-layout" class="wrapper flex size-full flex-col items-center justify-center gap-15">
    <div class="">
      your pocket picks
    </div>
    <div class="flex gap-2">
      <div class="flex flex-col gap-2">
        All
        <button
          class="btn btn-neutral" @click="patchData()">
          Patch Data TEST
        </button>

        <button
          class="btn btn-neutral">
          Patch Rune Data
        </button>
        <button
          class="btn btn-neutral"
          @click="reset">
          Empty Data
        </button>
        <button
          class="btn btn-neutral"
          @click="reGet">
          Fetch Current Data
        </button>
      </div>

      <div class="flex flex-col gap-2">
        Items

        <button
          class="btn btn-neutral"
          @click="getItemsFromDatabase()">
          Get Items From Database
        </button>
      </div>

      <div class="flex flex-col gap-2">
        Champions

        <button
          class="btn btn-neutral"
          @click="loadChampionData()">
          Get Champs from Database
        </button>

        <button
          class="btn btn-neutral"
          @click="getWikiChampionAbility(championFull.data)">
          get wiki champion ability
        </button>

        <button
          class="btn btn-neutral"
          @click="''">
          null
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
