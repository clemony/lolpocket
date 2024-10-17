<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { useRuneStore } from '../../stores/runeStore';
import { usePocketStore } from '../../stores/pocketStore';
import { useRoute } from 'vue-router';
const rs = useRuneStore();


const ps = usePocketStore();


const route = useRoute();
const props = defineProps<{
  pocketKey: string;
}>()

// Reactive reference for the pocket
const pocket = ref(ps.getPocket(props.pocketKey));

// Sync with the latest data from the store when the component is mounted
onMounted(() => {
  if (pocket.value) {
    // Fetch the latest pocket data using the provided pocketKey
    const latestPocket = ps.getPocket(props.pocketKey);
    if (latestPocket) {
      pocket.value = latestPocket;
    }

    // Ensure new runes are set up if none exist
    if (pocket.value.runes[0].runeSets.length === 0) {
      rs.newRuneSet();
    }
  }
});

// Watch for changes in the route's pocketKey and update the local state
watch(() => route.params.pocketKey, (newKey) => {
  if (newKey) {
    const updatedPocket = ps.getPocket(newKey);
    if (updatedPocket) {
      pocket.value = updatedPocket;
    }
  }
});

// Watch for props pocketKey changes and update pocket data
watch(() => props.pocketKey, (newKey) => {
  if (newKey) {
    const updatedPocket = ps.getPocket(newKey);
    if (updatedPocket) {
      pocket.value = updatedPocket;
    }
  }
});

</script>

<template>
  <div v-if="pocket" class="w-full h-full pt-8 overflow-y-scroll bg-base-200/20 overscroll-none ">

    <!-------------------------------- HEADER --------------------------------->

    <div
      class="border-b-base-300 border-b frost  absolute z-40 top-0 left-0 items-center flex w-full justify-end gap-4 !h-fit flex-wrap py-1 px-2">
      <h2 class="justify-start sub-text grow">Rune Sets</h2>
      <button class="relative items-center h-full font-normal border-none rounded-md btn btn-xs btn-outline"
        @click="rs.newRuneSet(pocket.key)">
        <Icon icon="teenyicons:add-solid" class="self-center size-3 -mt-[2px]" />
        new set
      </button>
    </div>

    <!-------------------------------⟢ SETS ⟣-------------------------------->

    <div class="z-0 flex flex-col overflow-y-scroll ">
      <VueDraggable class="grid overflow-hidden" tag="div" v-model="pocket.runes[0].runeSets" group="sets"
        dragClass="setDrag" direction="vertical">

        <label v-for="(set, index) in pocket.runes[0].runeSets" :key="set.key" :class="set.primary" class="gradient cursor-pointer pointer-events-auto  grid items-center overflow-hidden h-16  overlay z-0 relative transition-all duration-1000 
          
          after:z-10 after:h-full after:absolute after:w-[200%] after:right-0 after:bg-gradient-to-r  after:from-base-200/30 after:via-base-200 after:via-55% after:to-base-200  odd:after:brightness-[108%] even:after:brightness-[106%]
          
          hover:after:-right-1/2 has-[#runeSets:checked]:after:-right-full">

          <div
            class="z-20 flex items-center w-full h-full gap-4 p-2 transition-all duration-200 bg-right border-b group bg-clip-padding border-base-200">

            <input type="radio" :value="index" id="runeSets" v-model="pocket.runes[0].selected" class="hidden peer"
              @change="console.log(pocket.runes[0].selected)" />

            <!-----------------------------⟢ DRAG ⟣-------------------------------->



            <div
              class="grid grid-cols-[repeat(3,_3rem)] py-1 ml-1 peer-checked:[&_#blank]:ring-neutral/15 opacity-75 grayscale-[0.25] peer-checked:grayscale-0 group-hover:grayscale-0 group-hover:opacity-95 peer-checked:[&_#blank]:opacity-80 items-center justify-center peer-[:checked]:opacity-100 place-items-center justify-self-center transition-all duration-300">
              <img v-if="set.keystone != 'none' && set.keystone != '' && set.keystone != undefined"
                :src="set.keystone.img" class="h-11 drop-shadow-soft" />
              <img v-else src="/img/runes/blankRune.webp"
                class="h-8 rounded-full ring-1 ring-base-300/90 opacity-70 group-hover:opacity-90" id="blank" />
              <img v-if="set.secondary != 'none' && set.secondary != '' && set.secondary != undefined"
                :src="'/img/runes/' + set.secondary + '.webp'" class="drop-shadow-softer h-9 p-1.5" />
              <img v-else src="/img/runes/blankRune.webp"
                class="h-8 rounded-full ring-1 ring-base-300/90 opacity-70 group-hover:opacity-90" id="blank" />

            </div>
            <div class="text-sm grow"><!-- {{ set.name }} --></div>

            <!-----------------------------⟢ menu ⟣-------------------------------->
            <label class="group/star *:transition-all  *:duration-300  h-full w-4  *:h-full grid place-content-center  cursor-pointer relative 
              
">

              <input type="radio" name="defaultDisplayRunes" :value="index" class="hidden peer"
                v-model="pocket.runes[0].starred" />
              <icon icon="iconoir:star-outline"
                class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20" />
              <icon icon='iconoir:star-solid'
                class="absolute z-0 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80"
                id="solid" />

            </label>

            <button
              class="flex items-center justify-center py-1 opacity-50 hover:bg-base-200 hover:opacity-100 rounded-btn justify-self-end"
              alt="menu">
              <icon icon='teenyicons:more-vertical-outline' class="size-5" />
            </button>

            <!--   
                          <div
              class="grid grid-cols-3 *:aspect-square *:size-5 *:rounded-btn *:text-base-content/80 *:transition-all *:flex *:justify-center *:items-center *:duration-300 gap-1.5">  <button class="hover:bg-base-200" alt="Clear Items" title="Clear Items" @click="rs.resetRunes()">
                <icon icon="teenyicons:clockwise-outline" class="size-[0.8rem] pb-[2px]" />
              </button>

              <button
                class="disabled:bg-transparent hover:bg-base-200 disabled:hover:bg-transparent disabled:opacity-40"
                alt="Delete Set" title="Delete Set" @click="rs.deleteSet(set.key)" :disabled="rs.runeSets.length == 1">
                <icon icon="ph:trash-light" class="size-3.5" />
              </button>
            </div> -->
          </div>
          <!-- <div class="h-[1px] w-full"></div> -->
        </label>
      </VueDraggable>
    </div>
  </div>
</template>

<style scoped>
.overlay:after {
  content: '';


  @apply transition-all duration-500;

}

#bghover:hover .overlay:after {
  @apply !-right-[50%];
}
</style>
