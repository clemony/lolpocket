<script setup lang="ts">
import { shardObject } from '#shared/appdata/records/shards'

const { pocket, set: s } = defineProps<{
  pocket: Pocket
  set: RuneSet
}>()

const set = computed(() => s)
</script>

<template>
  <div class="flex justify-center field-box rounded-xl w-full py-10">
    <div class="grid grid-cols-3 place-items-center gap-x-16 gap-y-7">
      <template
        v-for="tier in shardObject"
        :key="tier.tier">
        <Shard
          v-for="shard in tier.shards"
          :id="shard.id"
          :key="shard.id"
          v-tippy="{
            content: shard.description,
            theme: 'basic',
            arrow: false,
          }"
          :for="tier.label"
          as="label"
          label>
          <input
            v-model="set.shards[tier.tier]"
            type="radio"
            :value="shard.id"
            :aria-label="shard.name"
            :name="tier.label"
            class="peer hidden"
            @change="console.log(set)" />
        </Shard>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
