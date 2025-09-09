<script lang="ts" setup>
async function logAllMatches() {
  const matches = await matchDB.matchData.toArray()
  console.log('📦 Matches in Dexie:', matches)
}
</script>

<template>
  <button
    class="btn"
    @click="logAllMatches()">
    log all matches
  </button>
</template>