<script lang="ts" setup>
const {summoner} = defineProps<{
summoner: Summoner
loading: boolean

}>()


async function getOldMatches(){
  const { getAllMatchIds, addMatches } = useMatchDexie()
  const existingIds = (await getAllMatchIds()).map(String)

const oldMatches = await useGetMatches({
  puuid: summoner.puuid,
  existingIds,
  direction: 'old',
})}
</script>

<template>
 <button
            v-if=" summoner.puuid" class="btn btn-ghost    gap-3 "
            :disabled="loading"
            @click="getOldMatches()">
            <icon v-if="!loading" name="radix-icons:update" class="dst size-4.5  hover:text-bc text-3 font-normal tldr-20" />
            <icon v-else name="svg-spinners:ring-resize" class=" size-4 opacity-60" />
            Load More Matches
          </button>
</template>