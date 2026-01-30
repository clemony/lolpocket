<script lang="ts" setup>
const { class: className, shards } = defineProps<{
  shards: ShardStats
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <template v-for="(row, ix) in shardRegistry" :key="row.label">
    <div
      class="grid w-full max-w-60 min-w-40 grid-cols-3 place-items-center gap-5 rounded-lg border border-b3 px-2 py-3"
    >
      <div
        v-for="(shard, i) in row.shards"
        :key="i"
        class="relative grid size-12"
      >
        <Shard
          :id="shard.id"
          size="c-12"
          :icon-class="{
            'opacity-50': !shards[ix as ShardSlot]?.[shard.id]?.games,
          }"
          :data-placement="
            i === 0 ? 'left'
            : i === 2 ? 'right'
              : 'top'
          "
          :data-size="
            shards[ix as ShardSlot]?.[shard.id]?.games ? 'md' : 'sm'
          "
          :data-text="
            shards[ix as ShardSlot]?.[shard.id]?.games
              ? `${shards[ix as ShardSlot]?.[shard.id]?.games} game${shards[ix as ShardSlot]?.[shard.id]?.games > 1 ? 's' : ''} - ${shards[ix as ShardSlot]?.[shard.id]?.winrate}% WR`
              : ''
          "
          :class="
            cn('transition-transform duration-200 hover:scale-110', {
              'border border-nc!': shards[ix as ShardSlot]?.[shard.id],
              'scale-90': !shards[ix as ShardSlot]?.[shard.id],
            })
          "
          :variant="shards[ix as ShardSlot]?.[shard.id] ? 'neutral' : 'base'"
        />
        <WinrateIndicator
          v-if="
            shards[ix as ShardSlot]?.[shard.id]
              && shards[ix]?.[shard.id]?.winrate
          "
          :value="shards[ix]?.[shard.id]?.winrate"
        />
        <span
          v-if="shards[ix as ShardSlot]?.[shard.id]"
          class="absolute -bottom-2 z-1 inline-flex justify-self-center rounded-lg border border-tint-neutral/50 bg-neutral/70! px-1.5 py-0.5 align-middle text-xxs! leading-none font-bold text-nc/80! shadow-sm dss backdrop-blur-sm"
        >
          {{ shards[ix]?.[shard.id].winrate }}
        </span>
      </div>
    </div>
  </template>
</template>
