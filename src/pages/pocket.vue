<script setup lang="ts">

import { usePocketStore } from './../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'

const props = defineProps<{
    pocketKey?: string;
    id?: any
}>();

console.log('link', props.id)
const ps = usePocketStore();
const sn = useSessionStore();

const pocket = ref(ps.getPocket(props.pocketKey))

const route = useRoute()
const matchedPath = computed(() => route.name)

const cleanPath = computed(() => {
    matchedPath.toString() == '' ? 'Dashboard' : matchedPath.toString()
});


console.log('match', matchedPath.value)
console.log(route)

const links = [
    {
        name: 'Dashboard',
        link: '',
        icon: 'heroicons:squares-2x2-16-solid',
    },
    {
        name: 'Champions',
        link: 'champions',
        icon: 'teenyicons:user-circle-outline',
    },
    {
        name: 'Items',
        link: 'items',
        icon: '',
    },
    {
        name: 'Runes',
        link: 'runes',
        icon: '',
    },
]

onBeforeRouteUpdate(async (to, from) => {
    if (to.params.pocketKey !== from.params.pocketKey) {
        pocket.value = await (ps.getPocket(to.params.pocketKey))
    }
})
</script>

<template>
<div class="w-full content-center items-center py-4" :key="pocket.key">
    <div class="ml-5 flex w-[96%] gap-5 pb-0 pl-2">

        <!------------------------⟢ breadcrumb ⟣------------------------->

        <div class="breadcrumbs flex items-center ">
            <ul>
                <li>
                    <a @click="sn.navigateTo('/pockets/pockets')">
                        Pockets
                    </a>
                </li>
                <li class="">
                    <RouterLink :key="pocket.key" :to="{ path: `/pocket/${pocket.key}/` }"
                        class="flex cursor-pointer gap-2">
                        <!--  <icon :icon="pocket.icon" /> -->
                        {{ pocket.name }}
                    </RouterLink>
                </li>

                <!------------------------⟢ dd menu ⟣------------------------->

                <li class="cursor-pointer">
                    <VDropdown theme="detail" placement="bottom-start" :triggers="['hover']" :popperTriggers="['hover']"
                        :skidding="-6" :distance="-22">
                        <button class="flex items-center gap-2 capitalize">
                            {{ cleanPath }}
                            <icon icon="mi:select" class='size-3' />
                        </button>
                        <template #popper>
                            <div class="flex min-w-28 flex-col space-y-1.5 p-1">
                                <button v-for="link in links" class="btn-ghost btn-xs justify-start rounded-xs">
                                    <RouterLink :to="{
                                        path: `/pocket/${pocket.key}/${link.link}`,
                                    }" class="flex items-center gap-2" v-close-popper>
                                        <ui-noun-sword v-if="link.name == 'Items'" class="-ml-0.5 !size-4.5" />

                                        <ui-rune v-if="link.name == 'Runes'" class="size-3.5 stroke-[2.5]" />

                                        <icon :icon="link.icon" v-if="
                                            link.name == '' ||
                                            link.name == 'Champions'
                                        " class="size-3.5 text-base-content" />

                                        {{ link.name }}
                                    </RouterLink>
                                </button>
                            </div>

                        </template>
                    </VDropdown>
                </li>
            </ul>
        </div>

        <div class="grow"></div>

        <!------------------------⟢ side menu ⟣------------------------->

        <div class="join items-center justify-self-end *: *:font-normal ">
            <RouterLink v-for="link in links" exactActiveClass="link-active"
                :to="{ path: `/pocket/${pocket.key}/${link.link}` }" class="w-[58px] btn join-item btn-sm ">
                <ui-noun-sword v-if="link.name == 'Items'" class="-ml-0.5 !size-5" />

                <ui-rune v-if="link.name == 'Runes'" class="size-4.5 stroke-[2.5]" />

                <icon :icon="link.icon" v-if="
                    link.name == 'Dashboard' || link.name == 'Champions'
                " class="size-4.5 text-base-content" />
            </RouterLink>
        </div>

        <button class="btn  btn-sm w-[45px]">
            <icon icon="teenyicons:more-horizontal-outline" class="size-4" />
        </button>

    </div>
</div>

<!------------------------⟢ router ⟣------------------------->

<RouterView v-slot="{ Component }" class="h-full w-full">

    <Transition name="component">
        <component :is="Component" :key="pocketKey" ref="section" :pocketKey="pocketKey" :id="props.id" />
    </Transition>


</RouterView>
</template>

<!------------------------⟢ style ⟣------------------------->
<style>
button.active,
label.active,
.link-active {
    @apply border-neutral bg-neutral text-neutral-content hover:bg-neutral/80;

    & svg {
        @apply text-neutral-content;
    }
}

.slot {
    @apply aspect-square size-[60px] rounded-md ring-1 ring-base-300/90 ring-offset-[2px] ring-offset-base-100;
}

.show {
    @apply block opacity-100;
}

/* beautify ignore:start */
.empty {
    @apply !size-6 hover:!size-10;
}

.filter-on {
    &::after {
        @apply content-[''];
    }
}

.DragFeedback__feedback {
    opacity: 0 !important;
    visibility: hidden !important;
    display: none !important;
}</style>
