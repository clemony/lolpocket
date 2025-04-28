<script lang="ts" setup>

const {summoner, class: className} = defineProps<{
  summoner: Summoner
    class?: HTMLAttributes['class']
}>()


async function updateMatchData() {
  const { getAllMatchIds, addMatches } = useMatchDexie()
  const existingIds = (await getAllMatchIds()).map(String)

  const newMatches = await useGetMatches({
    puuid: summoner.puuid,
    existingIds,
    direction: 'new',
  })
  console.log('💠 - updateMatchData - newMatches:', newMatches)
  // await fetchRankedEntries(props.puuid)
}

const { forceReload, loading } = useSummoner()
</script>

<template>
  <button :disabled="loading" :class="cn('btn  btn-sm shadow-xs border-b3 drop-shadow-xs text-1', className)" @click="updateMatchData()">
    <span v-if="!loading" class="flex gap-3 items-center">
      <icon name="update" class="dst size-3.5  hover:text-bc tldr-20" />
      Update
    </span>
    <span v-else class="flex gap-3 items-center">
      <icon name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
      Checking
    </span>
  </button>

<!--
  <div>
    <button @click="forceReload()" :disabled="loading">
      {{ loading ? 'Reloading...' : 'Force Reload Summoner' }}
    </button>

    <div v-if="ready && summoner">
      <h1>{{ summoner.name }}</h1>
      <p>Level: {{ summoner.level }}</p>
    </div>
  </div> -->
</template>