<script lang="ts" setup>
const checkedStats = ref([])

const stats = ref(itemStats)
const gold = ref(statTotalGold)
const list = [stats.value, gold.value]
</script>

<template>
  <div class=" absolute inset-0 overflow-y-auto ">
    <table class="table">
      <!-- head -->
      <thead class="sticky top-0 left-0 frost border-b border-b-b2  z-1">
        <tr class="">
          <th class="min-w-10 w-32"></th>
          <th class="">
            STAT
          </th>
          <th>TOTAL</th>
          <th class=" w-28">
            PIN
          </th>
        </tr>
      </thead>
      <tbody class="z-0 sticky top-10 left-0 frost border-b border-b-b2  z-1">
        <!-- row 1 -->
        <template v-for="stat in checkedStats" :key="stat.id">
          <tr class="hover:bg-b2/60">
            <StatRowContents :stat="stat">
              <input v-model="checkedStats" type="checkbox" class="peer hidden" :value="stat" />
            </StatRowContents>
          </tr>
        </template>
      </tbody>

      <tbody class="z-0 ">
        <template v-for="stat in itemStats" :key="stat.id">
          <template v-if="useArrayIncludes(checkedStats, stat)">
            <tr class="hover:bg-b2/60 sticky">
              <StatRowContents :stat="stat">
                <input v-model="checkedStats" type="checkbox" class="peer hidden" :value="stat" />
              </StatRowContents>
            </tr>
          </template>
        </template>
      </tbody>

      <tfoot class="sticky bottom-0 left-0 frost z-1 border-t border-t-b2 ">
        <tr class="">
          <td></td>
          <td></td>
          <th class="dst pb-0.5">
            TOTAL GOLD
          </th>
          <th class="font-mono text-3 dst">
            1345
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>