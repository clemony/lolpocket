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
    <div id="" class="main flex-1">
      <div class="">
        <div role="tablist" class="tabs tabs-lg tabs-lifted w-full mr-4 ">
          <input type="radio" name="champ-tabs" role="tab" class="tab w-1/5 font-semibold" aria-label="Champions"
            checked="true" />

          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="grid-container c-grid">
              <div class="grid-item champ" v-for="champion in champions">

                <div class="grid-image-container champ">
                  <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                    class="grid-image" />

                  <div class="grid-tip">
                    {{ champion.name }}
                  </div>

                </div>

              </div>
            </div>


          </div>




          <input type="radio" name="champ-tabs" role="tab" class="tab w-1/5 font-semibold" aria-label="♡ Loved"
            checked="true" />

          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="grid-container c-grid">
              <div class="grid-item champ" v-for="champion in champions">

                <div class="grid-image-container champ">
                  <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                    class="grid-image" />

                  <div class="grid-tip">
                    {{ champion.name }}
                  </div>

                </div>

              </div>
            </div>


          </div>

        </div>
      </div>



    </div>
  </KeepAlive>
</template>

<style></style>
