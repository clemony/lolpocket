<route lang="json">{
  "name": "items",
  "alias": "/items",
  "meta": {
    "title": "items",
    "icon": "teenyicons:wand-outline"
  }
}</route>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useDataStore } from "../../stores/dataStore";

const ds = useDataStore();

interface Item {
  name: string;
  img: string;
  buy: number;
  sell: number;
  stats: string;
  passive: string;
  active: string;
  type: string;
  tier: string;
}

const items = ref<Item[]>([]);



console.log(ds.uniqueTiers);

// Populate runes array from data store on component mount
onMounted(() => {
  items.value = ds.getItems(); // Ensure `getRunes` returns the array of runes from the store
});

</script>

<template>
  <ItemGrid />
</template>

<style scoped></style>
