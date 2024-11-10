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
<LayoutSpacer />
<div v-if="champion" class="flex-col w-full gap-6">


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
                <h1 class="!text-[19px]  ">
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

    <div class='mt-8'>
        <ChampTablist :champion="props.champion" />
    </div>
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
