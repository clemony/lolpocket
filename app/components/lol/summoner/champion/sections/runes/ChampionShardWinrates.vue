<script lang="ts" setup>
const { class: className, shards } = defineProps<{
  shards: ShardStats
  class?: HTMLAttributes["class"]
}>()

const shardStat = (ix: number, id: number) => (shards as any)?.[ix]?.[id]
</script>

<template>
  <template v-for="(row, ix) in shardRegistry" :key="row.label">
    <div
      class="grid w-full max-w-60 min-w-40 grid-cols-3 place-items-center gap-5 rounded-lg border border-p3 px-2 py-3">
      <div
        v-for="(shard, i) in row.shards"
        :key="i"
        class="relative grid size-12">
        <Shard
          :id="shard.id"
          size="c-12"
          :icon-class="{
            'opacity-50': !shardStat(ix as number, shard.id)?.games,
          }"
          :data-placement="i === 0 ? 'left' : i === 2 ? 'right' : 'top'"
          :data-size="shardStat(ix as number, shard.id)?.games ? 'md' : 'sm'"
          :data-label="
            shardStat(ix as number, shard.id)?.games
              ? `${shardStat(ix as number, shard.id)?.games} game${shardStat(ix as number, shard.id)?.games > 1 ? 's' : ''} - ${shardStat(ix as number, shard.id)?.winrate}% WR`
              : ''
          "
          :class="
            cn('transition-transform duration-200 hover:scale-110', {
              'border border-nc!': shardStat(ix as number, shard.id),
              'scale-90': !shardStat(ix as number, shard.id),
            })
          "
          :variant="shardStat(ix as number, shard.id) ? 'neutral' : 'base'" />
        <WinrateIndicator
          v-if="
            shardStat(ix as number, shard.id) &&
              shardStat(ix as number, shard.id)?.winrate
          "
          :value="shardStat(ix as number, shard.id)?.winrate ?? 0" />
        <span
          v-if="shardStat(ix as number, shard.id)"
          class="border-tint-neutral/50 absolute -bottom-2 z-1 inline-flex justify-self-center rounded-lg border bg-neutral/70! px-1.5 py-0.5 align-middle text-2xs! leading-none font-bold text-nc/80! shadow-sm ds-sm backdrop-blur-sm">
          {{ shardStat(ix as number, shard.id)?.winrate }}
        </span>
      </div>
    </div>
  </template>
</template>
