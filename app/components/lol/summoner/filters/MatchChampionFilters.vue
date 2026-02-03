<script lang="ts" setup>
import { motion } from 'motion-v'

const { champions } = storeToRefs(s_data())

const cModel = shallowRef<string>(null)
</script>

<template>
  <UCard variant="muted" :ui="{ body: ' flex flex-col gap-1 ', root: 'p-2' }">
    <motion.div
      layout="position" class="size-full" :transition="{
        ease: 'easeInOut',
        staggerChildren: 0.1 }"
    >
      <UButton
        v-for="item in champions.values()"
        :key="item.championId"
        variant="ghost"
        color="primary"
        :ui="{
          base: 'flex fx-0 pr-2 justify-between items-center',
        }"
        size="xl" :for="item.championName" as="label" class="" @update:model-value="() => {
          s_matches().setFilter('champion', cModel)
          console.log('hihihi', s_matches().filter)
        }"
      >
        <UUser
          :name="item.championName"
          :description="`${item.kda} kda`"
          :ui="{
            wrapper: 'text-start items-center',
            avatar: 'size-11',
          }"
          :avatar="{
            src: `/img/champions/${item.championId}.webp`,
            icon: 'lol:champ',
          }"
        />

        <div class="flex items-center gap-2 w-max">
          <div class="grid grid-rows-2 py-1.5 text-xs text-end ">
            <span class="text-nowrap ">
              {{ item.wins }} win
            </span>

            <p class="text-nowrap ">
              {{ Number(item.games) - Number(item.wins) }} loss
            </p>
          </div>
          <div
            class="z-0 grid w-16 shrink-0 place-items-center justify-end"
          >
            <ChampWinrate :champion="item" />
          </div>
        </div>
      </UButton>
      <LilKrug v-if="!champions?.length" />
    </motion.div>
  </UCard>
</template>
