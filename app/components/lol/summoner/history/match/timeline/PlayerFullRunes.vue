<script lang="ts" setup>
import { runePaths } from '~~/shared/records/runes'

const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()
</script>

<template>
  <div
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
        data-label="rune"
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
          data-label="rune"
          :class="cn('tippy size-10.5 opacity-70 grayscale', { 'opacity-100 grayscale-0': match.player.runes.primary.runes.concat(match.player.runes.secondary.runes).includes(rune.id) })" />
      </div>
    </Card>
  </div>
</template>