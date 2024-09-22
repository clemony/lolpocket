<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { useItemStore } from '../../stores/itemStore';
import { useDataStore } from '../../stores/dataStore';
import type { Rune } from '../../stores/dataStore';
import { useRuneStore } from '../../stores/runeStore';
const rs = useRuneStore();

const ds = useDataStore();
const is = useItemStore();
const fs = ds.getShards();
const runes = ds.runes;

const colorClass = computed((n) => {
  return 'v' + rs.selectedSetKey + n;
});

onMounted(() => {
  const ds = useDataStore();
  const is = useItemStore();
  const fs = ds.getShards();
  console.log(fs);
  if (rs.runeSets.length < 1) {
    rs.newRuneSet();
    rs.defaultSet = rs.runeSets[0].key;
  }
});
</script>

<template>

  <Splitpanes id="runeSidebarSplit"
    class="default-theme px-6 pb-4 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
    <Pane max-size="100" size="73" min-size="73">
      <div class="flex justify-end gap-10 px-10">


        <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

        <div
          class="rounded-box w-[350px] min-w-[350px] overflow-hidden border transition-all duration-300 ease border-base-300 shadow-warm relative gradient h-fit max-h-fit"
          :class="rs.selectedPaths.pathselect1">
          <div class="bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100 h-full">
            <!-- Only render the selected rune set -->
            <RunePath :data="rs.uniquePaths1" select-identifier="pathselect1" />
            <RuneGrid :set="1" />
          </div>
        </div>

        <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

        <div>
          <div
            class="w-[350px] min-w-[350px] shadow-warm rounded-box border border-base-300 relative overflow-hidden h-fit max-h-fit gradient"
            :class="rs.selectedPaths.pathselect2">
            <div class="bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 h-full px-2">
              <RunePath :data="rs.uniquePaths2" select-identifier="pathselect2" />
              <div class="z-50">
                <RuneGrid :set="2" />
              </div>
            </div>
          </div>

          <!----------------------------------- SHARDS --------------------------------- */ -->

          <div class="relative mt-6 border shadow-warm rounded-box border-base-300 h-fit max-h-fit">
            <div class="w-full h-full px-6 py-8 shadow-soft-in">
              <RuneShards />
            </div>
          </div>
        </div>

      </div>
    </Pane>
    <Pane size="27" max-size="27" min-size="27" class="relative max-h-full ">

      <div class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative overflow-hidden">
        <RuneSets />
      </div>


    </Pane>

  </Splitpanes>

</template>

<style>
/* ] */
.focus-hover:focus,
.focus-hover:hover,
.focus-hover:focus-within {
  @apply [&_button]:opacity-100 grow border-base-300 bg-base-100/50 shadow-inner ring-offset-base-content/40;
}
</style>
