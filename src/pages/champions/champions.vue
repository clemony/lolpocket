<route lang="json">{
  "name": "Champions",
  "alias": "/champions/champions",
  "meta": {
    "title": "Champions",
    "icon": "teenyicons:ghost-outline"
  }
}</route>

<script setup lang="ts">
import { Quotes } from "../../stores/champQuotes.ts";
import { ref, computed, onMounted } from "vue";
import { useDataStore } from "../../stores/dataStore";



const ds = useDataStore();

// Define emit for communicating with the parent component
const emit = defineEmits(['open-sidebar']);

// Function to handle opening the sidebar and passing the component name
const openChampionSidebar = () => {
};
// Function to handle champion selection
const handleChampionClick = (champion: Champion) => {
  ds.setSelectedChampion(champion);
  console.log('i got clicked');
  emit('open-sidebar', 'championSidebar');
};

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

// Reactive references to champions and selectedChampion from the store
const champions = computed(() => ds.champions);
const selectedChampion = computed(() => ds.selectedChampion);

// Checked abilities array
const checkedAbilities = ref<string[]>([]);

const query = ref("");

// Search list based on the query
const searchList = computed(() => {
  return champions.value.filter(
    (champion) =>
      champion.name.toLowerCase().includes(query.value.toLowerCase())
  );
});



// Clear checked abilities
const uncheckAbilities = () => {
  checkedAbilities.value = [];
};

function handleContextMenu(event, item) {
  this.$refs.vueSimpleContextMenu.showMenu(event, item)
}


function optionClicked(event) {
  window.alert(JSON.stringify(event))
}
const options = [
  {
    name: "Add",
    action: '',
    icon: 'teenyicons:section-add-outline',
  },
  {
    name: "Remove",
    action: '',
    icon: 'teenyicons:section-remove-outline',
  },
  {
    name: "Open in Sidebar",
    action: '',
    icon: "teenyicons:send-left-outline"
  },
  {
    name: "View on League Wiki",
    action: '',
    icon: 'teenyicons:download-outline'
  },
];

let quotes = Quotes;

const randomQuote = computed(() => {
  return quotes[Math.floor(Math.random() * quotes.length)];
});
console.log(randomQuote.value);

const getQuote = ref(randomQuote.value);
onMounted(async () => {

  const ds = useDataStore();
  const champions = ds.champions;
});

</script>

<template>
  <!-- Champ Tab -->

  <<<<<<< HEAD <div class="px-6 h-full w-full grid grid-cols-1 *:scrollbar-hide ">
    <div class="w-full py-6 px-2 flex items-end">
      <h2 class="text-2xl font-bold p-1.5 grow">Champions</h2>

      <select class="select select-bordered select-xs max-w-xs align-self-end justify-self-end shadow-inner">
        <option disabled selected>Class</option>
        <option>Marksman</option>
        <option>Mage</option>
        <option>Tank</option>
        <option>Support</option>
        <option>Fighter</option>
        <option>Assassin</option>
      </select>
    </div>


    <div class="grid-container w-full scroll-none p-0 rounded-box  border border-base-300 mx-0 shadow-warm">
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
    </div>
</template>

<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));

  @apply gap-[1.5%];

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
=======
<div class="px-6 h-full w-full  *:scrollbar-hide ">
    <div class="w-full py-6 px-2 flex items-end">
      <div class="flex grow items-center">
        <h2 class="text-2xl font-bold p-1.5">Champions</h2>

        <p class=" p-1.5 grow text-xs font-mono italic">{{ getQuote }}</p>
      </div>




</div>


<div
  class="h-full max-h-[calc(100%-115px)] w-full  rounded-box  border border-base-300 mx-0 shadow-cham backdrop-blur-md bg-base-100/90 relative">

      <div class="menubar">

        <select class="select select-bordered select-xs max-w-xs align-self-end justify-self-end shadow-inner">
          <option disabled selected>Class</option>
          <option>Marksman</option>
          <option>Mage</option>
          <option>Tank</option>
          <option>Support</option>
          <option>Fighter</option>
          <option>Assassin</option>
        </select>
      </div>
<div class="overflow-y-scroll max-h-full scroll-none flex flex-wrap gap-4 h-full p-2 pt-11 w-full ">
        <div v-for="(champion, index) in champions" :key="champion.name" :data-index="index" class="">
          <button
            class="item-wrapper__item min-w-[60px] rounded-md basis-14 max-w-[70px] grow aspect-square flex place-items-center  overflow-hidden bg-cover ring-1 ring-offset-1 ring-base-300 ring-offset-base-100 hover:ring-offset-primary drop-shadow-sm has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary pointer-events-auto"
            @click="handleChampionClick(champion)" @contextmenu.prevent.stop="handleContextMenu($event, champion)">
            <div class="grid-image-container champ">
              <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                class="scale-[115%] aspect-square" />
              <div class="grid-tip">{{ champion.name }}</div>
</div>
</button>
</div>
</div>
</div>

</div>



</template>

<style scoped></style>
>>>>>>> 0d8a5d3 (fix?)
