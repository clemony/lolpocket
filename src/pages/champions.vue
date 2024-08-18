<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { Icon } from "@iconify/vue";
import { Quotes } from "@/data/champQuotes.ts";

const dataStore = useDataStore();

let quotes = Quotes;

const randomQuote = computed(() => {
  return quotes[(Math.floor(Math.random() * quotes.length))];
});
console.log(randomQuote.value);

const getQuote = ref(randomQuote.value);


interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[];
  type: string;
  pImg: string;
  qImg: string;
  wImg: string;
  eImg: string;
  rImg: string;
  passive: string;
  q: string;
  w: string;
  e: string;
  r: string;
  passiveName?: string;
  passiveContext?: string;
  qName?: string;
  qContext?: string;
  wName?: string;
  wContext?: string;
  eName?: string;
  eContext?: string;
  rName?: string;
  rContext?: string;
}

const champions = dataStore.champions;
const selectedChampion = computed(() => dataStore.selectedChampion);

const query = ref('')

const searchList = computed(() => {
  return champions.filter((champion) => champion.name.toLowerCase().includes(query.value.toLowerCase()) /*|| champion.type.toLowerCase().includes(query.value) ||
    champion.title.toLowerCase().includes(query.value.toLowerCase())*/
  )
})

// Function to handle the drawer button click and set the selected champion
function handleChampionClick(champion: Champion) {
  dataStore.setSelectedChampion(champion);
}

</script>

<template>


  <!-- Champ Tab -->

  <div role="tablist" class="tabs layout !mx-0 !w-full border-b-transparent">

    <a role="tab" class="tab tab-active w-44 font-semibold">Champions</a>

    <div role="tabpanel" class="tab-content !w-full">
      <div class="grid-container !w-full mx-0 p-0">

        <div class="grid-item champ" v-for="(champion, index) in champions" :key="champion.name" :data-index="index">
          <label for="my-drawer-4" class="drawer-button cursor-pointer" @click="handleChampionClick(champion)">
            <div class="grid-image-container champ">
              <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                class="grid-image" />

              <div class="grid-tip">
                {{ champion.name }}
              </div>

            </div>

          </label>
        </div>
      </div>
    </div>
    <!--
        <a role="tab"
          class="tab font-mono italic !text-xs text-end text-base-content font-normal cursor-pointer pointer-events-none border-b-transparent">
          {{ getQuote }} </a>-->

  </div>




  <!--
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">

    </div>
  </div>

  <div class="drawer-side z-50 right-0 bottom-0 absolute">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="menu  bg-base-200 text-base-content min-h-full w-80 px-4 pt-8 shadow-inner shadow-neutral/20">
  >-->
</template>

<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));


  @apply gap-6;

  .grid-image {
    @apply !h-[94px] !w-[94px];
  }
}

.champ {
  @apply !h-[80px] !w-[80px];
}

.grid-tip {
  @apply max-w-[80px];
}


.linker:hover+div {
  opacity: 1;
  display: flex;
}
</style>
