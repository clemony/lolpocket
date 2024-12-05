<script setup lang="ts">
import { scrollToSection } from '@utils/utils'
import { usePocketStore } from '@/stores/pocketStore'

import { defineAsyncComponent } from 'vue'
import { getPocket } from '@utils/pocketUtilities'

const Dashboard = defineAsyncComponent(
    () => import('./dashboard/PocketDashboard.vue')
)
const Champions = defineAsyncComponent(
    () => import('./champions/PocketChampions.vue')
)
const Items = defineAsyncComponent(() => import('./items/PocketItems.vue'))
const Runes = defineAsyncComponent(() => import('./runes/PocketRunes.vue'))

const props = defineProps<{
    pocketKey?: string
    id?: any
}>()

const ps = usePocketStore()

const pocket = ref(getPocket(props.pocketKey))

/* onMounted(() => {
    if (props.pocketKey !== from.params.pocketKey) {
        pocket.value = await(getPocket(to.params.pocketKey))
        if (pocket.value.component) {
            const targetElement = pocket.value.component;
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' });
            }
        }
        console.log('pok', pocket, pocket.value.component);
    }

}) */

const dashboard = ref()
const champions = ref()
const items = ref()
const runes = ref()

const dashboardIsVisible = useElementVisibility(dashboard)
const championsIsVisible = useElementVisibility(champions)
const itemsIsVisible = useElementVisibility(items)
const runesIsVisible = useElementVisibility(runes)

const currentVisible = ref(null) // Will store the name of the visible element
const currentRef = ref(dashboard)

// Group refs, visibility states, and names
const els = [
    {
        ref: dashboard,
        isVisible: dashboardIsVisible,
        name: 'dashboard',
    },
    {
        ref: champions,
        isVisible: championsIsVisible,
        name: 'champions',
        type: 'champion',
        trigger: true,
        data: pocket.value.champions[0].champions,
    },
    {
        ref: items,
        isVisible: itemsIsVisible,
        name: 'items',
        trigger: true,
        type: 'item',
        data: pocket.value.items[0].itemSets,
    },
    {
        ref: runes,
        isVisible: runesIsVisible,
        name: 'runes',
        trigger: true,
        type: 'rune',
        data: pocket.value.runes[0].runeSets,
    },
]

// Observer setup with custom threshold for each element
els.forEach(({ ref, isVisible, name }) => {
    useIntersectionObserver(
        ref,
        ([{ isIntersecting }]) => {
            isVisible.value = isIntersecting
            if (isIntersecting) {
                currentVisible.value = name
                pocket.value.component = name
            }
        },
        { threshold: 0.5 } // Adjust this value to control the visibility offset
    )
})

watch(
    () => pocket.value.component,
    (newVal) => {
        //console.log(newVal)
    }
)

onBeforeRouteUpdate(async (to, from) => {
    if (to.params.pocketKey !== from.params.pocketKey) {
        pocket.value = await getPocket(to.params.pocketKey)
        /*      await nextTick()
                if (pocket.value.component) {
                    const find = els.find((el) => pocket.value.component)
                    const targetElement = find ? find.ref.value : dashboard
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' });
                    }
                }
                console.log('pok', pocket, pocket.value.component);  */
    }
})

const headers = [
    {
        name: 'dashboard',
        letters: ['d', 'a', 's', 'h', 'b', 'o', 'a', 'r', 'd'],
    },
    {
        name: 'champions',
        letters: ['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n', 's'],
    },
    { name: 'items', letters: ['i', 't', 'e', 'm', 's'] },
    { name: 'runes', letters: ['r', 'u', 'n', 'e', 's'] },
]
const previousVisible = ref()
// Computed property to get the letters for the current visible header
const letters = computed(() => {
    return currentVisible.value
})
</script>

<template>
    <PageLayout :key="pocket.key" nav>
        <template #header>
            <template v-for="(letter, index) in letters">
                {{ letter }}
            </template>
        </template>

        <!------------------------⟢ menu ⟣------------------------->

        <template #header-center>
            <div v-for="el in els" :key="el.name">
                <span v-if="!el.trigger">
                    <label
                        @click="scrollToSection(el.ref)"
                        class="group mb-px flex gap-1 font-medium opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-100"
                        :class="{
                            'text-base-content !opacity-100':
                                el.name == pocket.component,
                        }">
                        <input
                            type="radio"
                            :value="el.ref"
                            v-model="currentVisible"
                            class="peer hidden" />
                        <span class="w-max min-w-max px-1.5 capitalize">
                            {{ el.name }}
                        </span>
                    </label>
                </span>

                <VDropdown
                    v-else
                    theme="hover"
                    :delay="{ show: 400, hide: 200 }"
                    placement="bottom"
                    instant-move
                    :show-group="el.type"
                    no-auto-focus>
                    <label
                        @click="scrollToSection(el.ref)"
                        class="dd group mb-px flex items-center gap-1 font-medium opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-100"
                        :class="{
                            'text-base-content !opacity-100':
                                el.name == pocket.component,
                        }">
                        <input
                            type="radio"
                            :value="el.ref"
                            v-model="currentVisible"
                            class="peer hidden" />

                        <span class="w-max min-w-max px-1 capitalize">
                            {{ el.name }}
                        </span>

                        <ToggleButton class="pointer-events-none self-center" />
                    </label>

                    <template #popper>
                        <!--  <HvPocket
                            :type="el.type"
                            :data="el.data"
                            :pocket="pocket" /> -->
                    </template>
                </VDropdown>
            </div>
        </template>

        <template #indicator>
            <div
                class="absolute -top-px flex self-start opacity-80 transition-all duration-500"
                :class="{
                    'translate-x-[11px]': pocket.component == 'dashboard',
                    'translate-x-[110px]': pocket.component == 'champions',
                    'translate-x-[221px]': pocket.component == 'items',
                    'translate-x-[301px]': pocket.component == 'runes',
                }">
                <icon
                    icon="fluent:line-horizontal-1-24-regular"
                    class="-mt-1 size-3" />
            </div>
        </template>

        <template #header-end>
            <div class="absolute -right-2 mb-3 flex h-full pt-1">
                <!--    <Dropdown class="w-full">
                    <template #1>
                        <PocketIcon
                            :pocket="pocket"
                            class="size-9 rounded-full" />
                    </template>
                    <template #2>
                        <span class="grow text-left">{{ pocket.name }}</span>
                    </template>
                </Dropdown> -->
            </div>
        </template>

        <div
            id="pocket-contents"
            class="carousel h-full w-[98%] justify-self-center overflow-y-hidden overflow-x-scroll">
            <a
                class="carousel-item relative w-full max-w-full"
                ref="dashboard"
                id="dashboard">
                <router-view v-slot="{ Component }">
                    <component
                        :is="Dashboard"
                        :pocketKey="pocket.key"
                        :key="pocket.key" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="champions" id="champions">
                <router-view v-slot="{ Component }">
                    <component
                        :is="Champions"
                        :pocketKey="pocket.key"
                        :key="pocket.key" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="items" id="items">
                <router-view v-slot="{ Component }">
                    <component
                        :is="Items"
                        :pocketKey="pocket.key"
                        :key="pocket.key" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="runes" id="runes">
                <router-view v-slot="{ Component }">
                    <component
                        :is="Runes"
                        :pocketKey="pocket.key"
                        :key="pocket.key" />
                </router-view>
            </a>
        </div>
    </PageLayout>
</template>

<!------------------------⟢ style ⟣------------------------->
<style>
.v-popper--shown {
    & label {
        opacity: 1;
    }
}
</style>
