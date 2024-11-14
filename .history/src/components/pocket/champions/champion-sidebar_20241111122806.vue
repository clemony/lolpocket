<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { clean } from '@lib/utils'

const cs = useChampStore()
const is = useItemStore()

const props = defineProps(['champion'])

const tabModel = ref('abilities')

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
<div v-if="champion" class="flex-col w-full gap-6 max-w-inherit h-full pr-[3px]">


    <Card>

        <CardHeader class='flex flex-row gap-8 items-center'>
            <div class='relative w-fit'>
                <div class='join join-vertical w-[65px] overflow-hidden'>
                    <loadImg
                        class="join-item size-[65px] scale-110 mr-2px border-base-300 border shadow-sm aspect-square object-center shrink-0"
                        :url="`/img/champions/${clean(champion.name)}.webp`" />
                    <div class='join-item join join-horizontal'>

                        <VTooltip theme="tt" placement="bottom"
                            class=" grid  items-center justify-center join-item  transition-all duration-500 before: hover:rotate-180"
                            alt="view on Wiki">

                            <a :href="champion.wiki" target="_blank"
                                class=" z-10  flex  p-1.5 cursor-alias overflow-hidden  border-none bg-neutral ring-[3px] ring-neutral-content  text-neutral-content">
                                <Icon icon="ph:link-simple" class=" size-full" />
                            </a>

                            <template #popper>
                                <p class='text-xs'>View on {{ champion.wiki }}
                                </p>
                            </template>
                        </VTooltip>

                        <Button variant="outline" size="icon"
                            class="group/liked join-item [&_svg]:absolute !apsect-square rounded-full [&_svg]:transition-all [&_svg]:duration-500 [&_svg]:pt-px [&_svg]:size-4.5"
                            title="Add/Remove Favorite" @click="handleLike(champion)">
                            <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
                            <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />
                        </Button>
                    </div>
                </div>


            </div>


            <div class="flex flex-col w-full h-full *:shrink-0 ">
                <p class=" font-semibold font-serif !text-3xl">
                    {{ champion.name }}
                </p>

                <p
                    class="mt-1 flex place-items-center text-pretty pb-1 pl-[10px] pr-3 pt-0 -indent-[11px] scale-y-[99%] text-sm font-medium uppercase tracking-wide ">
                    @ {{ champion.title }}
                </p>



                <div class="justify-content-end w-full mt-1.5 flex gap-2 justify-self-end  text-center ">
                    <code v-for="(tag, index) in champion.tags" :key="index"
                        class="badge flex h-max w-auto flex-nowrap text-center font-mono text-sm font-medium lowercase tracking-normal"
                        :data-tag="tag">#{{
                            tag }}</code>
                </div>

            </div>




        </CardHeader>


    </Card>



    <Card class='overflow-hidden pb-3 px-6 pt-0 mt-8'>

        <!------------------------⟢ tablist ⟣------------------------->



        <template v-if="tabModel == 'abilities'">
            <ChampionAbilities :champion="champion" class='pt-5 w-inherit max-w-inherit' />
        </template>

    </Card>




</div>
</template>

<style scoped>
.tab {
    --tab-border-color: oklch(var(--b3)/0.8);

    @apply text-sm text-start;
}

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