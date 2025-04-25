<script lang="ts" setup>
import { matchDB } from 'stores/matchDB'

const props = defineProps<{
  puuid: string
  class?: HTMLAttributes['class']
  loading?: boolean
}>()
const as = useAccountStore()

async function updateMatchData() {
  const { getAllMatchIds, addMatches } = useMatchDexie()
  const existingIds = (await getAllMatchIds()).map(String)

  const newMatches = await useGetMatches({
    puuid: props.puuid,
    existingIds,
    direction: 'new',
  })
  console.log('💠 - updateMatchData - newMatches:', newMatches)

await fetchRankedEntries(props.puuid)

console.log(as.rankedEntries)
  /* console.log(result.map(m => m.metadata?.matchId))
await matchDB.matchData.bulkPut(result) */
}
</script>

<template>
  <button :disabled="props.loading" :class="cn('btn  btn-sm shadow-xs border-b3 drop-shadow-xs text-1', props.class)" @click="updateMatchData()">
    <span  class="flex gap-3 items-center" v-if="!props.loading" >
    <icon name="update" class="dst size-3.5  hover:text-bc tldr-20" />
    Update
    </span>
    <span v-else class="flex gap-3 items-center">
    <icon name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
    Checking
    </span>
  </button>
</template>