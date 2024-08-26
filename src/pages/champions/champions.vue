<script setup lang="ts">
import { useDataStore } from "@stores/dataStore";
import { Icon } from "@iconify/vue";
import { Quotes } from "@stores/champQuotes.ts";
import { ref, computed, onMounted } from "vue";
import { useUserSettings } from "../../stores/userSettings";
const dataStore = useDataStore();
const userSettings = useUserSettings();

const tabSize = userSettings.dataTabSize;

let quotes = Quotes;

const randomQuote = computed(() => {
  return quotes[Math.floor(Math.random() * quotes.length)];
});
console.log(randomQuote.value);

const getQuote = ref(randomQuote.value);

interface Ability {
  key: string;
  name: string;
  context: string;
  img: string;
  data: Record<string, string>;
}

interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[];
  type: string;
  abilities: {
    passive: Ability;
    q: Ability;
    w: Ability;
    e: Ability;
    r: Ability;
  };
}

const keysToDisplay = ["COST:", "COOLDOWN:", "STATIC COOLDOWN:"];

const filteredData = (data: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => keysToDisplay.includes(key)),
  );
};

const champions = dataStore.champions;
const selectedChampion = computed(() => dataStore.selectedChampion);

console.log(selectedChampion);

const checkedAbilities = ref<string[]>([]);

const uncheckAbilities = () => {
  checkedAbilities.value = [];
};

const query = ref("");

const searchList = computed(() => {
  return champions.filter(
    (champion) =>
      champion.name
        .toLowerCase()
        .includes(
          query.value.toLowerCase(),
        ) /*|| champion.type.toLowerCase().includes(query.value) ||
    champion.title.toLowerCase().includes(query.value.toLowerCase())*/,
  );
});

// Function to handle the drawer button click and set the selected champion
function handleChampionClick(champion: Champion) {
  dataStore.setSelectedChampion(champion);
}
</script>

<template>
  <!-- Champ Tab -->

  <div class="grid-container w-full scroll-none mx-0 p-0">
    <div class="grid-item champ" v-for="(champion, index) in champions" :key="champion.name" :data-index="index">
      <label for="my-drawer-4" class="drawer-button cursor-pointer" @click="handleChampionClick(champion)">
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

</template>

<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));

  @apply gap-[1%];

  .grid-image {
    @apply !h-[94px] !w-[94px];
  }
}

.champ {
  @apply !h-[80px] !w-[80px];
}

.grid-tip {
  @apply max-w-[80px];
}

.linker:hover+div {
  opacity: 1;
  display: flex;
}
</style>
