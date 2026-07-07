<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()
</script>

<template>
  <div class="grid grow grid-cols-2 gap-1">
    <TeamAvatarList
      :match
      :team="match.participants.filter((p) => p.teamId === 100)" />

    <TeamAvatarList
      :match
      :team="match.participants.filter((p) => p.teamId === 200)" />
  </div>
</template>
