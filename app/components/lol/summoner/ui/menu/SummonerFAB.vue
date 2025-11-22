<script setup lang="ts">
const { state } = defineProps<{
  state: SummonerInject
}>()

const data = computed (() => state?.summoner?.value)
</script>

<template>
  <UpdateSummoner
    :state />

  <FollowButton
    v-tippy="{ content: as().settings.favorite_summoners.includes(data?.puuid) ? 'hi' : 'no', theme: 'base', placement: 'left' }"
    :summoner="data"
    size="c-14" />

  <Button
    v-if="as().account?.puuid === data?.puuid"
    variant="floating"
    size="c-14">
    <Icon
      name="gear"
      class="size-5" />
  </Button>
</template>
