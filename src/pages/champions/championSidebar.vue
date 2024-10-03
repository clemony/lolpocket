<route lang="json">{
    "name": "championSidebar",
    "alias": "/champions/championSidebar",
    "meta": {}
}</route>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useChampStore } from '../../stores/champStore';
import { toast } from 'vue3-toastify';
import { useItemStore } from '../../stores/itemStore';


const cs = useChampStore();
const is = useItemStore();

const props = defineProps(['champion']);





const quickSearch = ref('');
const returnData = ref([]);

// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    console.log('Received array from child:', newVal);
    cs.addToSet(newVal[0], newVal[1]);
});

const filteredItems = computed(() => {
    let filtered = is.items;


    // Apply search filter if any
    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase();
        filtered = filtered.filter((item: any) =>
            Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
    }
    return filtered;
});

const keysToDisplay = ["COST:", "COOLDOWN:", "STATIC COOLDOWN:"];

const filteredData = (data: Record<string, string>) => {
    return Object.fromEntries(
        Object.entries(data).filter(([key]) => keysToDisplay.includes(key)),
    );
};


const checkedAbility = ref<string[]>([]);

// Watch for changes to likedChamps and log the new value
watch(() => cs.likedChamps, (newVal) => {
    // console.log('likedChamps changed:', newVal);
}, { immediate: true });

// Computed property to check if the champion is liked
const isLiked = computed(() => {
    return cs.likedChamps.some(champ => champ.name === props.champion.name);
});

function handleLike(thisChamp) {
    let likedChamps = cs.likedChamps;

    // Ensure likedChamps is an array
    if (!Array.isArray(likedChamps)) {
        likedChamps = [];
        cs.likedChamps = likedChamps;  // Reinitialize as an empty array
    }

    // Now you can safely perform array operations
    if (likedChamps.some(champ => champ.name === thisChamp.name)) {
        const index = likedChamps.findIndex((champ) => champ.name === thisChamp.name);
        if (index !== -1) {
            likedChamps.splice(index, 1);
            toast('♥︎ ' + thisChamp.name + " disliked!");
        }
    } else {
        likedChamps.push(thisChamp);
        toast('♥︎ ' + thisChamp.name + " liked!");
    }
}


const championItems = computed(() => {
    return cs.getChampionItems(cs.selectedChampion);
});


const bgClass = ((champion) => {
    return '!bg-[url(\'/img/champions/splash/' + champion + '_0.webp\')]';
});
</script>
<template>


    <div v-if="champion" class="grid grid-cols-1 grid-rows-[min-content_1fr_min-content] !max-h-full mt-2 gap-4 ">
        <div
            class="grid w-full grid-cols-2 px-1 py-3 border h-28 rounded-box border-base-300/70 shadow-inset-sm bg-base-100/80   bg-[50%]">
            <div class="grid grid-cols-3 col-span-2 gap-1 p-1 ">
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
                <div class="relative col-span-2 col-start-2 -mt-1 -ml-1 antialiased ">
                    <h1 class=" text-xl tracking-tight  mb-0.5  pb-0  antialiased  font-semibold">
                        {{ champion.name }}
                    </h1>

                    <p
                        class=" flex text-pretty font-medium tracking-wide place-items-center text-[11px] antialiased uppercase pt-0 mt-0 pl-[10px] pr-3 pb-1  -indent-[11px]">
                        @{{ champion.title }}
                    </p>

                    <button
                        class=" group/liked absolute top-1 right-6 *:absolute *:size-[1rem] *:transition-all *:duration-500"
                        title="Add/Remove Favorite" @click="handleLike(champion)">

                        <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
                        <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />

                    </button>
                </div>
            </div>

            <div
                class="relative flex col-start-2 gap-2 pb-1 text-xs text-center justify-content-end justify-self-end right-3">
                <code v-for="(tag, index) in champion.tags" :key="index"
                    class="flex w-auto font-mono text-xs tracking-normal text-center lowercase badge h-max flex-nowrap"
                    :data-tag="tag">#{{ tag }}</code>
            </div>
        </div>







        <div role="tablist"
            class=" grid w-full [&_.tab]:!border-b-transparent [&_.tab-content]:!z-0  [&_.tab]:!z-30 relative tabs tabs-lifted  *:text-xs border-base-300/70 [&_.tab]:h-7 [&_.tab]:font-medium overflow-y-scroll scrollbar-hide">

            <!------------------------⟢ hidden ⟣------------------------>
            <!-- 
            <label role="tab" class="hidden tab">
                <input type="radio" class="hidden peer" name="cTabs">
            </label>
            <div role="tabpanel" class="hidden">
            </div> -->

            <!----------------------⟢ stats ⟣---------------------------->

            <label role="tab" :class="{ 'tab-active': cs.champTabs == 'stats' }" class="tab first">
                <input type="radio" class="hidden peer" name="cTabs" v-model="cs.champTabs" value="stats">
                Stats
            </label>

            <div role="tabpanel"
                class="w-full p-6 rounded-tl-none min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm">
                Tab content 1
            </div>

            <!------------------------⟢ abilities ⟣--------------------------->

            <label role="tab" :class="{ 'tab-active': cs.champTabs == 'abilities' }" class="!z-20 tab">
                <input type="radio" class="hidden peer" name="cTabs" v-model="cs.champTabs" value="abilities">
                Abilities
            </label>

            <div role="tabpanel"
                class="top-0 !z-0  min-w-[298px] shadow-inset-sm tab-content border-base-300/70   rounded-box bg-base-100/80">

                <div class="grid w-full  grid-cols-1 overflow-y-scroll ability-wrapper join join-vertical !border-none">
                    <div v-for="(ability, key) in champion.abilities" :key="key"
                        class="collapse collapse-arrow !border-r-0 !border-y-base-200/50 !border-l-0 first:!border-t-0 last:!border-b-0 join-item h-full ">
                        <input type="radio" :id="'radio-' + key" v-model="checkedAbility" :value="key"
                            @change='console.log(ability)' />
                        <div class="collapse-title  pr-3.5 after:max-h-0 h-12">
                            <img :src="ability.img" :alt="ability.name" class="shadow-standard" />
                            <div class="font-medium text-[0.8rem]">{{ ability.name }}</div>
                            <kbd class="kbd">{{ ability.key.toUpperCase() }}</kbd>
                        </div>

                        <div class="h-auto overflow-y-auto collapse-content">
                            <!-- Filter and display specific keys from ability data -->
                            <div v-for="(value, key) in filteredData(ability.data)" :key="key"
                                class="px-2 p-1 text-xs grid grid-cols-[1fr_2fr] grid-flow-row bg-base-200 rounded-btn my-3">
                                <div class="capitalize text-xxs text-medium">
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

            <!------------------------⟢ items ⟣------------------------->

            <label role="tab" :class="{ 'tab-active': cs.champTabs == 'items' }" class="w-full tab last">
                <input type="radio" class="hidden peer" name="cTabs" v-model="cs.champTabs" value="items">
                Items
            </label>

            <div role="tabpanel"
                class=" tab-content min-w-[298px] !w-full p-3 border-base-300/70 rounded-box bg-base-100/80  shadow-inset-sm ">

                <div class="w-full px-2 pt-1 pb-3 font-medium">According to you, {{ champion.name }} likes...</div>

                <div class="!p-1 drag-draggable !gap-3  !justify-start scrollbar-hide overflow-y-scroll">


                    <VDropdown v-for="item in cs.getChampionItems(champion.name)" :key="item.id" :overflow-padding="20"
                        :shift="true" theme="detail" :distance="6" @click.right.prevent="" :ref="item.name"
                        class="relative basis-14 aspect-square !max-h-14">

                        <label class="!overflow-hidden drag-label">
                            <div class="!overflow-hidden drag-wrapper">

                                <img :src="item.img" class="drag-img" />

                            </div>


                        </label>
                        <template #popper :key="item.name + 'Pop'">
                            <popItem :item="item" :variant="'remove'" :champ="champion.name" />
                        </template>
                    </VDropdown>


                    <VDropdown theme="detail" alt="Quick Search" :distance="8"
                        class="search-drop ghosty drag-label flex overflow-clip !aspect-square !max-h-14
                        
                        basis-14 h-auto !p-0 
                        group/qs  after:grid after:place-content-center after:w-full after:h-full after:content-['+'] after:absolute relative hover:after:text-neutral z-0 hover:after:opacity-60 after:opacity-50 !cursor-pointer">


                        <div
                            class=" group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/img/ui/frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200  w-full h-full brightness-0 cursor-pointer ">

                        </div>


                        <template #popper>
                            <QuickSearch :array="filteredItems" v-model:quickSearch="quickSearch"
                                v-model:returnData="returnData" v-model:thisSet="champion.name" />
                        </template>
                    </VDropdown>

                    <div class="aspect-square basis-14"></div>
                    <div class="aspect-square basis-14"></div>
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

.tab-active {
    @apply brightness-[99%] shadow-[6px_4px_5px_1px_oklch(var(--b1))] !z-30;
}


.tab-active:is(:nth-child(3)) {
    @apply brightness-[99%] !shadow-[0px_4px_5px_6px_oklch(var(--b1))] !z-30;
}


.first.tab:is(.tab-active):before {
    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

/*
.last.tab:is(.tab-active):before {
    background-image: var(--radius-start) !important;
    background-position: top left !important;
}*/
</style>