<script lang="ts" setup>
import { motion } from 'motion-v'

const checkedStats = ref([])

const stats = ref([])
const stats2 = ref([])

function mergeItemStats(set: number[]) {
  const mergedStats: Record<string, number> = {}

  for (const itemId of set) {
    const stats = itemStatRecord[itemId]
    if (!stats) continue

    for (const [stat, value] of Object.entries(stats)) {
      mergedStats[stat] = (mergedStats[stat] || 0) + value
    }
  }

  return mergedStats
}

const totalCost = ref<number>()
const totalCost2 = ref<number>()

function getTotalCost(set) {
  return set.reduce((sum, item) => sum + (item.buy || 0), 0)
}
const set1 = computed(() => is().calculatorSet)
const set2 = computed(() => is().calculatorSet2)
/* watchEffect(() => {
  if (set1.value && !is().isComparing) {
    stats.value = mergeItemStats(set1.value)
    totalCost.value = getTotalCost(set1.value)
  }
  else if (is().isComparing===true) {
    stats.value = mergeItemStats(set1.value)
    totalCost.value = getTotalCost(set1.value)

    stats2.value = mergeItemStats(set2.value)
    console.log('💠 - watchEffect - stats2.value:', stats2.value)

    totalCost2.value = getTotalCost(set2.value)
  }
}) */
</script>

<template>
  <div class="w-full overflow-hidden">
    <!-- head -->
    <div
      class="btn-depth z-1 grid h-13 w-full grid-cols-[40px_1fr_30px_30px] items-center py-2 *:text-sm"
    >
      <div class="col-start-2 font-medium dst">
        STAT
      </div>

      <div class="justify-center font-medium dst">
        {{ is().isComparing ? "1" : "TOTAL" }}
      </div>

      <div v-if="is().isComparing" class="justify-center font-medium dst">
        2
      </div>
    </div>

    <div class="w-full overflow-y-auto">
      <LayoutGroup>
        <!--  <motion.label
          :key="stat.id"
          class="border-t-b3/60 border-b-b3/55 bg-b1 last:border-b-b3! hover:border-y-b3/80 hover:bg-b1/50 sticky top-0 left-0 z-1 grid cursor-pointer grid-cols-[40px_1fr_30px_30px] items-center border-b py-3 *:justify-start first:border-t hover:border-y"
          :layout="true"
        >

          <input
            v-model="checkedStats"
            class="peer absolute hidden"
            type="checkbox"
            :value="stat"
          >

          <StatRowContents
            v-if="checkedStats.includes(stat)"
            :stat="stat"
            :item-stats="stats"
            :item-stats2="stats2"
          />
        </motion.label> -->

        <template v-for="stat in statIndex" :key="stat.id">
          <motion.label
            v-if="!checkedStats.includes(stat)"
            class="grid w-full cursor-pointer grid-cols-[40px_1fr_30px_30px] items-center border-b border-b-b3/40 py-3.5 first:border-t first:border-t-b3 hover:bg-b2/60 has-checked:hidden"
            :layout="true"
          >
            <input
              v-model="checkedStats"
              class="peer absolute hidden"
              type="checkbox"
              :value="stat"
            >

            <StatRowContents
              :stat="stat"
              :item-stats="stats"
              :item-stats2="stats2"
            />
          </motion.label>
        </template>
      </LayoutGroup>
    </div>

    <div
      class="z-1 grid h-13 w-full grid-cols-[40px_1fr_30px_30px] items-center border-y border-y-b3/50 py-2 *:text-sm"
    >
      <div class="ml-4 justify-center">
        <i-ui-gold class="size-6 text-bc/80" />
      </div>

      <div class="col-start-2 font-medium dst">
        TOTAL GOLD
      </div>

      <div class="justify-center font-medium dst">
        {{ totalCost }}
      </div>

      <div v-if="is().isComparing" class="justify-center font-medium dst">
        {{ totalCost2 }}
      </div>
    </div>
  </div>
</template>
