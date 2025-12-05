<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()
</script>

<template>
  <!--     <img
      :src="`/img/paths/${pathNameById(match.player.runes.primary.path)}.webp`"
      class="size-6 dxs" /> -->
  <Card class="flex h-20 items-center gap-4 rounded-xl px-5">
    <div class="relative mr-1 grid h-10 w-11 place-items-center">
      <Keystone
        :id="match.player.runes.keystone"
        :key="match.player.runes.keystone"
        :data-id="match.player.runes.keystone"
        data-tip="rune"
        class="tippy absolute z-1 size-13" />
    </div>
    <Rune
      v-for="rune in match.player.runes.primary.runes.concat(match.player.runes.secondary.runes)"
      :id="rune"
      :key="rune"
      :data-id="rune"
      data-tip="rune"
      class="tippy size-10" />
  </Card>

  <!--     <img
      class="ml-2 size-6 dxs"
      :src="`/img/paths/${pathNameById(match.player.runes.secondary.path)}.webp`" /> -->
  <Card class="flex h-20 flex-col items-center justify-between rounded-xl p-2">
    <Shard
      v-for="shard in match.player.runes.shards"
      :id="shard"
      :key="shard"
      data-tip="rune"
      class="tippy size-5 border-0 shadow-none drop-shadow-none"
      :icon-class="cn('size-4!', { 'size-3.5!': [5011, 5010, 5007].includes(shard) })" />
  </Card>

  <!--  <div
    v-for="path, ix in [runePaths[match.player.runes.primary.path], runePaths[match.player.runes.secondary.path]]"
    :key="ix"
    class="flex w-58 flex-col gap-4 **:cursor-default">
    <Card
      v-if="ix === 0"
      :data-path="path.name"
      class="relative flex h-20 w-full items-center justify-around gap-4 overflow-hidden rounded-xxl p-4 after:absolute after:z-0 after:size-full after:bg-linear-to-br after:from-b1/60 after:to-b1">
      <Keystone
        v-for="keystone in path.slots[0].runes"
        :id="keystone.id"
        :key="keystone.id"
        :data-id="keystone.id"
        data-tip="rune"
        :class="cn('tippy z-1 size-12 opacity-70 grayscale', { 'grayscale-0 opacity-100': keystone.id === match.player.runes.keystone })" />
    </Card>
    <Card
      :data-path="path.name"
      class="relative grid size-full place-items-center gap-5 self-end overflow-hidden rounded-xxl! px-4 py-6 after:absolute after:z-0 after:size-full after:bg-linear-to-b after:from-b1/60 after:to-b1">
      <div
        v-for="slot, i in path.slots.filter(s => s.tier !== 0)"
        :key="i"
        class="z-1 grid w-full grid-cols-3 place-items-center gap-4">
        <Rune
          v-for="rune in slot.runes"
          :id="rune.id"
          :key="rune.id"
          :data-id="rune.id"
          data-tip="rune"
          :class="cn('tippy size-10.5 opacity-70 grayscale', { 'opacity-100 grayscale-0': match.player.runes.primary.runes.concat(match.player.runes.secondary.runes).includes(rune.id) })" />
      </div>
    </Card>
  </div> -->
</template>