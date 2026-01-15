<script lang="ts" setup>
const { match } = defineProps<{
  match: Player
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
      :match />
    <MatchSkillOrder
      v-if="timeline"
      :timeline
      :match>
      <PlayerFullRunes :match />
    </MatchSkillOrder>
  </div>
</template>