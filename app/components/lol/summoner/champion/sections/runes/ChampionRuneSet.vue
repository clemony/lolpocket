<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const { runes } = usePlayerStatsInject()
const page = computed (() => {
  if (!runes.value?.best)
    return null
  return runes.value?.best
})
const bestTip = computed (() => `${runes.value.best.games} game${runes.value.best.games > 1 ? 's' : ''} - ${runes.value.best.winrate}% WR`)

const setClass = ' gap-5 '
</script>

<template>
  <ChampStatRow
    v-if="page"
    simple>
    <ChampStatLabel
      title="Runes"
      :stat="page" />
    <ChampStatRowWrapper
      v-if="runes?.best"
      simple
      :class="setClass">
      <Keystone
        :id="page.keystone"
        :data-text="bestTip"
        class="size-18 contrast-105" />

      <Rune
        v-for="rune in page.primaryRunes"
        :id="rune"
        :key="rune"
        :data-text="bestTip"
        class="size-14" />

      <Rune
        v-for="rune in page.secondaryRunes"
        :id="rune"
        :key="rune"
        :data-text="bestTip"
        class="size-14" />

      <Shard
        v-for="shard in page.shards"
        :id="shard"
        :key="shard"
        size="c-12"
        variant="neutral">
      </Shard>
    </ChampStatRowWrapper>
    <NoItemData
      v-else
      simple />
  </ChampStatRow>
</template>