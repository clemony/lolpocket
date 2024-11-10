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





watch(
    () => cs.lovedChamps,
    (newVal) => {
    },
    { immediate: true }
)

const isLiked = computed(() => {
    return cs.lovedChamps.some((champ) => champ.name === props.champion.name)
})

function handleLike(thisChamp) {
    let lovedChamps = cs.lovedChamps

    if (!Array.isArray(lovedChamps)) {
        lovedChamps = []
        cs.lovedChamps = lovedChamps
    }

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



</script>
<template>
<LayoutSpacer />
<div v-if="champion" class="flex-col w-full gap-6">


    <Card>

        <CardHeader class='flex flex-row gap-8 items-center'>
            <div class='relative w-fit'>
                <loadImg class="rounded-full size-24 border-base-300 border shadow-sm aspect-square shrink-0"
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

                <Button variant="outline" size="icon"
                    class="group/liked absolute right-6 top-4 shadow-md [&_svg]:absolute !apsect-square rounded-full [&_svg]:transition-all [&_svg]:duration-500 [&_svg]:pt-px [&_svg]:size-4.5"
                    title="Add/Remove Favorite" @click="handleLike(champion)">
                    <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
                    <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />
                </Button>

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
        <ChampionAbilities :champion="champion" />

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

                </template>
            </Tab>


            <!------------------------⟢ items ⟣------------------------->


        </TabListPocket>
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
