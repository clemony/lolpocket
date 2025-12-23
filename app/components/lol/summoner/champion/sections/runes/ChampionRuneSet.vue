<script lang="ts" setup>
const { runes } = usePlayerStatsInject()
const page = computed (() => {
  if (!runes.value?.best)
    return null
  return runes.value?.best
})
const bestTip = computed (() => `${runes.value.best.games} game${runes.value.best.games > 1 ? 's' : ''} - ${runes.value.best.winrate}% WR`)
</script>

<template>
  <Card
    v-if="page"
    class="flex w-fit items-center justify-center gap-4 self-center px-5 py-3">
    <StatNumberLabel
      :stat="page.winrate"
      :tip="[page.winrate,
             page.games,
             page.winrate]"
      percent />
    <Keystone
      :id="page.keystone"
      :data-id="page.keystone"
      data-tip="rune"
      data-size="md"
      :data-text="bestTip"
      class="" />
    <Rune
      v-for="rune in page.primaryRunes"
      :id="rune"
      :key="rune"
      :data-id="rune"
      data-tip="rune"
      data-size="md"
      :data-text="bestTip"
      class="size-14" />

    <Rune
      v-for="rune in page.secondaryRunes"
      :id="rune"
      :key="rune"
      data-tip="rune"
      data-size="md"
      :data-id="rune"
      :data-text="bestTip"
      class="size-14" />

    <Element
      v-for="shard in page.shards"
      :key="shard"
      base="btn"
      variant="neutral"
      class="bg-neutral/90"
      size="c-11">
      <ShardIcon
        :id="shard"
        color />
    </Element>
  </Card>
</template>