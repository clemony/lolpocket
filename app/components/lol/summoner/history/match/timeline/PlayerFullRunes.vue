<script lang="ts" setup>
const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <Card class="relative flex h-20 items-center gap-4 rounded-xl px-5">
    <div class="relative mr-1 grid h-10 w-11 place-items-center">
      <Keystone
        :id="player.runes.keystone"
        :key="player.runes.keystone"
        :data-id="player.runes.keystone"
        data-type="rune"
        class="tippy absolute z-1 size-13" />
    </div>
    <Rune
      v-for="rune in player.runes.primary.runes.concat(player.runes.secondary.runes)"
      :id="rune"
      :key="rune"
      :data-id="rune"
      data-type="rune"
      class="tippy size-10" />
  </Card>
  <Card
    class="flex h-20 shrink-0 flex-col items-center justify-center gap-1 rounded-lg p-2">
    <Element
      v-for="shard in player.runes.shards"
      :key="shard"
      :data-id="shard"
      data-type="shard"
      size="sq-5"
      class="grid shrink-0 place-items-center">
      <Img
        :id="shard"
        size="5"
        :src="`/img/shards/${shard}.webp`"
        alt="icon"
        class="absolute shrink-0 justify-self-center" />
    </Element>
  </Card>
</template>