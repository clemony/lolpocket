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

  /* console.log(result.map(m => m.metadata?.matchId))
await matchDB.matchData.bulkPut(result) */
}
</script>

<template>
  <button
    v-tippy="'Update Matches'" :disabled="props.loading" :class="cn('btn btn-square btn-sm shadow-xs border-b3 drop-shadow-xs', props.class)" @click="updateMatchData()">
    <icon v-if="!props.loading" name="update" class="dst size-4.5  hover:text-bc tldr-20" />
    <icon v-else name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
  </button>
</template>