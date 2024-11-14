<script setup lang="ts">
import { scrollToSection } from '@/lib/functions/Navigation'
import DashboardOverview from '@/components/pocket/dashboard/dashboard-overview.vue';
import { usePocketStore } from '../../stores/pocketStore'

import { useSessionStore } from '@stores/sessionStore'
const sn = useSessionStore();

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const route = useRoute()



const pocketKey = ref(route.params.pocketKey as string);
const pocket = ref(ps.getPocket(pocketKey.value));

// Watch for changes to the route parameter and update pocket data accordingly
watch(
    () => route.params.pocketKey,
    (newPocketKey) => {
        if (newPocketKey) {
            pocketKey.value = newPocketKey as string;
            pocket.value = ps.getPocket(newPocketKey);
        }
    }
);



onActivated(() => {
    console.log('index')
})

const pTabs = defineModel({
    default: 'final',
})

const Overview = defineAsyncComponent({
    loader: () => import('@/components/pocket/dashboard/dashboard-overview.vue'),
})

const comps = [
    {
        component: Overview,
        cRef: 'overview',
        id: 'overview'
    }
]

const overview = ref()
const start = ref()
const core = ref()
const final = ref()
const overviewVisible = useElementVisibility(overview)
const startVisible = useElementVisibility(overview)
const coreVisible = useElementVisibility(overview)
const finalVisible = useElementVisibility(overview)
const currentVisible = ref(null) // Will store the name of the visible element


const els = [
    {
        ref: overview,
        isVisible: overviewVisible,
        name: 'Overview'
    },
    {
        ref: start,
        isVisible: startVisible,
        name: 'Start',
    },
    {
        ref: core,
        isVisible: coreVisible,
        name: 'Core Items',
    },
    {
        ref: final,
        isVisible: finalVisible,
        name: 'Final Build',
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
            }
        },
        { threshold: 0.5 } // Adjust this value to control the visibility offset
    )
})


</script>

<template>
<Layout3 :key="pocketKey" col2Class="px-6">
    <template #col1>

        <div class='grid grid-cols-[20px_auto] gap-y-5 '>
            <h1 class="mb-3 col-start-2">Build</h1>

            <div class='row-span-4 mt-0.5 justify-start'>
                <icon icon="radix-icons:caret-right" class='absolute  !size-5  transition-all duration-300' :class="{
                    'translate-y-0': currentVisible == 'Overview',
                    'translate-y-[33px]': currentVisible == 'Start',
                    'translate-y-[66px]': currentVisible == 'Core Items',
                    'translate-y-[99px]': currentVisible == 'Final Build',
                }" />
            </div>

            <label v-for="el in els" :key="el.name"
                class='text-start col-start-2 flex  gap-1 items-center hover:underline relative'
                @click="scrollToSection(el.ref)">
                <input type="radio" :value="el.name" v-model="currentVisible" class='peer hidden' />

                <span
                    class='peer-checked:font-medium  peer-checked:opacity-100 opacity-50 transition-opacity duration-300'>
                    {{ el.name }}
                </span>
            </label>
        </div>
    </template>

    <template #col2>

        <a class="carousel-item size-full max-h-inherit relative flex flex-col" ref="overview" id="overview">
            <LayoutSpacer />
            <Overview :pocket="pocket" />
        </a>
        <a class="carousel-item size-full max-h-inherit relative flex flex-col" ref="start" id="start">
            <LayoutSpacer />
            <DashboardOverview :pocket="pocket" />
        </a>
        <a class="carousel-item size-full max-h-inherit relative flex flex-col" ref="core" id="core">
            <LayoutSpacer />
            <DashboardOverview :pocket="pocket" />
        </a>
        <a class="carousel-item size-full max-h-inherit relative flex flex-col" ref="final" id="final">
            <LayoutSpacer />
            <DashboardOverview :pocket="pocket" />
        </a>
    </template>




    <template #col3>
        <DashboardSidebar :pocketKey="pocketKey" :key="pocketKey" />
    </template>
</Layout3>
</template>

<style scoped></style>