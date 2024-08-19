<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { Icon } from "@iconify/vue";
import { Quotes } from "@/data/champQuotes.ts";
import { getCheckedState } from 'radix-vue/dist/Menu/utils';
import RadioButton from 'primevue/radiobutton';
import { Radio } from 'lucide-vue-next';

const dataStore = useDataStore();

let quotes = Quotes;

const randomQuote = computed(() => {
  return quotes[(Math.floor(Math.random() * quotes.length))];
});
console.log(randomQuote.value);

const getQuote = ref(randomQuote.value);


interface Ability {
  key: string;
  name: string;
  context: string;
  img: string;
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


const champions = dataStore.champions;
const selectedChampion = computed(() => dataStore.selectedChampion);

console.log(selectedChampion);


const query = ref('')

const searchList = computed(() => {
  return champions.filter((champion) => champion.name.toLowerCase().includes(query.value.toLowerCase()) /*|| champion.type.toLowerCase().includes(query.value) ||
    champion.title.toLowerCase().includes(query.value.toLowerCase())*/
  )
})

// Function to handle the drawer button click and set the selected champion
function handleChampionClick(champion: Champion) {
  dataStore.setSelectedChampion(champion);
}


</script>

<template>


  <!-- Champ Tab -->
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div role="tablist" class="tabs layout !mx-0 !w-full border-b-transparent">

        <a role="tab" class="tab tab-active w-44 font-semibold">Champions</a>

        <div role="tabpanel" class="tab-content !w-full">
          <div class="grid-container !w-full mx-0 p-0">

            <div class="grid-item champ" v-for="(champion, index) in champions" :key="champion.name"
              :data-index="index">
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
        <!--
        <a role="tab"
          class="tab font-mono italic !text-xs text-end text-base-content font-normal cursor-pointer pointer-events-none border-b-transparent">
          {{ getQuote }} </a>-->

      </div>
    </div>




    <div class="drawer-side overscroll-none scroll-smooth z-30">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay "></label>
      <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-[30px]">
        <div v-if="selectedChampion" class="relative">

          <div
            class="rounded-box border border-neutral/10 bg-base-100/60 backdrop-blur-md shadow-lg prose grid grid-cols-2 auto-rows-max py-3 px-1 fixed z-10">
            <div class="col-span-2 grid grid-cols-3 p-1 auto-cols-max gap-1">
              <div
                class="align-self-start avatar h-16 justify-content-center col-start-1 -mt-1.5 ml-1.5 !aspect-square  relative">
                <div class="rounded-full  grid justify-content-center object-contain z-0 my-auto h-16 w-16">



                  <svg role="none" class="w-full h-full z-10">
                    <mask id="circle">
                      <circle fill="white" cx="60" cy="60" r="100"></circle>
                      <circle fill="black" cx="86%" cy="86%" r="13"></circle>
                    </mask>
                    <g mask="url(#circle)">
                      <image x="-6px" y="-6px" height="115%" width="115%" class="max-w-[115%] "
                        :href="selectedChampion.img">
                      </image>
                      <circle fill="none" cx="60" cy="60" r="100" stroke="rgba(0,0,0,0.1)" stroke-width="2">
                      </circle>
                    </g>
                  </svg>

                  <div
                    class="absolute grid place-items-center tooltip tooltip-bottom rounded-full  size-7 -bottom-[5px] -right-[5px] glow before:text-xs"
                    data-tip="view on Wiki">
                    <a :href="selectedChampion.wiki" target="_blank"
                      class="badge flex  bg-base-content text-base-100 size-[22px] border-none object-cover overflow-hidden p-[3px] aspect-square z-10 cursor-pointer ring-[3px] ring-base-100 hover:ring-transparent">

                      <Icon icon="ph:link-simple" class="" />

                    </a>

                  </div>
                </div>


              </div>
              <div class="col-start-2 col-span-2">
                <h1 class=" font-semibold font-serif text-[1.4rem] mb-0 pb-1">{{ selectedChampion.name }}</h1>
                <p
                  class="text-xs flex text-pretty tracking-wide place-items-center uppercase pt-0 mt-0 pl-[11px] -indent-[11px] pb-0 mb-2">
                  @{{ selectedChampion.title }}
                </p>
              </div>
            </div>


            <div
              class="col-start-2 text-xs justify-content-end text-center justify-self-end relative right-3 flex gap-2 pb-1">
              <code v-for="(tag, index) in selectedChampion.tags" :key="index"
                class="tracking-normal lowercase text-xs w-auto h-max flex flex-nowrap text-center font-mono"
                :data-tag="tag">#{{ tag }}</code>
            </div>
          </div>


          <div
            class="ability-wrapper join join-vertical w-full bg-base-100 rounded-box mt-5 shadow-lg shadow-neutral/20">
            <div v-for="(ability, key) in selectedChampion.abilities" :key="key"
              class="collapse collapse-arrow join-item">
              <input type="checkbox" :id="'checkbox-' + ability.key" name="abilityBoxes" />
              <div class="collapse-title">
                <img :src="ability.img" :alt="ability.name" />
                <div>{{ ability.name }}</div>
                <kbd class="kbd">{{ ability.key.toUpperCase() }}</kbd>
              </div>
              <div class="collapse-content">
                <p>{{ ability.context }}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));


  @apply gap-6;

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

.collapse-title {
  @apply text-sm flex gap-3 items-center;

  img {
    @apply rounded-full border border-neutral/40 size-9 -ml-1;
  }

  div {
    @apply flex-grow text-nowrap truncate;
  }

  kbd {
    @apply kbd-sm text-xs font-mono size-6;
  }
}

.collapse-title:has(input[type="radio"]:checked) {}

.ability-wrapper>div {
  @apply border-neutral/15 border;

  p {
    @apply prose text-xs whitespace-pre-line text-balance;
  }
}
</style>
