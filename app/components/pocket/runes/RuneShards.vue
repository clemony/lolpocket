<script setup lang="ts">
const { pocket, set: s } = defineProps<{
  pocket: Pocket
  set: RuneSet
}>()

const set = computed(() => s)
</script>

<template>
  <div class="field-box flex w-full justify-center rounded-xl py-10">
    <div class="grid grid-cols-3 place-items-center gap-x-16 gap-y-7">
      <template v-for="tier in shardRegistry" :key="tier.tier">
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
            class="peer hidden"
            type="radio"
            :value="shard.id"
            :aria-label="shard.name"
            :name="tier.label"
            @change="console.log(set)" />
        </Shard>
      </template>
    </div>
  </div>
</template>
