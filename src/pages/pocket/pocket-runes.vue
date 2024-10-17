<route lang="json">{
  "props": true,
  "path": "/pocket/:pocketKey/pocket-runes",
  "component": "/src/pages/pocket/pocket-runes.vue",
  "meta": {
    "title": "Pocket",
    "icon": "teenyicons:folder-outline"
  }
}</route>

<script setup lang="ts">
import { onMounted, ref, computed, watch, watchEffect } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { useRoute } from 'vue-router';

const route = useRoute();

const ps = usePocketStore();


const pocketKey = ref(route.params.pocketKey || '');

const props = defineProps<{
  pocketKey: string;
}>();

const pocket = computed(() => {
  return ps.getPocket(route.params.pocketKey);
});

const selected = computed(() => {

  if (!pocket) return;
  return pocket.value.runes[0].runeSets[pocket.value.runes[0].selected];
});

const primary = computed(() => {
  return selected.value.primary;
});

const secondary = computed(() => {
  console.log(selected.value.secondary);
  return selected.value.secondary;

});

// Watch for changes in the route's pocketKey and update the local state
watch(() => route.params.pocketKey, (newKey) => {
  pocketKey.value = newKey;

});




onMounted(() => {


});





</script>

<template>

  <Splitpanes id="runeSidebarSplit"
    class="default-theme px-6 pb-4 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
    <Pane max-size="100" size="73" min-size="73">
      <div v-if="selected" class="flex justify-end gap-10 px-10">


        <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

        <div
          class="rounded-box w-[350px] min-w-[350px] overflow-hidden border transition-all duration-300 ease border-base-300 shadow-warm relative gradient h-fit max-h-fit"
          :class="primary">
          <div class=" bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100 h-full">

            <RuneSelect :pocketKey="props.pocketKey" :set="1" />
          </div>
        </div>

        <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

        <div>
          <div :class="secondary"
            class="w-[350px] min-w-[350px] shadow-warm rounded-box border border-base-300 relative overflow-hidden h-fit max-h-fit gradient">
            <div class="bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 h-full px-2">

              <RuneSelect :pocketKey="props.pocketKey" :set="2" />

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
        <RuneSets :pocketKey="props.pocketKey" />
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
