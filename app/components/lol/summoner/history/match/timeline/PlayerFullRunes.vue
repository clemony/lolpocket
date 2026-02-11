<script lang="ts" setup>
const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <UCard class="relative flex h-20 items-center gap-4 rounded-xl px-5">
    <div class="relative mr-1 grid h-10 w-11 place-items-center">
      <Keystone
        :id="player.runes.keystone"
        :key="player.runes.keystone"
        class="absolute z-1 size-13"
        :data-id="player.runes.keystone"
        data-type="rune" />
    </div>
    <Rune
      v-for="rune in player.runes.primary.runes.concat(
        player.runes.secondary.runes
      )"
      :id="rune"
      :key="rune"
      class="size-10"
      :data-id="rune"
      data-type="rune" />
  </UCard>
  <UCard
    class="flex h-20 shrink-0 flex-col items-center justify-center gap-1 rounded-lg p-2">
    <Element
      v-for="shard in player.runes.shards"
      :key="shard"
      class="grid size-5 shrink-0 place-items-center"
      :data-id="shard"
      data-type="shard">
      <Img
        :id="shard"
        class="absolute shrink-0 justify-self-center"
        size="xs"
        :src="`/img/shards/${shard}.webp`"
        alt="icon" />
    </Element>
  </UCard>
</template>
