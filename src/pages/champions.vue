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
    <div id="main" class="flex-1">
      <div class="grid-header">
        <div role="tablist" class="tabs tabs-lg tabs-lifted w-full">
          <a role="tab" name="champions" class="tab tab-active">
            <h2 class="px-5">Champions</h2>
          </a>

          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-r-box rounded-bl-box p-4 w-full">
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
