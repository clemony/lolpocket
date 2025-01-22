<script setup lang="ts">
  const ts = useTempStore()
  const ds = useDataStore()

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
    //getShardData()
    console.log('data fetch complete!')
  }
</script>
<template>
  <div class="wrapper flex size-full flex-col items-center justify-center gap-15">
    <LayoutSpacer />
    <div class="">your pocket picks</div>
    <div class="flex gap-2">
      <div class="flex flex-col gap-2">
        All
        <Button
          variant="neutral"
          size="md"
          @click="patchNewData()">
          Patch Data
        </Button>
        <Button
          variant="neutral"
          size="md"
          @click="getRuneData()">
          Patch Rune Data
        </Button>
        <Button
          variant="neutral"
          size="md"
          @click="reset">
          Empty Data
        </Button>
        <Button
          variant="neutral"
          size="md"
          @click="reGet">
          Fetch Current Data
        </Button>
      </div>

      <div class="flex flex-col gap-2">
        Items

        <Button
          variant="neutral"
          size="md"
          @click="getItemsFromDatabase()">
          Get Items From Database
        </Button>
      </div>

      <div class="flex flex-col gap-2">
        Champions

        <Button
          variant="neutral"
          size="md"
          @click="getChampsFromDatabase()">
          Get Champs from Database
        </Button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
