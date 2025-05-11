<script lang="ts" setup>
import { computed } from 'vue'
import { motion } from 'motion-v'

const { pocket, championData } = defineProps<{
  pocket: Pocket
championData: ChampionRecord
}>()


</script>

<template>
  <motion.div class="grid w-full place-items-center bg-!b2 grid-cols-2 field-box border-b3/60 h-32 p-3 gap-2">

        <template v-if="pocket?.champions && pocket?.champions?.length">
      <ChampionSplash
        v-for="champion in pocket?.champions"
        :key="championData[champion].key"
        :url="championData[champion].splash"
        :name="championData[champion].key"  class="aspect-auto border-b3 border"/>
        </template>

    <i-lol-champ v-else class="size-8" />
  </motion.div>
</template>