<script setup lang="ts">

const ts = useTempStore()
const ds = useDataStore()
console.log("💠 - ds:", ds.SRitems)
console.log("💠 - ds:", ds.champions)
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

function getFiles(){

        const uniqueFileListings = extractUniqueFileListingsFromArray(ds.SRitems);
console.log(uniqueFileListings);
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
          @click="getChampsFromDatabase()">
          Get Champs from Database
        </button>

        <button
          class="btn btn-neutral"
          @click="getFiles()">
          get files
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
