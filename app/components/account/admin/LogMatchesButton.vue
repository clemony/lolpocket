<script lang="ts" setup>
import { matchDB } from 'stores/matchDB'

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