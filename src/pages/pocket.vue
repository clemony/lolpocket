<route lang="json">{
    "name": "pocket",
    "props": true,
    "path": "/pocket/:pocketKey",
    "component": "pocket",
    "meta": {
        "title": "Pocket",
        "icon": "teenyicons:folder-outline"
    }
}</route>

<script setup lang="ts">
import { ref, watch, getCurrentInstance, computed } from 'vue'
import { useSessionStore } from './../stores/sessionStore'
import { usePocketStore } from './../stores/pocketStore'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()

const ps = usePocketStore()
const ss = useSessionStore()
const sn = useSessionStore()

const pocketKey = ref<string>((route.params.pocketKey as string) || '')

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ps.getPocket(pocketKey)

watch(
    () => route.params.pocketKey,
    (newKey) => {
        if (newKey) {
            pocketKey.value = newKey as string // Type assertion to string
        }
    }
)

// Compute `currentPocket` based on the reactive `pocketKey`
const currentPocket = computed(() => {
    return ps.getPocket(pocketKey.value)
})

const isClicked = ref(false)

const isActive = ref(false)

function handleExport() {
    isClicked.value = true
    isActive.value = true
}

const sidebarButton = computed(() => {
    if (ps.showSidebar == true) {
        return 'Collapse Sidebar'
    } else {
        return 'Open Sidebar'
    }
})

const matchedPath = computed(() => {
    return route.path
})

const cleanPath = computed(() => {
    if (matchedPath) {
        let p = matchedPath.value.match('pocket\-(.*)')
        if (p) {
            return p[1]
        } else {
            return 'Planner'
        }
    }
})

console.log(matchedPath.value)
console.log(cleanPath.value)
console.log(route)

const links = [
    {
        name: 'Planner',
        link: '',
        icon: 'ep:notebook',
    },
    {
        name: 'Champions',
        link: 'pocket-champions',
        icon: 'teenyicons:user-circle-outline',
    },
    {
        name: 'Items',
        link: 'pocket-items',
        icon: '',
    },
    {
        name: 'Runes',
        link: 'pocket-runes',
        icon: 'teenyicons:hexagon-outline',
    },
]
</script>

<template>
    <div v-if="currentPocket" class="items-center content-center w-full py-4">
        <div class="pb-0 ml-5 pl-2 flex gap-5 w-[96%]">
            <div class="flex items-center text-xs breadcrumbs">
                <ul>
                    <li>
                        <a @click="ss.navigateTo('/pockets/pockets')">
                            Pockets
                        </a>
                    </li>
                    <li class="">
                        <RouterLink :to="{ path: `/pocket/${currentPocket.key}/` }" class="flex gap-2 cursor-pointer">
                            <!--  <icon :icon="currentPocket.icon" /> -->
                            {{ currentPocket.name }}
                        </RouterLink>
                    </li>
                    <li class="cursor-pointer">
                        <VDropdown theme="detail" placement="bottom-start" :triggers="['hover']"
                            :popperTriggers="['hover']" :skidding="-6" :distance="-22">
                            <button class="flex items-center gap-2 capitalize">
                                {{ cleanPath }}
                                <icon icon="teenyicons:down-small-solid" />
                            </button>
                            <template #popper>
                                <div class="flex flex-col p-1 space-y-1.5 min-w-28">
                                    <button v-for="link in links" :class="{
                                        hidden:
                                            link.name.toLowerCase() ==
                                            cleanPath,
                                    }" class="justify-start rounded-xs btn-ghost btn-xs">
                                        <RouterLink :to="{
                                            path: `/pocket/${currentPocket.key}/${link.link}`,
                                        }" class="flex items-center gap-2" v-close-popper>
                            
<i-ui-icons-noun-sword v-if="link.name == 'Items'" class="!size-4.5 -ml-0.5" />
                                            <icon :icon="link.icon" v-else class="size-3.5 text-base-content"  />

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

            <div class="join *:text-xs items-center *:font-normal justify-self-end">
                <RouterLink v-for="link in links" exactActiveClass="link-active"
                    :to="{ path: `/pocket/${currentPocket.key}/${link.link}` }" class="w-12 join-item btn btn-sm">
                   
<i-ui-icons-noun-sword v-if="link.name == 'Items'" class="!size-5 -ml-0.5" />
                    <icon :icon="link.icon" v-else class="size-4.5 text-base-content"  />
                </RouterLink>
            </div>

            <div class="items-center join">
                <label :class="{ active: ps.showSidebar == true }" :title="sidebarButton"
                    class="relative flex items-center join-item btn btn-sm swap swap-rotate text-nowrap">
                    <input type="checkbox" v-model="ps.showSidebar" :value="ps.showSidebar" class="hidden" checked />
                    <icon icon="teenyicons:send-right-solid" class="swap-on size-3.5" />
                    <icon icon="teenyicons:send-left-outline" class="absolute swap-off size-3.5" />
                </label>

                <button class="btn btn-sm join-item">
                    <icon icon="teenyicons:more-horizontal-outline" class="swap-on size-4" />
                </button>
            </div>
        </div>
    </div>

    <!------------------------⟢ router ⟣------------------------->

    <RouterView v-slot="{ Component }" class="w-full h-full">
        <Transition name="component">
            <component :is="Component" ref="section" :pocketKey="pocketKey" />
        </Transition>
    </RouterView>
</template>

<!------------------------⟢ style ⟣------------------------->
<style>
button.active,
label.active,
.link-active {
    @apply bg-neutral text-neutral-content border-neutral hover:bg-neutral/80;

    & svg {
        @apply text-neutral-content;
    }
}

.slot {
    @apply size-[60px] aspect-square rounded-md ring-1 ring-offset-[2px] ring-base-300/90 ring-offset-base-100;
}

.show {
    @apply opacity-100 block;
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
