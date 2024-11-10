<script setup lang="ts">
import { scrollToSection } from '@/lib/functions/Navigation'
import { usePocketStore } from './../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'

import { defineAsyncComponent } from 'vue'
import { log } from 'console';

const Dashboard = defineAsyncComponent(() =>
    import('../components/pocket/pocket-dashboard.vue')
)

const Champions = defineAsyncComponent(() =>
    import('../components/pocket/pocket-champions.vue')
)

const Items = defineAsyncComponent(() =>
    import('../components/pocket/pocket-items.vue')
)

const Runes = defineAsyncComponent(() =>
    import('../components/pocket/pocket-runes.vue')
)

const props = defineProps<{
    pocketKey?: string;
    id?: any
}>();

console.log('link', props.id)
const ps = usePocketStore();
const sn = useSessionStore();

const pocket = ref(ps.getPocket(props.pocketKey))



/* onMounted(() => {
    if (props.pocketKey !== from.params.pocketKey) {
        pocket.value = await(ps.getPocket(to.params.pocketKey))
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
        name: 'dashboard'
    },
    {
        ref: champions,
        isVisible: championsIsVisible,
        name: 'champions',
        type: 'champion',
        trigger: true,
        data: pocket.value.champions[0].champions
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
        data: pocket.value.runes[0].runeSets
    }
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
        console.log(newVal);

    }
)

onBeforeRouteUpdate(async (to, from) => {
    if (to.params.pocketKey !== from.params.pocketKey) {
        pocket.value = await (ps.getPocket(to.params.pocketKey))
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
    { name: 'dashboard', letters: ['d', 'a', 's', 'h', 'b', 'o', 'a', 'r', 'd'] },
    { name: 'champions', letters: ['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n', 's'] },
    { name: 'items', letters: ['i', 't', 'e', 'm', 's'] },
    { name: 'runes', letters: ['r', 'u', 'n', 'e', 's'] }
];
const previousVisible = ref()
// Computed property to get the letters for the current visible header
const letters = computed(() => {
    const match = headers.find(header => header.name === currentVisible.value);
    return match ? match.letters : [];
});
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
                <label @click="scrollToSection(el.ref)"
                    class='hover:cursor-pointer hover:opacity-100 opacity-50 transition-all group flex gap-1 duration-300 font-medium mb-px'
                    :class="{ ' !opacity-100 text-base-content': el.name == pocket.component }">
                    <input type="radio" :value="el.ref" v-model="currentVisible" class='peer hidden' />
                    <span class=' capitalize  px-1.5 min-w-max w-max'>
                        {{ el.name
                        }}</span>
                </label>
            </span>

            <VDropdown v-else theme="hoverdd" :delay="{ show: 400, hide: 200 }" placement="bottom" class=''
                no-auto-focus>


                <label @click="scrollToSection(el.ref)"
                    class='hover:cursor-pointer hover:opacity-100 opacity-50 font-medium transition-all group flex gap-1 duration-300 items-center mb-px'
                    :class="{ ' !opacity-100 text-base-content': el.name == pocket.component }">
                    <input type="radio" :value="el.ref" v-model="currentVisible" class='peer hidden' />


                    <span class=' capitalize  px-1 min-w-max w-max'>
                        {{ el.name
                        }}</span>

                    <ButtonToggle class='pointer-events-none self-center' />

                </label>


                <template #popper>

                    <HvPocket :type="el.type" :data="el.data" :pocket="pocket" instant-move :show-group="el.type" />
                </template>
            </VDropdown>

        </div>



    </template>

    <template #indicator>
        <div class=' -top-px self-start flex absolute transition-all duration-500 opacity-80' :class="{
            'translate-x-[11px]': pocket.component == 'dashboard',
            'translate-x-[110px]': pocket.component == 'champions',
            'translate-x-[221px]': pocket.component == 'items',
            'translate-x-[301px]': pocket.component == 'runes'
        }">
            <icon icon="fluent:line-horizontal-1-24-regular" class='size-3 -mt-1' />
        </div>
    </template>

    <template #header-end>
        <div class='flex h-full absolute  py-1 right-4 mb-3'>
            <PocketButton :pocket="pocket" />
        </div>
    </template>


    <template #content>
        <div id='pocket-contents'
            class=" carousel  w-[98%] h-full justify-self-center  overflow-y-hidden overflow-x-scroll ">
            <a class="carousel-item w-full max-w-full relative" ref="dashboard" id="dashboard">
                <Dashboard :pocketKey="pocket.key" :key="pocket.key" />
            </a>
            <a class="carousel-item w-full" ref="champions" id="champions">
                <Champions :pocketKey="pocket.key" :key="pocket.key" />
            </a>
            <a class="carousel-item w-full" ref="items" id="items">
                <Items :pocketKey="pocket.key" :key="pocket.key" />
            </a>
            <a class="carousel-item w-full" ref="runes" id="runes">
                <Runes :pocketKey="pocket.key" :key="pocket.key" />
            </a>

        </div>
    </template>

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
