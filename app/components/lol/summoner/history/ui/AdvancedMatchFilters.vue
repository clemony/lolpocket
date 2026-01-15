<script lang="ts" setup>
const { matches } = useSummonerInject()
</script>

<template>
  <div class="w-64 space-y-3 p-3">
    <div class="flex w-full items-center gap-2 text-2">
      <SelectNumberOfMatches />
      / {{ matches?.length }} games
    </div>
    <div class="flex w-full items-center gap-2">
      <MatchPatchFilter />
    </div>
  </div>
</template>