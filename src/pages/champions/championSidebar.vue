<route lang="json">{
    "name": "championSidebar",
    "alias": "/champions/championSidebar",
    "meta": {}
}</route>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '../../stores/dataStore';

const dataStore = useDataStore();


const champions = dataStore.champions;
const selectedChampion = computed(() => dataStore.selectedChampion);



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

console.log(selectedChampion);

const checkedAbilities = ref<string[]>([]);

const uncheckAbilities = () => {
    checkedAbilities.value = [];
};
</script>
<template>
    <div v-if="selectedChampion" class=" pt-32">
        <div
            class="absolute w-full top-0 left-0 rounded-box border border-base-300 bg-base-100/85 backdrop-blur-md shadow-warm prose grid grid-cols-2 auto-rows-max py-3 px-1 z-10">
            <div class="col-span-2 grid grid-cols-3 p-1 auto-cols-max gap-1">
                <div
                    class="align-self-start avatar h-16 justify-content-center col-start-1 -mt-1.5 ml-1.5 !aspect-square relative">
                    <div class="rounded-full grid justify-content-center object-contain z-0 my-auto h-16 w-16">
                        <svg role="none" class="w-full h-full z-10">
                            <mask id="circle">
                                <circle fill="white" cx="60" cy="60" r="100"></circle>
                                <circle fill="black" cx="86%" cy="86%" r="13"></circle>
                            </mask>
                            <g mask="url(#circle)">
                                <image x="-6px" y="-6px" height="115%" width="115%" class="max-w-[115%]"
                                    :href="selectedChampion.img"></image>
                                <circle fill="none" cx="60" cy="60" r="100" stroke="rgba(0,0,0,0.1)" stroke-width="2">
                                </circle>
                            </g>
                        </svg>

                        <div class="absolute grid place-items-center tooltip tooltip-bottom rounded-full size-7 -bottom-[5px] -right-[5px] glow before:text-xs"
                            data-tip="view on Wiki">
                            <a :href="selectedChampion.wiki" target="_blank"
                                class="badge flex bg-base-content text-base-100 size-[22px] border-none object-cover overflow-hidden p-[3px] aspect-square z-10 cursor-pointer ring-[3px] ring-base-100 hover:ring-transparent">
                                <Icon icon="ph:link-simple" class="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-start-2 col-span-2">
                    <h1 class="font-serif font-extrabold text-[1.4rem] mb-0 pb-1 test">
                        {{ selectedChampion.name }}
                    </h1>
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
            class="ability-wrapper join overflow-y-scroll join-vertical w-full max-h-full bg-base-100/80 rounded-box backdrop-blur-md shadow-warm z-0">
            <div v-for="(ability, key) in selectedChampion.abilities" :key="key"
                class="collapse collapse-arrow join-item">
                <input type="radio" :id="'radio-' + key" v-model="checkedAbilities" :value="key" />
                <div class="collapse-title">
                    <img :src="ability.img" :alt="ability.name" />
                    <div class="font-medium">{{ ability.name }}</div>
                    <kbd class="kbd">{{ ability.key.toUpperCase() }}</kbd>
                </div>

                <div class="collapse-content">
                    <!-- Filter and display specific keys from ability data -->
                    <div v-for="(value, key) in filteredData(ability.data)" :key="key"
                        class="px-2 p-1 text-xs grid grid-cols-[1fr_2fr] grid-flow-row bg-base-200 rounded-btn my-3">
                        <div class="capitalize text-xxs">
                            {{ key }}
                        </div>
                        <div class="text-right text-nowrap">
                            {{ value }}
                        </div>
                    </div>

                    <p class="prose text-xs whitespace-pre-line overflow-y-scroll text-balance p-1">
                        {{ ability.context }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
}
</style>