<script setup lang="ts">
import { shards } from '~~/data/shards'

const { pocket } = defineProps<{
  pocket: Pocket
}>()

const rs = useRuneStore()
const set = computed(() => pocket.runes[rs.selectedRuneSet])
</script>

<template>
  <Field
    title="Shards"
    class="flex justify-center  rounded-xl w-full py-10">
    <div class="grid  grid-cols-3 place-items-center gap-x-16 gap-y-7">
      <label
        v-for="shard in shards"
        :key="shard.name + shard.slot"
        v-tippy="shard.stats"
        :alt="shard.stats"
        class="group"
        :class="
          cn(
            /* b4 */
            'backdrop-blur-xs ',

            /* struct  */
            'grid size-14 shrink-0 place-items-center cursor-pointer  rounded-full transition-all ring ring-b2 inset-shadow-xs duration-300 hover:bg-b3/40 group has-checked:shadow-outline    has-checked:bg-linear-to-br from-70% has-checked:from-b1 has-checked:to-b2/10 shadow-black/6  has-checked:hover:bg-b1/30 hover:inset-shadow-xs hover:inset-shadow-b3/70',
          ) ">
        <input
          v-if="shard.slot == 1"
          v-model="set.shards[1]"
          type="radio"
          :name="shard.slotName"
          class="peer hidden"
          @change="console.log(set)" />

        <input
          v-if="shard.slot == 2"
          v-model="set.shards[2]"
          type="radio"
          :name="shard.slotName"
          :value="shard"
          class="peer hidden" />
        <input
          v-if="shard.slot == 3"
          v-model="set.shards[3]"
          type="radio"
          :name="shard.name + shard.slot"
          :value="shard"
          class="peer hidden" />

        <component
          :is="`i-stats-${shard.icon}`" :alt="`shard-${shard.name}`"
          class="size-6 brightness-0 opacity-40 group-hover:opacity-100 group-hover:brightness-100 peer-checked:brightness-100  drop-shadow-md grayscale peer-checked:opacity-100 peer-checked:grayscale-0 group-hover:grayscale-0"
          :class="cn(shard.iconClass, `${shard.color}`)" />
      </label>
    </div>
  </Field>
</template>

<style scoped></style>
