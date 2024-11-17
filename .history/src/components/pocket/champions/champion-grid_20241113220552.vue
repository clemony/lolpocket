<route lang="json">{
    "name": "championGrid",
    "alias": "/champions/championGrid",
    "meta": {
        "title": "Runes",
        "icon": "teenyicons:hexagon-outline"
    }
}</route>

<script setup lang="ts">
import { useDataStore } from '@/Stores/dataStore'
import { ref, computed, onMounted } from 'vue'
import { useItemStore } from '@/Stores/itemStore'

const ds = useDataStore()
const bts = useItemStore()

interface Ability {
    key: string
    name: string
    context: string
    img: string
    data: Record<string, string>
}

interface Champion {
    name: string
    img: string
    wiki: string
    title: string
    tags: string[]
    type: string
    abilities: {
        passive: Ability
        q: Ability
        w: Ability
        e: Ability
        r: Ability
    }
}

// Reactive references to champions and selectedChampion from the store
const champions = computed(() => ds.champions)
const selectedChampion = computed(() => ds.selectedChampion)

function handleChampions(imageUrl, event) {
    if (event.target.checked) {
        if (!bts.buildChampions.includes(imageUrl)) {
            bts.buildChampions.push(imageUrl) // Push directly into the store's ref array
        }
    } else {
        const index = bts.buildChampions.indexOf(imageUrl)
        if (index > -1) {
            bts.buildChampions.splice(index, 1) // Remove from the store's ref array
        }
    }
}

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
</script>

<template>
<div
    class="scroll-none shadow-cham mx-0 flex h-full w-full flex-wrap gap-4 overflow-scroll rounded-box border border-base-300 bg-base-100/90 p-4 backdrop-blur-md">
    <label :for="champion.name" v-for="(champion, index) in champions" :key="champion.name" :data-index="index"
        class="item-wrapper__item flex aspect-square w-[65px] min-w-[60px] max-w-[70px] grow place-items-center overflow-hidden rounded-full bg-cover ring-1 ring-base-300 ring-offset-1 ring-offset-base-100 drop-shadow-sm hover:ring-offset-primary has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary"
        @click="handleChampions(champion.img, $event)" @contextmenu.prevent.stop="handleContextMenu($event, champion)">
        <img v-if="champion.type === 'champion'" :src="champion.img" :alt="champion.name + ' Image'"
            class="aspect-square scale-[115%]" />
        <div class="grid-tip">{{ champion.name }}</div>

        <input type="checkbox" :id="champion.name" v-model="bts.buildChampions" :value="champion.img" />
    </label>
</div>

<vue-simple-context-menu element-id="myUniqueId" :options="options" ref="vueSimpleContextMenu"
    @option-clicked="optionClicked" />
</template>

<style scoped>
.grid-container {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));

    @apply gap-[1.5%];
}

.grid-image {
    @apply !h-[94px] !w-[94px];
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
</style>
