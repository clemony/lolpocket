<script lang="ts" setup>
import { matchDB } from 'stores/matchDB'

const as = useAccountStore()
const emit = defineEmits(['loaded'])

async function updateMatchData() {
  const { getAllMatchIds, addMatches } = useMatchDexie()
  const existingIds = await getAllMatchIds()

const result = await $fetch<MatchData[]>('/api/riot/matches-by-puuid', {
  method: 'GET',
  params: {
    puuid: as.userAccount.riot.puuid,
    existingIds: JSON.stringify(existingIds),
  },
})

await matchDB.matchData.bulkPut(result)
console.log(result)
emit('loaded')
}

</script>

<template>
<button @click="updateMatchData()">
<slot  />
</button>

</template>