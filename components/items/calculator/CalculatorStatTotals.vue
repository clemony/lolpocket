<script lang="ts" setup>
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
  <div class="  overflow-y-auto ">
    <table class="table">
      <!-- head -->
      <thead class="sticky top-0 left-0 bg-neutral/85 backdrop-blur-md text-nc border-b border-b-b2  z-1">
        <tr class="">
          <th class="min-w-10 w-32"></th>
          <th class="dst">
            STAT
          </th>
          <th class="dst">
            {{ ans.isComparing ? '1' : 'TOTAL' }}
          </th>
          <th v-if="ans.isComparing" class="dst">
            2
          </th>
          <th class=" w-28 dst">
            PIN
          </th>
        </tr>
      </thead>
      <LayoutGroup>
        <Motion :layout="true" as="tbody" class=" sticky top-10 left-0 bg-b2 border-b border-b-b2  z-1">
          <!-- row 1 -->
          <template v-for="stat in checkedStats" :key="stat.id">
            <Motion :layout="true" as="tr" class="hover:bg-b2/60">
              <StatRowContents v-if="checkedStats.includes(stat)" :stat="stat" :item-stats="stats" :item-stats2="stats2">
                <input v-model="checkedStats" type="checkbox" class="peer checkbox checkbox-neutral" :value="stat" />
              </StatRowContents>
            </Motion>
          </template>
        </Motion>

        <Motion :layout="true" as="tbody" class="z-0 ">
          <template v-for="stat in itemStats" :key="stat.id">
            <Motion :layout="true" as-child>
              <tr v-if="!checkedStats.includes(stat)" class="hover:bg-b2/60 has-checked:hidden">
                <StatRowContents :stat="stat" :item-stats="stats" :item-stats2="stats2">
                  <input v-model="checkedStats" type="checkbox" class="peer checkbox checkbox-neutral " :value="stat" />
                </StatRowContents>
              </tr>
            </Motion>
          </template>
        </Motion>
      </LayoutGroup>
      <tfoot class="sticky bottom-0 left-0 bg-neutral text-nc h-12 z-1 ">
        <tr class="">
          <td></td>
          <th class="dst pb-0.5">
            TOTAL GOLD
          </th>
          <th class="font-mono text-3 dst ">
            {{ totalCost }}
          </th>

          <th v-if="ans.isComparing" class="font-mono text-3 dst ">
            {{ totalCost2 }}
          </th>

          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>