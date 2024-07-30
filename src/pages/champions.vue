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
      <!-- Search and Filter UI components -->
      <div class="grid-header">
        <h2>
          Champions</h2>




      </div>

      <div class="grid-container champ">
        <div class="grid-item champ" v-for="champion in champions">

          <div class="grid-image-container champ">
            <div class="image-wrapper">
              <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                class="grid-image champ" />

              <span class="grid-tip">
                <p v-resize-text="{ ratio: 1, minFontSize: '10px', maxFontSize: '16px', delay: 200 }">{{ champion.name
                  }}
                </p>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </KeepAlive>
</template>

<style></style>
