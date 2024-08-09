<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
const dataStore = useDataStore();

interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[];
  type: string;
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
        <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <div v-if="selectedChampion">
            <h1>{{ selectedChampion.name }}</h1>
            <img :src="selectedChampion.img" :alt="selectedChampion.name" />
            <p>Title: {{ selectedChampion.title }}</p>
            <p>Tags: {{ selectedChampion.tags.join(', ') }}</p>
            <a :href="selectedChampion.wiki" target="_blank">More Info</a>
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
