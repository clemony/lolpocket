<script lang="ts" setup>
const { match, player, timeline } = defineProps<{
  match: MatchData
  player: Player
  timeline: PlayerTimeline
}>()
</script>

<template>
  <div
    ref="container"
    class="flex min-h-140 w-full flex-col items-center gap-6 p-6">
    <ItemTimeline
      v-if="timeline"
      :timeline
      :player
      :match />
    <MatchSkillOrder
      v-if="timeline"
      :timeline
      :player
      :match>
      <PlayerFullRunes
        :match
        :player />
    </MatchSkillOrder>
  </div>
</template>