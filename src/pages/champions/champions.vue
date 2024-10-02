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

  <div class="px-6 h-full w-full  *:scrollbar-hide ">
    <div class="flex items-end w-full px-2 py-6">
      <div class="flex items-center grow">
        <h2 class="text-2xl font-bold p-1.5">Champions</h2>

        <p class=" p-1.5 grow text-xs font-mono italic">{{ getQuote }}</p>
      </div>




    </div>

    <Splitpanes id="buildSplit" class="default-theme px-6 pb-4 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
      <Pane size="70" min-size="60" max-size="72"
        class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative h-full px-4">

        <div
          class=" border-b-base-300 border-b backdrop-blur-md absolute z-10 top-0 left-0 bg-base-100/90  items-center flex w-full  justify-end gap-4 !h-fit flex-wrap  py-1 px-4">

          <h2 class="justify-start text-base font-semibold grow">
            Primary
          </h2>
          <select class="max-w-xs shadow-inner select select-bordered select-xs align-self-end justify-self-end">
            <option disabled selected>Class</option>
            <option>Marksman</option>
            <option>Mage</option>
            <option>Tank</option>
            <option>Support</option>
            <option>Fighter</option>
            <option>Assassin</option>
          </select>

        </div>

        <div class="flex flex-wrap w-full h-full max-h-full gap-4 p-2 overflow-y-scroll scroll-none pt-11 ">
          <div v-for="(champion, index) in champions" :key="champion.name" :data-index="index" class="">
            <button
              class="item-wrapper__item min-w-[60px] rounded-md basis-14 max-w-[70px] grow aspect-square flex place-items-center  overflow-hidden bg-cover ring-1 ring-offset-1 ring-base-300 ring-offset-base-100 hover:ring-offset-primary drop-shadow-sm has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary pointer-events-auto"
              @click="ds.setSelectedChampion(champion)">
              <div class="grid-image-container champ">
                <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
                  class="scale-[115%] aspect-square" />
                <div class="grid-tip">{{ champion.name }}</div>
              </div>
            </button>
          </div>
        </div>




      </Pane>


      <!--     /* -------------------------------------------------------------------------- */
       /*                                 PANE TWOOOOOOOO                            */
       /* -------------------------------------------------------------------------- */ -->


      <Pane size="30" max-size="40" min-size="28" class="max-h-full min-w-[105px]  relative  ">




        <div class="max-h-full overflow-y-scroll scrollbar-hide rounded-box">
          <ChampionSidebar />
        </div>
      </Pane>

    </Splitpanes>





  </div>



</template>

<style scoped></style>
