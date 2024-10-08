<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { useRouter } from 'vue-router';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
const router = useRouter();

const is = useItemStore();
const ps = usePocketStore();
const rs = useRuneStore();



const pinnedPockets = computed(() => {
  let filtered = ps.pockets;
  filtered = filtered.filter((pocket) => pocket.pinned == true);
  return filtered;
});

const pinnedHeight = computed(() => {
  const l = pinnedPockets.value.length;
  return l * 56;
});

const pinnedHeightPercentage = computed(() => {
  const totalAvailableHeight = window.innerHeight - 250; // Adjust this as per your layout's available space
  return Math.min((pinnedHeight.value / totalAvailableHeight) * 100, 70); // Max 70% or dynamically calculated
});

const generalPockets = computed(() => {
  let filtered = ps.pockets;
  filtered = filtered.filter((pocket) => pocket.pinned == false);
  return filtered;
});




const horizontal = ref(true)



</script>
<template>

  <div class="w-full h-full px-3 py-4 ">

    <div class="grid w-full gap-4 px-4 mb-4 h-fit">
      <div class="flex items-center gap-3">
        <div class="flex items-center text-sm breadcrumbs grow">
          <ul class="">
            <li><a>Pockets</a></li>
            <li>All</li>
          </ul>
        </div>



        <div class="join">
          <button
            class="relative join-item btn btn-sm *:size-4 after:size-5 items-center flex justify-center  *:absolute *:transition-all *:duration-300"
            alt="Trash" title="Trash">
            <icon icon="iconoir:bin" class="" />
            <icon icon="iconoir:bin-full" class="opacity-0" />

          </button>

          <button class="join-item btn btn-sm" alt="Archive" title="Archive">
            <icon icon="fluent:archive-20-regular" class="size-5" />
          </button>
        </div>

        <VDropdown :overflow-padding="20" :shift="true" theme="overlay" class="new-pocket">
          <button class="text-xs btn btn-sm btn-neutral hover:opacity-80 ">
            <icon icon="teenyicons:folder-plus-outline" class=" size-4.5 mr-0.5 pr-0.5 " />
            <span class="font-medium">
              New Pocket
            </span>
          </button>


          <template #popper>
            <a v-close-popper class="absolute w-screen h-screen"></a>

            <PopPocket :title="'New Pocket'" :button="'Create'" />

          </template>
        </VDropdown>


      </div>
      <div class="flex items-center w-full">
        <h2 class="text-xl font-semibold tracking-tight grow ">
          Pockets
        </h2>

        <!-- 
        <button @click="horizontal = !horizontal">Switch to {{ horizontal ? 'Vertical' : 'Horizontal' }}</button> -->


      </div>

    </div>

    <div class="absolute w-[90%] left-20 top-[120px]">
      <PocketMenu />

    </div>

    <splitpanes horizontal
      class="default-theme flex flex-col transition-all duration-500  max-h-[calc(100%-110px)] h-[calc(100%-90px)] items-end"
      id="pocketSplit">

      <pane v-if="pinnedPockets.length > 0"
        class="relative flex flex-col h-auto pt-3 overflow-x-auto overflow-y-hidden scrollbar-hide "
        :style="{ maxHeight: `${pinnedHeightPercentage}%` }">


        <div class=" left-0 h-7 gap-3  flex items-center pointer-events-none absolute -top-[0px] z-20 brightness-[98%]">

          <label class="flex items-center justify-start swap swap-flip">
            <div class='text-xs font-medium tab opacity-60 '> Pinned
            </div>

            <input type="checkbox" v-model="ps.statePinned" true-value="70" false-value="3.9" />

            <icon icon="teenyicons:down-small-outline" class="swap-off" />
            <icon icon="teenyicons:up-small-outline" class='swap-on' />


          </label>

        </div>
        <div
          class="flex flex-col justify-end flex-grow mt-[15px]  overflow-y-auto border   border-base-300 rounded-box">
          <PocketGrid :pocketArray="pinnedPockets" arrayName="pinnedPockets" class="overflow-auto" />
        </div>

      </pane>


      <pane class="flex-grow h-full overflow-auto scrollbar-hide " min-size="30">

        <div class='-mt-[7px] w-full h-6 gap-3  py-0.5 flex pointer-events-none items-center  '>

          <label class="relative flex justify-start gap-2 pointer-events-auto swap swap-flip">

            <input type="checkbox" v-model="ps.stateNoCat" true-value="70" false-value="3.9" />

            <icon icon="teenyicons:down-small-outline" class="absolute swap-off" />
            <icon icon="teenyicons:up-small-outline" class='absolute swap-on' />
            <div class='pl-4 text-xs font-medium opacity-60'> General
            </div>
          </label>


          <div class="self-start border-b pointer-events-none border-b-base-300 h-1/2 grow"></div>
        </div>

        <PocketGrid :pocketArray="generalPockets" arrayName="generalPockets" class='overflow-auto' />

      </pane>
    </splitpanes>
  </div>

  <!--   <div class="grid w-full pt-4 place-items-center ">
    <div class=" *:text-xs  join join-horizontal">
      <button class="join-item btn btn-sm">«</button>
      <button class="join-item btn btn-sm">Page 1</button>
      <button class="join-item btn btn-sm">»</button>
    </div>
  </div> -->
</template>

<style>
.v-popper--shown.new-pocket button {
  @apply opacity-80;
}
</style>