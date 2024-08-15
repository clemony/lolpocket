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
  <div id="" class="main flex-1">
    <div role="tablist" class="tabs layout">
      <input type="radio" name="champ-tabs" role="tab" class="tab after:w-32 font-semibold" aria-label="Items"
        checked="true" />

      <div role="tabpanel" class="tab-content ">


        <div class="grid-container">
          <div class="grid-item item" v-for="item in items">

            <div class="grid-image-container item">
              <img v-if="item.type === 'item'" :src="item.img" :alt="item.name + ' Image'" class="grid-image item" />
              <span v-resize-text class="grid-tip">{{ item.name }}</span>
            </div>


          </div>



        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(70px, 1fr));
}

.item {
  @apply h-[70px] w-[70px];
}
</style>
