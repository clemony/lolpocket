<script lang="ts" setup>
import { matchDB } from 'stores/matchDB'

const props = defineProps<{
puuid: string
}>()
const as = useAccountStore()

async function updateMatchData() {
  const { getAllMatchIds, addMatches } = useMatchDexie()
  const existingIds = await getAllMatchIds()

const result = await $fetch<MatchData[]>('/api/riot/matches-by-puuid', {
  method: 'GET',
  params: {
    puuid: as.userAccount.puuid,
    existingIds: JSON.stringify(existingIds),
  },
})

await matchDB.matchData.bulkPut(result)
console.log(result)
}

</script>

<template>
<button v-tippy="'Update Matches'" @click="updateMatchData()" class="btn btn-square">
<icon name="update" />
</button>

</template>