<script setup lang="ts">
import { getQuote } from '@/data/champQuotes'
import { useDataStore } from '@/stores/dataStore'

const ds = useDataStore()

// Reactive references to champions and selectedChampion from the store
const champions = computed(() => ds.champions)
const selectedChampion = computed(() => ds.selectedChampion)

// Checked abilities array
const checkedAbilities = ref<string[]>([])

const query = ref('')

// Search list based on the query
const searchList = computed(() => {
    return champions.value.filter((champion) =>
        champion.name.toLowerCase().includes(query.value.toLowerCase())
    )
})

// Clear checked abilities
const uncheckAbilities = () => {
    checkedAbilities.value = []
}

function handleContextMenu(event, item) {
    this.$refs.vueSimpleContextMenu.showMenu(event, item)
}

function optionClicked(event) {
    window.alert(JSON.stringify(event))
}
const options = [
    {
        name: 'Add',
        action: '',
        icon: 'teenyicons:section-add-outline',
    },
    {
        name: 'Remove',
        action: '',
        icon: 'teenyicons:section-remove-outline',
    },
    {
        name: 'Open in Sidebar',
        action: '',
        icon: 'teenyicons:send-left-outline',
    },
    {
        name: 'View on League Wiki',
        action: '',
        icon: 'teenyicons:download-outline',
    },
]

onMounted(async () => {
    const ds = useDataStore()
    const champions = ds.champions
})
</script>

<template>
    <!-- Champ Tab -->

    <div class="h-full w-full px-6 *:scrollbar-hide">
        <div class="flex w-full items-end px-2 py-6">
            <div class="flex grow items-center">
                <h2 class="p-1.5 text-2xl font-bold">Champions</h2>

                <p class="grow p-1.5 font-mono italic">
                    {{ getQuote }}
                </p>
            </div>
        </div>

        <Splitpanes
            id="buildSplit"
            class="default-theme h-[calc(100%-100px)] max-h-[calc(100%-100px)] w-full px-6 pb-4">
            <Pane
                size="70"
                min-size="60"
                max-size="72"
                class="relative h-full rounded-box border border-base-300 !bg-base-100/90 px-4 shadow-warm">
                <div
                    class="absolute left-0 top-0 z-10 flex !h-fit w-full flex-wrap items-center justify-end gap-4 border-b border-b-base-300 bg-base-100/90 px-4 py-1 backdrop-blur-md">
                    <h2 class="grow justify-start text-base font-semibold">
                        Primary
                    </h2>
                    <select
                        class="align-self-end select select-bordered select-xs max-w-xs justify-self-end shadow-inner">
                        <option disabled selected>Class</option>
                        <option>Marksman</option>
                        <option>Mage</option>
                        <option>Tank</option>
                        <option>Support</option>
                        <option>Fighter</option>
                        <option>Assassin</option>
                    </select>
                </div>

                <div
                    class="scroll-none flex h-full max-h-full w-full flex-wrap gap-4 overflow-y-scroll p-2 pt-11">
                    <div
                        v-for="(champion, index) in champions"
                        :key="champion.name"
                        :data-index="index"
                        class="">
                        <button
                            class="item-wrapper__item pointer-events-auto flex aspect-square min-w-[60px] max-w-[70px] grow basis-14 place-items-center overflow-hidden rounded-md bg-cover ring-1 ring-base-300 ring-offset-1 ring-offset-base-100 drop-shadow-sm hover:ring-offset-primary has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary"
                            @click="ds.setSelectedChampion(champion)">
                            <div class="grid-image-container champ">
                                <img
                                    v-if="champion.type === 'champion'"
                                    :src="champion.img"
                                    :alt="champion.name + ' Image'"
                                    class="aspect-square scale-[115%]" />
                                <div class="grid-tip">{{ champion.name }}</div>
                            </div>
                        </button>
                    </div>
                </div>
            </Pane>

            <!--     /* -------------------------------------------------------------------------- */
       /*                                 PANE TWOOOOOOOO                            */
       /* -------------------------------------------------------------------------- */ -->

            <Pane
                size="30"
                max-size="40"
                min-size="28"
                class="relative max-h-full min-w-[105px]">
                <div
                    class="max-h-full overflow-y-scroll rounded-box scrollbar-hide">
                    <ChampionSidebar />
                </div>
            </Pane>
        </Splitpanes>
    </div>
</template>

<style scoped></style>
