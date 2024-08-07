<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { Icon } from "@iconify/vue";
import { ref } from 'vue';

const dataStore = useDataStore();
const champions = dataStore.champions;

// State to manage the selected tab
const selectedTab = ref("champion");
</script>

<template>
  <KeepAlive>
    <div id="main" class="main flex-1">
      <div>
        <!-- Add the `value` prop to Tabs and bind it to selectedTab -->
        <Tabs v-model:value="selectedTab" role="tabslist" class="">
          <TabsList>
            <!-- Provide value to each TabsTrigger to link with TabsContent -->
            <TabsTrigger :value="'champion'">
              <div role="tab" class="tab">Champions</div>
            </TabsTrigger>
            <TabsTrigger :value="'loved'">
              <div role="tab" class="tab">
                <Icon icon="ph:heart-straight" />
              </div>
            </TabsTrigger>
          </TabsList>

          <!-- Bind `value` to TabsContent to match the current selected tab -->
          <TabsContent value="champion" role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="grid-container c-grid">
              <div class="grid-item champ" v-for="champion in champions" :key="champion.name">
                <div class="grid-image-container champ">
                  <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                    class="grid-image" />
                  <div class="grid-tip">{{ champion.name }}</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loved" role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="grid-container c-grid">
              <div class="grid-item champ" v-for="champion in champions" :key="champion.name">
                <div class="grid-image-container champ">
                  <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                    class="grid-image" />
                  <div class="grid-tip">{{ champion.name }}</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </KeepAlive>
</template>

<style>
/* Add any additional styles here */
</style>