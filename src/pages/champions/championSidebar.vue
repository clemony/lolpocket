<route lang="json">{
    "name": "championSidebar",
    "alias": "/champions/championSidebar",
    "meta": {}
}</route>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '../../stores/dataStore';
import { useChampStore } from '../../stores/champStore';
import { useUserStore } from '../../stores/userStore';

const dataStore = useDataStore();
const cs = useChampStore();
const us = useUserStore();


const champions = dataStore.champions;
const props = defineProps(['champion'])

props.champion.value = 'champion'


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


const checkedAbility = ref<string[]>([]);

/* const uncheckAbilities = () => {
    checkedAbilities.value = [];
};
 */
</script>
<template>


    <div class="grid grid-cols-1 grid-rows-[min-content_1fr_min-content] max-h-[inherit]">



        <div class="h-[9.3rem]"></div>
        <div
            class="absolute top-0 left-0 z-10 grid w-full grid-cols-2 px-1 py-3 prose border rounded-box border-base-300 bg-base-100/85 backdrop-blur-md shadow-warm auto-rows-max">
            <div class="grid grid-cols-3 col-span-2 gap-1 p-1 auto-cols-max">
                <div
                    class="align-self-start avatar h-16 justify-content-center col-start-1 -mt-1.5 ml-1.5 !aspect-square relative">
                    <div class="z-0 grid object-contain w-16 h-16 my-auto rounded-full justify-content-center">
                        <svg role="none" class="z-10 w-full h-full">
                            <mask id="circle">
                                <circle fill="white" cx="60" cy="60" r="100"></circle>
                                <circle fill="black" cx="86%" cy="86%" r="13"></circle>
                            </mask>
                            <g mask="url(#circle)">
                                <image x="-6px" y="-6px" height="115%" width="115%" class="max-w-[115%]"
                                    :href="champion.img"></image>
                                <circle fill="none" cx="60" cy="60" r="100" stroke="rgba(0,0,0,0.1)" stroke-width="2">
                                </circle>
                            </g>
                        </svg>

                        <div theme="minitt"
                            class="group/glow  hover:rotate-180 transition-all duration-500 absolute grid items-center justify-center  rounded-full size-7 -bottom-[4px] -right-[5px] glow before:text-xs"
                            alt="view on Wiki" :title="'GO →  ' + champion.wiki">
                            <!--     <div class="group-hover/glow:animate-ping size-[22px] absolute top-1 left-1 glow"> 
                        </div>-->
                            <a :href="champion.wiki" target="_blank"
                                class="badge flex bg-base-content cursor-alias rounded-full text-base-100 size-[22px] border-none object-cover overflow-hidden relative p-[3px] aspect-square z-10  ring-[3px] ring-base-100 hover:ring-transparent mb-[2px] ">
                                <Icon icon="ph:link-simple" class="" />

                            </a>


                        </div>
                    </div>
                </div>
                <div class="relative col-span-2 col-start-2 antialiased">
                    <h1 class=" text-[1.5rem] mb-0.5 pb-0 font-[500] font-dm antialiased">
                        {{ champion.name }}
                    </h1>
                    <p
                        class="text-xs flex text-pretty tracking-wide place-items-center uppercase pt-0 mt-0 pl-[11px] -indent-[11px]">
                        @{{ champion.title }}
                    </p>

                    <label
                        class=" group/fave absolute -top-1.5 right-[1.4rem] *:absolute *:size-[1rem] *:transition-all *:duration-500"
                        title="Add/Remove Favorite">

                        <input type="checkbox" v-model="us.faveChamps" :true-value="champion" false-value=""
                            class="hidden peer" />
                        <icon icon="teenyicons:heart-solid"
                            class="opacity-0 group-hover/fave:opacity-90 text-error peer-checked:opacity-90" />



                        <icon title="add to favorites" icon="teenyicons:heart-outline"
                            class="peer-checked:text-error opacity-70 peer-checked:brightness-[87%] peer-checked:opacity-100" />

                    </label>
                </div>
            </div>

            <div
                class="relative flex col-start-2 gap-2 pb-1 text-xs text-center justify-content-end justify-self-end right-3">
                <code v-for="(tag, index) in champion.tags" :key="index"
                    class="flex w-auto font-mono text-xs tracking-normal text-center lowercase h-max flex-nowrap"
                    :data-tag="tag">#{{ tag }}</code>
            </div>
        </div>

        <div
            class="grid grid-cols-1 ability-wrapper shadow-[inset_-2px_1px_0px_0px_#00000025,_inset_2px_-1px_0px_0px_#00000025,0px_1px_10px_0px_#00000020] join overflow-y-scroll join-vertical w-full h-full bg-base-100/80 rounded-box backdrop-blur-md z-0 ">
            <div v-for="(ability, key) in champion.abilities" :key="key"
                class="collapse collapse-arrow !border-base-200  join-item h-full">
                <input type="radio" :id="'radio-' + key" v-model="checkedAbility" :value="key" />
                <div class="collapse-title  pr-3.5 after:max-h-0 h-12">
                    <img :src="ability.img" :alt="ability.name" />
                    <div class="font-medium text-[0.8rem]">{{ ability.name }}</div>
                    <kbd class="kbd">{{ ability.key.toUpperCase() }}</kbd>
                </div>

                <div class="h-auto overflow-y-auto collapse-content">
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

                    <p class="h-auto p-1 overflow-y-scroll text-xs whitespace-pre-line text-balance">
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