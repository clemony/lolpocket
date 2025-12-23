<script lang="ts" setup>
import { shardObject } from '@records/shards'

const { class: className, shards } = defineProps<{
  shards: ShardStats
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Card
    class="grid max-w-60 basis-1/5 grid-cols-3 place-items-center gap-4 px-3 pt-5 pb-6">
    <template
      v-for="row, ix in shardObject"
      :key="row.label">
      <Element
        v-for="shard, i in row.shards"
        :key="i"
        data-tip="shard"
        :data-id="shard.id"
        data-placement="bottom"
        :data-size="shards[ix as ShardSlot]?.[shard.id]?.games ? 'md' : 'default'"

        :data-text="shards[ix as ShardSlot]?.[shard.id]?.games ? `${shards[ix as ShardSlot]?.[shard.id]?.games} game${shards[ix as ShardSlot]?.[shard.id]?.games > 1 ? 's' : ''} - ${shards[ix as ShardSlot]?.[shard.id]?.winrate}% WR` : ''"
        class="relative"
        :class="cn({ 'border border-nc!': shards[ix as ShardSlot]?.[shard.id] })"
        base="btn"
        :variant="shards[ix as ShardSlot]?.[shard.id] ? 'neutral' : 'base'"
        size="c-10">
        <ShardIcon :id="shard.id" />
        <span
          v-if="shards[ix as ShardSlot]?.[shard.id]"
          class="absolute -bottom-3 z-1 inline-flex rounded-lg border border-tint-neutral/50 bg-neutral/70! px-1.5 py-0.5 align-middle text-0! leading-none font-bold text-nc/80! shadow-sm dss backdrop-blur-sm">
          {{ shards[ix]?.[shard.id].winrate }}
        </span>
      </Element>
    </template>
  </Card>
</template>