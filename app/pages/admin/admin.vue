<script setup lang="ts">
const ts = useTempStore()
const ds = useDataStore()
console.log('💠 - ds:', ds.items)
definePageMeta({
  name: 'admin',
  section: 'nexus',
})
// ds.champions = []
function reset() {
  ds.paths.length = 0
  ds.champions.length = 0
  ds.items.length = 0
  ds.items.length = 0
  ds.items.length = null
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

async function hi() {
  const a = await import('data/item')
  const data = a.items.data
  console.log('💠 - json - data:', data)
  ds.items = ds.items.map((item) => {
    // Convert the item ID to a string to match keys in the data object
    const match = data[item.id]

    // If a match is found, merge the additional properties
    return match ? { ...item, gold: match.gold, tags: match.tags, from: match.from, into: match.into } : item
  })
  console.log('💠 - Object.keys - ds.items:', ds.items)
}
</script>

<template>
  <div class="wrapper flex size-full flex-col items-center justify-center gap-15">
    <AppTitlebar />
    <div class="">
      your pocket picks
    </div>
    <div class="flex gap-2">
      <div class="flex flex-col gap-2">
        All
        <button
          class="btn btn-neutral" @click="patchItemDatabaseData()">
          Patch Item Data
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
        <button
          class="btn btn-neutral"
          @click="updateItemDatabaseData(ds.items)">
          Update Item Database
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
          class="btn btn-neutral" @click="hi()">
          null
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
