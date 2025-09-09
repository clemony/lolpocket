<script setup lang="ts">
import { shardObject } from 'appdata/records/shards'

const { pocket, set: s } = defineProps<{
  pocket: Pocket
  set: RuneSet
}>()

const set = computed (() => s)
</script>

<template>
  <div
    title="Shards"
    class="flex justify-center field-box rounded-xl w-full py-10">
    <div class="grid  grid-cols-3 place-items-center gap-x-16 gap-y-7">
      <template
        v-for="tier in shardObject"
        :key="tier.tier">
        <Label
          v-for="shard in tier.shards"
          :key="shard.id"
          variant="b1"
          hover="ghost"
          :style="{ '--shard-color': shard.color }"
          :title="shard.description"
          class="grid rounded-full relative size-14 shrink-0 place-items-center cursor-pointer bg-b1 hover:ring hover:ring-neutral/60 shadow-sm shadow-black/5 drop-shadow-black/5 drop-shadow-sm hover:has-checked:ring-[var(--shard-color)]  ring-[var(--shard-color)]/80 has-checked:ring">
          <input
            v-model="set.shards[tier.tier]"
            type="radio"
            :value="shard.id"
            :name="tier.label"
            class="peer hidden"
            @change="console.log(set)" />

          <component
            :is="`i-shards-${shard.id}`"
            :alt="`shard-${shard.name}`"
            :class="cn('shrink-0 absolute peer-checked:text-[var(--shard-color)] peer-not-checked:opacity-70 dst', { '!size-5': ![5011, 5010, 5007].includes(shard.id), '!size-4.5': [5011, 5010, 5007].includes(shard.id) })" />
        </Label>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
