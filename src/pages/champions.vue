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
        <h2>Champions</h2>
        <Separator />



      </div>

      <div class="grid-container c-grid">
        <div class="grid-item champ" v-for="champion in champions">

          <div class="grid-image-container champ">
            <div class="image-wrapper champ">
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
  </KeepAlive>
</template>

<style></style>
