<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { clean } from '@lib/utils'

const cs = useChampStore()
const is = useItemStore()

const props = defineProps(['champion'])

const cTabs = defineModel({
    default: 'abilities',
})

const quickSearch = ref('')
const returnData = ref([])

// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    console.log('Received array from child:', newVal)
    cs.addToSet(newVal[0], newVal[1])
})

const filteredItems = computed(() => {
    let filtered = is.items

    // Apply search filter if any
    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase()
        filtered = filtered.filter((item: any) =>
            Object.values(item).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm)
            )
        )
    }
    return filtered
})

const keysToDisplay = ['COST:', 'COOLDOWN:', 'STATIC COOLDOWN:']

const filteredData = (data: Record<string, string>) => {
    return Object.fromEntries(
        Object.entries(data).filter(([key]) => keysToDisplay.includes(key))
    )
}

const checkedAbility = ref<string[]>([])

// Watch for changes to lovedChamps and log the new value
watch(
    () => cs.lovedChamps,
    (newVal) => {
        // console.log('lovedChamps changed:', newVal);
    },
    { immediate: true }
)

// Computed property to check if the champion is liked
const isLiked = computed(() => {
    return cs.lovedChamps.some((champ) => champ.name === props.champion.name)
})

function handleLike(thisChamp) {
    let lovedChamps = cs.lovedChamps

    // Ensure lovedChamps is an array
    if (!Array.isArray(lovedChamps)) {
        lovedChamps = []
        cs.lovedChamps = lovedChamps // Reinitialize as an empty array
    }

    // Now you can safely perform array operations
    if (lovedChamps.some((champ) => champ.name === thisChamp.name)) {
        const index = lovedChamps.findIndex(
            (champ) => champ.name === thisChamp.name
        )
        if (index !== -1) {
            lovedChamps.splice(index, 1)
        }
    } else {
        lovedChamps.push(thisChamp)
    }
}

const championItems = computed(() => {
    return cs.getChampionItems(cs.selectedChampion)
})


</script>
<template>
<div v-if="champion" class="">
    <LayoutSpacer />

    <Card>

        <CardHeader class='flex flex-row gap-8 items-center'>
            <div class='relative w-fit'>
                <LoadImg class="rounded-full size-24 border-base-300 border shadow-sm "
                    :url="`/img/champions/${clean(champion.name)}.webp`" />

                <VTooltip theme="tt" placement="bottom"
                    class="absolute -bottom-px -right-[5px] grid size-8 items-center justify-center rounded-full  transition-all duration-500 before: hover:rotate-180"
                    alt="view on Wiki">

                    <a :href="champion.wiki" target="_blank"
                        class="badge relative z-10  flex aspect-square size-8 p-1.5 cursor-alias overflow-hidden rounded-full border-none bg-neutral ring-[3px] ring-neutral-content  text-neutral-content">
                        <Icon icon="ph:link-simple" class=" size-full" />
                    </a>

                    <template #popper>
                        <p>View on {{ champion.wiki }}
                        </p>
                    </template>
                </VTooltip>

            </div>


            <div class="flex flex-col w-full h-full *:shrink-0">
                <h1 class="!text-[19px] font-serif !font-medium">
                    {{ champion.name }}
                </h1>

                <p
                    class="mt-1 flex place-items-center text-pretty pb-1 pl-[10px] pr-3 pt-0 -indent-[11px] text-sm font-medium uppercase tracking-wide ">
                    @{{ champion.title }}
                </p>

                <button
                    class="group/liked absolute right-6 top-1 *:absolute *:size-[1rem] *:transition-all *:duration-500"
                    title="Add/Remove Favorite" @click="handleLike(champion)">
                    <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
                    <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />
                </button>

                <div class="justify-content-end w-full mt-1.5 flex gap-2 justify-self-end  text-center ">
                    <code v-for="(tag, index) in champion.tags" :key="index"
                        class="badge flex h-max w-auto flex-nowrap text-center font-mono text-sm font-medium lowercase tracking-normal"
                        :data-tag="tag">#{{
                            tag }}</code>
                </div>

            </div>




        </CardHeader>
    </Card>

    <!------------------------⟢ tablist ⟣------------------------->

    <TabListPocket :modelName="cTabs" :defaultTab="2">
        <!----------------------⟢ stats ⟣---------------------------->

        <Tab :value="1">
            <template #header>
                <input type="radio" class="peer hidden" name="cTabs" value="stats" v-model="cTabs" />
                Stats
            </template>

            <template #content>
                Tab content 1
            </template>
        </Tab>


        <!------------------------⟢ abilities ⟣--------------------------->

        <Tab :value="2">
            <template #header>
                <input type="radio" class="peer hidden" name="cTabs" value="abilities" v-model="cTabs" />
                Abilities
            </template>


            <template #content>
                <div class="ability-wrapper join join-vertical grid w-full grid-cols-1 overflow-y-scroll !border-none">
                    <div v-for="(ability, key) in champion.abilities" :key="key"
                        class="collapse join-item collapse-arrow h-full !border-l-0 !border-r-0 !border-y-base-200/50 first:!border-t-0 last:!border-b-0">
                        <input type="radio" :id="'radio-' + key" v-model="checkedAbility" :value="key"
                            @change="console.log(ability)" />
                        <div class="collapse-title h-12 pr-3.5 after:max-h-0">
                            <img :src="ability.img" :alt="ability.name" class="shadow-standard" />
                            <div class="!text-[0.8rem] font-medium">
                                {{ ability.name }}
                            </div>
                            <kbd class="kbd">{{
                                ability.key.toUpperCase()
                                }}</kbd>
                        </div>

                        <div class="collapse-content h-auto overflow-y-auto">
                            <!-- Filter and display specific keys from ability data -->
                            <div v-for="(value, key) in filteredData(
                                ability.data
                            )" :key="key"
                                class="my-3 grid grid-flow-row grid-cols-[1fr_2fr] rounded-btn bg-base-200 p-1 px-2 ">
                                <div class="text-medium text-xxs capitalize">
                                    {{ key }}
                                </div>
                                <div class="text-nowrap text-right">
                                    {{ value }}
                                </div>
                            </div>

                            <p class="h-auto overflow-y-scroll whitespace-pre-line text-balance p-1 ">
                                {{ ability.context }}
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </Tab>


        <!------------------------⟢ items ⟣------------------------->

        <Tab :value="3">
            <template #header>
                <input type="radio" class="peer hidden" name="cTabs" value="items" v-model="cTabs" />
                Items
            </template>
            <template #content>
                <div class="w-full px-2 pb-3 pt-1 font-medium">
                    {{ champion.name }} likes...
                </div>

                <div class="drag-draggable !justify-start !gap-3 overflow-y-scroll !p-1 scrollbar-hide">
                    <VDropdown v-for="item in cs.getChampionItems(champion.name)" :key="item.id" :overflow-padding="20"
                        :shift="true" theme="default" :distance="6" @click.right.prevent="" :ref="item.name"
                        class="relative aspect-square !max-h-14 basis-14">
                        <label class="drag-label !overflow-hidden">
                            <div class="drag-wrapper !overflow-hidden">
                                <img :src="item.img" class="drag-img" />
                            </div>
                        </label>
                        <template #popper :key="item.name + 'Pop'">
                            <pop-item :item="item" :variant="'remove'" :champ="champion.name" />
                        </template>
                    </VDropdown>

                    <VDropdown theme="default" alt="Quick Search" :distance="8"
                        class="search-drop ghosty drag-label group/qs relative z-0 flex !aspect-square h-auto !max-h-14 basis-14 !cursor-pointer overflow-clip !p-0 after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-['+'] hover:after:text-neutral hover:after:opacity-60">
                        <div
                            class="z-20 h-full w-full scale-105 cursor-pointer select-none bg-[url('/img/ui/frame.webp')] bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 group-hover/qs:scale-95 group-hover/qs:opacity-40">
                        </div>

                        <template #popper>
                            <QuickSearch :array="filteredItems" v-model:quickSearch="quickSearch"
                                v-model:returnData="returnData" v-model:thisSet="champion.name" />
                        </template>
                    </VDropdown>

                    <div class="aspect-square basis-14"></div>
                    <div class="aspect-square basis-14"></div>
                </div>
            </template>
        </Tab>

    </TabListPocket>
</div>
</template>

<style scoped>
.collapse-title {
    @apply flex items-center gap-3 text-sm;

    img {
        @apply -ml-1 size-9 rounded-full border border-neutral/40;
    }

    div {
        @apply flex-grow truncate text-nowrap;
    }

    kbd {
        @apply kbd-sm size-6 font-mono;
    }
}

.collapse-title:has(input[type='radio']:checked) {}

.ability-wrapper>div {
    @apply border border-neutral/15;
}
</style>
