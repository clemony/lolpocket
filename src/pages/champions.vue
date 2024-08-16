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

// Function to handle the drawer button click and set the selected champion
function handleChampionClick(champion: Champion) {
  dataStore.setSelectedChampion(champion);
}

</script>

<template>
  <KeepAlive>
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle hidden" />
      <div class="drawer-content z-10">

        <!-- Champ Tab -->

        <div id="" class="">

          <div role="tablist" class="tabs layout !mr-0 w-full border-b-transparent">

            <a role="tab" class="tab tab-active w-44 font-semibold">Champions</a>

            <div role="tabpanel" class="tab-content ">
              <div class="grid-container">

                <div class="grid-item champ" v-for="champion in champions">
                  <label for="my-drawer" class="drawer-button cursor-pointer" @click="handleChampionClick(champion)">
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
            <input type="radio" name="champ-tabs" role="tab"
              class="tab font-semibold w-full after:w-full after:font-mono after:italic after:text-xs after:text-end after:text-base-content after:font-normal after:cursor-pointer pointer-events-none border-b-transparent"
              :aria-label="getQuote" disabled />

          </div>
        </div>


      </div>

      <div class="drawer-side z-20">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="menu  bg-base-200 text-base-content min-h-full w-80 px-4 pt-8 shadow-inner shadow-neutral/20">
          <!-- Sidebar content here -->
          <div v-if="selectedChampion" class="">

            <div
              class="rounded-box border border-neutral/10 bg-base-100 shadow-lg prose grid grid-cols-2 auto-rows-max py-3 px-1">
              <div class="col-span-2 grid grid-cols-3 p-1 auto-cols-max gap-1">
                <div
                  class="align-self-start avatar h-16 justify-content-center col-start-1 -mt-1.5 ml-1.5 !aspect-square  relative">
                  <div class="rounded-full  grid justify-content-center object-contain z-0 my-auto h-16 w-16">

                    <!--<img class="m-0 p-0 scale-125" :src="selectedChampion.img" :alt="selectedChampion.name" />-->

                    <svg role="none" class="w-full h-full z-10">
                      <mask id="circle">
                        <circle fill="white" cx="60" cy="60" r="100"></circle>
                        <circle fill="black" cx="86%" cy="86%" r="13"></circle>
                      </mask>
                      <g mask="url(#circle)">
                        <image x="-6px" y="-6px" height="115%" width="115%" class="max-w-[115%] "
                          :href="selectedChampion.img">
                        </image>
                        <circle fill="none" cx="60" cy="60" r="100" stroke="rgba(0,0,0,0.1)" stroke-width="2">
                        </circle>
                      </g>
                    </svg>

                    <div
                      class="absolute grid place-items-center tooltip tooltip-bottom rounded-full  size-7 -bottom-[5px] -right-[5px] glow before:text-xs"
                      data-tip="view on Wiki">
                      <a :href="selectedChampion.wiki" target="_blank"
                        class="badge flex  bg-base-content text-base-100 size-[22px] border-none object-cover overflow-hidden p-[3px] aspect-square z-10 cursor-pointer ring-[3px] ring-base-100 hover:ring-transparent">

                        <Icon icon="ph:link-simple" class="" />

                      </a>

                    </div>
                  </div>


                </div>
                <div class="col-start-2 col-span-2">
                  <h1 class=" font-semibold font-serif text-[1.4rem] mb-0 pb-1">{{ selectedChampion.name }}</h1>
                  <p
                    class="text-xs flex text-pretty tracking-wide place-items-center uppercase pt-0 mt-0 pl-[11px] -indent-[11px] pb-0 mb-2">
                    @{{ selectedChampion.title }}
                  </p>
                </div>
              </div>


              <div
                class="col-start-2 text-xs justify-content-end text-center justify-self-end relative right-3 flex gap-2 pb-1">
                <code v-for="(tag, index) in selectedChampion.tags" :key="index"
                  class="tracking-normal lowercase text-xs w-auto h-max flex flex-nowrap text-center font-mono"
                  :data-tag="tag">#{{ tag }}</code>
              </div>
            </div>


            <div
              class="ability-wrapper join join-vertical w-full bg-base-100 rounded-box mt-5 shadow-lg shadow-neutral/20">

              <div class="collapse collapse-arrow join-item ">
                <input type="checkbox" name="ability-accordion" />
                <div class="collapse-title">
                  <img :src="selectedChampion.pImg" :alt="selectedChampion.passiveName" />
                  <div>{{ selectedChampion.passiveName }}</div>
                  <kbd class="kbd">P</kbd>
                </div>
                <div class="collapse-content">
                  <p>{{ selectedChampion.passiveContext }}</p>
                </div>
              </div>

              <div class="collapse collapse-arrow join-item ">
                <input type="checkbox" name="ability-accordion" />
                <div class="collapse-title">
                  <img :src="selectedChampion.qImg" :alt="selectedChampion.qName" />
                  <div>{{ selectedChampion.qName }}</div>
                  <kbd class="kbd">Q</kbd>
                </div>
                <div class="collapse-content">
                  <p>{{ selectedChampion.qContext }}</p>
                </div>
              </div>

              <div class="collapse collapse-arrow join-item ">
                <input type="checkbox" name="ability-accordion" />
                <div class="collapse-title">
                  <img :src="selectedChampion.wImg" :alt="selectedChampion.wName" />
                  <div>{{ selectedChampion.wName }}</div>
                  <kbd class="kbd">W</kbd>
                </div>
                <div class="collapse-content">
                  <p>{{ selectedChampion.wContext }}</p>
                </div>
              </div>
              <div class="collapse collapse-arrow join-item">
                <input type="checkbox" name="ability-accordion" />
                <div class="collapse-title">
                  <img :src="selectedChampion.eImg" :alt="selectedChampion.eName" />
                  <div>{{ selectedChampion.eName }}</div>
                  <kbd class="kbd">E</kbd>
                </div>
                <div class="collapse-content">
                  <p>{{ selectedChampion.eContext }}</p>
                </div>
              </div>
              <div class="collapse collapse-arrow join-item ">
                <input type="checkbox" name="ability-accordion" :alt="selectedChampion.rName" />
                <div class="collapse-title">
                  <img :src="selectedChampion.rImg" />
                  <div>{{ selectedChampion.rName }}</div>
                  <kbd class="kbd">R</kbd>
                </div>
                <div class="collapse-content">
                  <p>{{ selectedChampion.rContext }}</p>
                </div>
              </div>




            </div>

          </div>
          <div v-else>
            <p>Select something.</p>
          </div>
        </div>
      </div>
    </div>
  </KeepAlive>
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
