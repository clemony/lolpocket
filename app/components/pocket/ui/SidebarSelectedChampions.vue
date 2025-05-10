<script lang="ts" setup>
import { motion } from 'motion-v'

const { pocket } = defineProps<{
  pocket: Pocket
}>()


const filteredChildChampions = computed (() => {
if (!pocket.champions || !pocket.champions.children || !pocket.champions.children.length || pocket.champions.children[0].id == 0 )
return null

return pocket.champions.children.filter(c => c.id != pocket.champions.default.id).slice(1,6)
})
console.log("💠 - filteredChildChampions:", filteredChildChampions)

</script>

<template>
  <motion.div class="grid w-full field-box aspect-square  p-2 gap-1 ">
    <template v-if="filteredChildChampions" >
      <Champion v-if="pocket.champions?.default" :champ-key="pocket.champions?.default?.key" :name="pocket.champions?.default?.key" >
      </Champion>
    <Champion v-for="champion in filteredChildChampions" :champ-key="champion?.key"  :name="champion?.key" />
    </template>

   <i-lol-champ v-else  />
  </motion.div>
</template>