<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const { runes } = storeToRefs(sChampion())
const page = computed(() => {
  if (!runes.value?.best) return null
  return runes.value?.best
})
const bestTip = computed(() => {
  if (!page.value) return ""
  return `${page.value.games} game${page.value.games > 1 ? "s" : ""} - ${page.value.winrate}% WR`
})

const setClass = " gap-5 "
</script>

<template>
  <ChampStatRow v-if="page" simple>
    <ChampStatLabel title="Runes" :stat="page" />
    <ChampStatRowWrapper v-if="runes?.best" simple :class="setClass">
      <Keystone
        :id="page.keystone"
        class="size-18 contrast-105"
        :data-text="bestTip" />

      <Rune
        v-for="rune in page.primaryRunes"
        :id="rune"
        :key="rune"
        class="size-14"
        :data-text="bestTip" />

      <Rune
        v-for="rune in page.secondaryRunes"
        :id="rune"
        :key="rune"
        class="size-14"
        :data-text="bestTip" />

      <Shard
        v-for="shard in page.shards"
        :id="shard"
        :key="String(shard)"
        size="c-12"
        variant="neutral" />
    </ChampStatRowWrapper>
    <NoItemData v-else simple />
  </ChampStatRow>
</template>
