<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
  selected?: number
  runeSet: RuneSet

  selectedShard?: number
}>()
const set = computed (() => {
  return props.runeSet
})
</script>

<template>
  <div
    :key="set.key"
    class="flex justify-center  rounded-xl w-full py-10"
  >
    <div class="grid  grid-cols-3 place-items-center gap-x-16 gap-y-7">
      <div
        v-for="shard in shards"
        :key="shard.name + shard.slotID"
        v-tippy="shard.stats"
        :alt="shard.stats"
        :data-tag="shard.color" :class="getShardBg(shard)"
        class="group"
      >
        <label
          :class="
            cn(
              /* b4 */
              'backdrop-blur-xs bg-b1/30',
              /* border */
              'border-b-b3 border-l-b3/60 border-r-b3 border-t-b3/60 border',

              /* shadow */
              'shadow-warm-2',

              /* struct  */
              'grid size-14 shrink-0 place-items-center cursor-pointer overflow-hidden rounded-full p-3.5 transition-all duration-300 has-checked:scale-105 group',
              shard.name,
              getShardClass(shard)
                .toString()
                .replace(/border.*/, ''),
              {
                'bg-b2/20': shard.name == 'empty',
              },
            )
          "
          :style="{
            backgroundImage: 'url(/img/ui/green-dust-and-scratches.png),linear-gradient(135deg,var(--b1) / 0.4) 50%, oklch(var(--b2)) 100%',
          }"
        >
          <input
            v-if="shard.slotID == 1"
            v-model="set.shards[0]"
            type="radio"
            :name="shard.slotName"
            :value="shard"
            class="peer hidden"
            @change="console.log(set)"
          />

          <input
            v-if="shard.slotID == 2"
            v-model="set.shards[1]"
            type="radio"
            :name="shard.slotName"
            :value="shard"
            class="peer hidden"
          />
          <input
            v-if="shard.slotID == 3"
            v-model="set.shards[2]"
            type="radio"
            :name="shard.name + shard.slotID"
            :value="shard"
            class="peer hidden"
          />

          <icon
            :name="getShardIcon(shard)"
            class="size-full rounded-full opacity-90 brightness-95 drop-shadow-md grayscale peer-checked:opacity-100 peer-checked:grayscale-0 group-hover:grayscale-0"
            :class="
              cn(getShardIconColor(shard), {
                'opacity-40': shard.name == 'empty',
              })
            "
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
