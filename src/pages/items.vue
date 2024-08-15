<script setup lang="ts">
import { useDataStore } from "@/stores/dataStore";

const dataStore = useDataStore();

interface Item {
  name: string;
  img: string;
  buy: number;
  sell: number;
  stats: string;
  passive: string;
  active: string;
  type: string; // Assuming 'type' is a property in your JSON data
}

const items = dataStore.items;


</script>

<template>
  <KeepAlive>



    <div id="" class="main flex-1">
      <div role="tablist" class="tabs layout">
        <input type="radio" name="champ-tabs" role="tab" class="tab font-semibold" aria-label="Items" checked="true" />

        <div role="tabpanel" class="tab-content ">
          <div class="grid-container">


            <div class="grid-container item">
              <div class="grid-item" v-for="item in items">

                <div class="grid-image-container item">
                  <img v-if="item.type === 'item'" :src="item.img" :alt="item.name + ' Image'" class="grid-image" />
                  <span v-resize-text class="grid-tip">{{ item.name }}</span>
                </div>


              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </KeepAlive>
</template>



<style scoped>
.grid-container.item {
  grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(55x, 1fr));
}

.grid-item.item,
.grid-image-container.item {
  @apply h-[55px] w-[55px];
}
</style>
