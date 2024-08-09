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

</script>

<template>
  <KeepAlive>
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle hidden" />
      <div class="drawer-content">

        <!-- Champ Tab -->

        <div id="" class="main flex-1">
          <div role="tablist" class="tabs">
            <input type="radio" name="champ-tabs" role="tab" class="tab font-semibold" aria-label="Champions"
              checked="true" />

            <div role="tabpanel" class="tab-content">
              <div class="grid-container">

                <div class="grid-item champ" v-for="champion in champions">
                  <label for="my-drawer" class="drawer-button cursor-pointer">
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

      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay z-10"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-20">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
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
