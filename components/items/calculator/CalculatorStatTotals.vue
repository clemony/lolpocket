<script lang="ts" setup>
import { motion } from 'motion-v'

const checkedStats = ref([])

const is = useItemStore()
const ans = useAnalysisStore()
const stats = ref()
const stats2 = ref()

function mergeItemStats(set) {
  return set.reduce((mergedStats, item) => {
    if (item.stats) {
      for (const [stat, value] of Object.entries(item.stats)) {
        mergedStats[stat] = (mergedStats[stat] || 0) + value
      }
    }
    return mergedStats
  }, {})
}

const totalCost = ref()
const totalCost2 = ref()

function getTotalCost(set) {
  return set.reduce((sum, item) => sum + (item.buy || 0), 0)
}

watchEffect(() => {
  if (ans.calculateSet && !ans.isComparing) {
    stats.value = mergeItemStats(ans.calculateSet)
    totalCost.value = getTotalCost(ans.calculateSet)
  }
  else if (ans.isComparing == true) {
    stats.value = mergeItemStats(ans.calculateSet)
    totalCost.value = getTotalCost(ans.calculateSet)

    stats2.value = mergeItemStats(ans.calculateSet2)
    console.log('💠 - watchEffect - stats2.value:', stats2.value)

    totalCost2.value = getTotalCost(ans.calculateSet)
  }
})
</script>

<template>
  <div class="w-full">

      <!-- head -->
      <div class="w-full grid grid-cols-[40px_1fr_30px_30px]  bg-b2   border-y border-y-b3/50  z-1 py-2 *:text-2 items-center btn-depth">

          <div class="dst col-start-2 font-medium">
            STAT
          </div>
          <div class="dst  font-medium justify-center">
            {{ ans.isComparing ? '1' : 'TOTAL' }}
          </div>
          <div v-if="ans.isComparing" class="dst  justify-center font-medium">
            2
          </div>
   
      </div>

      <div class="overflow-y-auto w-full">
      <LayoutGroup>
        <motion.label :layout="true" v-for="stat in checkedStats" :key="stat.id" class="sticky top-0 left-0 bg-b1 border-b first:border-t last:!border-b-b3 border-b-b3/55 border-t-b3/60  cursor-pointer *:justify-start  z-1  grid grid-cols-[40px_1fr_30px_30px]  py-3 hover:border-y hover:border-y-b3/80 items-center hover:bg-b1/50  ">
          <!-- row 1 -->
      
                <input v-model="checkedStats" type="checkbox" class="peer hidden absolute" :value="stat" />
              <StatRowContents v-if="checkedStats.includes(stat)" :stat="stat" :item-stats="stats" :item-stats2="stats2">
              </StatRowContents>
  
        </motion.label>

     
          <template v-for="stat in itemStats" :key="stat.id">
            <motion.label :layout="true"  v-if="!checkedStats.includes(stat)" class="hover:bg-b2/60 first:border-t first:border-t-b3  cursor-pointer  py-3.5 has-checked:hidden w-full grid grid-cols-[40px_1fr_30px_30px] border-b-b3/40 border-b  items-center">
                  <input v-model="checkedStats" type="checkbox" class="peer hidden absolute " :value="stat" />
                <StatRowContents :stat="stat" :item-stats="stats" :item-stats2="stats2">
                </StatRowContents>
            
            </motion.label>
          </template>
   
      </LayoutGroup>
      </div>

     
    </div>
      <div class="w-full grid grid-cols-[40px_1fr_30px_30px]  bg-b2   border-y border-y-b3/50  z-1 py-2 *:text-2 items-center">
<div class="justify-center ml-4">
  <i-ui-gold  class="text-bc/80 size-6"/>
</div>
          <div class="dst col-start-2 font-medium">
           
            TOTAL GOLD
          </div>
          <div class="dst  font-medium justify-center">
            {{  totalCost }}
          </div>
          <div v-if="ans.isComparing" class="dst  font-medium justify-center">
             {{ totalCost2 }}
          </div>
     
  </div>
</template>