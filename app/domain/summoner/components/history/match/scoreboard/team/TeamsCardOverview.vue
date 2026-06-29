<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()
</script>

<template>
  <div class="grid grid-cols-2">
    <TeamAvatarList
      :match
      :team="match.participants.filter((p) => p.teamId === 100)" />

    <TeamAvatarList
      :match
      :team="match.participants.filter((p) => p.teamId === 200)" />
  </div>
</template>
