<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { Icon } from "@iconify/vue";
const dataStore = useDataStore();

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

        <div id="" class="main flex-1">
          <div role="tablist" class="tabs">
            <input type="radio" name="champ-tabs" role="tab" class="tab font-semibold" aria-label="Champions"
              checked="true" />

            <div role="tabpanel" class="tab-content">
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


            <!-- Fave Tab -->

            <input type="radio" name="champ-tabs" role="tab" class="tab tab-2 w-64 font-normal text-2xl"
              aria-label="　 ♡ 　" />

            <div role="tabpanel" class=" tab-content bg-base-100 border-base-300 rounded-box p-6">
              <div class="grid-container c-grid">
                <!--<div class="grid-item champ" v-for="champion in faveChampions">

                  <div class="grid-image-container champ">
                    <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                      class="grid-image" />

                    <div class="grid-tip">
                      {{ champion.name }}
                    </div>
                  </div>
                </div>-->
              </div>


            </div>
          </div>
        </div>


      </div>

      <div class="drawer-side z-20">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="menu bg-base-200 text-base-content min-h-full w-80 px-4 pt-8 shadow-inner shadow-neutral/20">
          <!-- Sidebar content here -->
          <div v-if="selectedChampion" class="">

            <div
              class="rounded-box border border-neutral/5 bg-base-100 shadow-lg prose grid grid-cols-2 auto-rows-max py-3 px-1">
              <div class="col-span-2 grid grid-cols-3 p-1 auto-cols-max gap-1">
                <div class=" avatar h-16 justify-content-center col-start-1 ml-1 !aspect-square">
                  <div class="ring-[var(--primary)]  rounded-full ring-[2px] grid justify-content-center object-cover">

                    <img class="m-0 p-0 scale-110" :src="selectedChampion.img" :alt="selectedChampion.name" />
                  </div>
                </div>
                <div class="col-start-2 col-span-2">
                  <h1 class="serif  text-[1.7rem] mb-0 pb-1">{{ selectedChampion.name }}</h1>
                  <p class="text-xs tracking-wide align-middle uppercase pt-0 mt-0 pb-1">
                    <Icon icon="ph:at-bold" class="inline" />
                    {{ selectedChampion.title }}
                  </p>
                </div>
              </div>

              <div class="col-start-1">
                <a :href="selectedChampion.wiki" target="_blank" class="text-xs no-underline text-nowrap flex">wiki
                  <Icon icon="ph:arrow-square-out" />
                </a>
              </div>
              <div
                class="col-start-2 text-xs justify-content-end text-center justify-self-end relative right-3 flex gap-2">
                <code v-for="(tag, index) in selectedChampion.tags" :key="index"
                  class="tracking-normal lowercase text-xs w-auto h-max flex flex-nowrap text-center">#{{ tag }}</code>
              </div>
            </div>

            <div role="tablist" class="tabs tabs-lifted mt-5 w-[300px]">

              <input type="radio" name="ability-tabs" role="tab" class="tab-bg tab"
                :style="{ backgroundImage: `url(${selectedChampion.pImg})` }" aria-label="P" checked="true" />
              <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 
                ">
                Tab content 1
              </div>

              <input type="radio" name="ability-tabs" role="tab" class="tab-bg tab"
                :style="{ backgroundImage: `url(${selectedChampion.qImg})` }" aria-label="Q" />
              <div role="tabpanel" class="tab-content tab-sidebar-content">
                Tab content 2
              </div>

              <input type="radio" name="ability-tabs" role="tab" class="tab-bg tab"
                :style="{ backgroundImage: `url(${selectedChampion.wImg})` }" aria-label="W" />
              <div role="tabpanel" class="tab-content tab-sidebar-conten">
                Tab content 3
              </div>

              <input type="radio" name="ability-tabs" role="tab" class="tab-bg tab"
                :style="{ backgroundImage: `url(${selectedChampion.eImg})` }" aria-label="E" />
              <div role="tabpanel" class="tab-content tab-sidebar-conten">
                Tab content 3
              </div>

              <input type="radio" name="ability-tabs" role="tab" class="tab tab-bg"
                :style="{ backgroundImage: `url(${selectedChampion.rImg})` }" aria-label="R" />
              <div role="tabpanel" class="tab-content tab-sidebar-conten">
                Tab content 3
              </div>
            </div>

          </div>
          <div v-else>
            <p>Select a champion to view details.</p>
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

  .grid-image {
    @apply !h-[94px] !w-[94px];
  }
}

.champ {
  @apply !h-[80px] !w-[80px];
}
</style>
