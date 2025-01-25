<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
  selected?: number

  selectedShard?: number
}>()
const ps = usePocketStore()
const ds = useDataStore()
const ts = useTempStore()

const pocket = ref(getPocket(props.pocket.key))

const runeIndex = ref(props.selected)

const set = computed(() => {
  return pocket.value.runes[0].runeSets[runeIndex.value]
})
</script>

<template>
  <div
    :key="set.key"
    class="flex justify-center"
  >
    <div class="grid max-w-64 grid-cols-3 place-items-center gap-x-12 gap-y-7">
      <!--    <Tooltip
        dark
        v-for="shard in ds.shards"
        :key="shard.name + shard.slotID"
        :content="shard.stats">
        <label
          :alt="shard.stats"
          :data-tag="shard.color"
          :class="
            cn(
              /* b4 */
              'backdrop-blur-xs',
              /* border */
              'border-b-b3 border-l-b3/60 border-r-b3 border-t-b3/60 border',

              /* shadow */
              'shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008]',

              /* struct  */
              'grid size-14 shrink-0 place-items-center overflow-hidden rounded-full p-3.5 transition-all duration-300 has-checked:scale-105',
              shard.name,
              getShardClass(shard)
                .toString()
                .replace(/border.*/, ''),
              {
                'bg-b2/20': shard.name == 'empty',
              }
            )
          "
          :style="{
            backgroundImage: 'url(/img/ui/green-dust-and-scratches.png),linear-gradient(135deg,var(--b1) / 0.4) 50%, oklch(var(--b2)) 100%',
          }">
          <input
            v-if="shard.slotID == 1"
            type="radio"
            :name="shard.slotName"
            :value="shard"
            v-model="set.shards[0]"
            @change="console.log(set)"
            class="peer hidden" />

          <input
            v-if="shard.slotID == 2"
            type="radio"
            :name="shard.slotName"
            :value="shard"
            v-model="set.shards[1]"
            class="peer hidden" />
          <input
            v-if="shard.slotID == 3"
            type="radio"
            :name="shard.name + shard.slotID"
            :value="shard"
            v-model="set.shards[2]"
            class="peer hidden" />

          <icon
            :name="getShardIcon(shard)"
            class="size-full rounded-full opacity-90 brightness-95 drop-shadow-md grayscale peer-checked:opacity-100! peer-checked:grayscale-0!"
            :class="
              cn(getShardClass(shard), {
                'opacity-40': shard.name == 'empty',
              })
            " />
        </label>
      </Tooltip> -->
    </div>
  </div>
</template>

<style scoped></style>
