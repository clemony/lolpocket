<script setup lang="ts">
import { ref, onMounted, shallowRef, watch } from 'vue'
import { useSessionStore } from '../../stores/sessionStore'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { usePocketStore } from '../../stores/pocketStore'

/* ------------------------------- NAVIGATION ------------------------------- */
const sn = useSessionStore()
const ps = usePocketStore()
const router = useRouter()
const route = useRoute()

// Track the active tab
const activeTab = ref('')

// Method to remove a tab by id and set the next tab as active
function removeTab(id) {
    const tabIndex = sn.openTabs.findIndex((tab) => tab.id === id)

    // Remove the tab by filtering it out
    sn.openTabs = sn.openTabs.filter((tab) => tab.id !== id)

    // Set the next active tab
    if (sn.openTabs.length > 0) {
        if (tabIndex === sn.openTabs.length) {
            // If the last tab was removed, set the previous tab as active
            activeTab.value = sn.openTabs[sn.openTabs.length - 1].tab.link
        } else {
            // Otherwise, set the next tab as active
            activeTab.value =
                sn.openTabs[tabIndex] ?
                    sn.openTabs[tabIndex].tab.link
                :   sn.openTabs[sn.openTabs.length - 1].tab.link
        }

        // Optionally, navigate to the newly active tab
        sn.navigateTo(activeTab.value)
    } else {
        // If no tabs are left, reset the active tab
        activeTab.value = ''
        sn.navigateTo('/home')
    }
}

/* ------------------------------ WATCHES & ON MOUNTED ----------------------------- */
// Watch openTabs to force the component to re-render when titles change
watch(
    () => sn.openTabs,
    (newTabs, oldTabs) => {
        console.log('Tabs updated:', newTabs)
    },
    { deep: true }
)

function navigate(tab, link) {
    sn.navigateTo(tab.tab.link)
}

onMounted(() => {
    if (!sn.activeTab) {
        sn.navigateTo('/')
    }
})
</script>

<template>
    <div
        data-tauri-drag-region
        role="tablist"
        class="z-10 flex overflow-x-scroll overflow-y-hidden pointer-events-auto mr-28 tabs tabs-sm tabs-lifted scrollbar-hide">
        <template v-for="tab in sn.openTabs" :key="tab.id">
            <a
                role="tab"
                class="group flex h-7 flex-nowrap justify-start tab m-0 w-36 min-w-32 before:visible before:-left-[8px] after:visible capitalize text-xs z-[5] pointer-events-auto font-medium"
                :alt="tab.tab.name"
                :class="['tab', { 'tab-active': sn.isActiveTab(tab.tab.link) }]"
                @click.prevent="navigate(tab, tab.tab.link)">
                <Icon
                    :icon="tab.icon || 'default-icon'"
                    class="!size-3.5 shrink-0 mr-2 ml-1" />
                <span
                    class="mt-[2px] w-full text-start max-w-28 min-w-0 justify-start truncate"
                    >{{ tab.title }}</span
                >

                <button
                    class="flex content-center justify-end transition-opacity duration-300 opacity-0 group-hover:opacity-70 size-4"
                    @click.stop="removeTab(tab.id)">
                    <!-- Stop event propagation to prevent tab click -->
                    <Icon
                        icon="material-symbols:close"
                        class="size-3.5 ml-2 -mr-1" />
                </button>
            </a>
            <div
                role="tabpanel"
                class="tab-content overflow-hidden !bg-base-100/90 absolute inset-0 m-0 mt-[27px] border-base-300 border h-auto !p-0 !rounded-bl-none !rounded-tr-none !shadow-[inset_-12px_-8px_40px_#00000020]">
                <RouterView />
            </div>
        </template>
        <a role="tab" class="hidden basket">egg</a>
    </div>
</template>

<style scoped>
/* beautify ignore:start */
.tab {
    --tab-bg: oklch(var(--b1) / 90%) !important;
    --tab-corner-bg: oklch(var(--b1) / 60%) !important;
}

.layout.tabs {
    @apply tabs-lg tabs-lifted mx-4;
}

.tabs > .tab-content {
    @apply shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-6 bg-base-100 border-base-300 rounded-box;
}

.tab {
    border-bottom-color: transparent !important;
    padding-bottom: 0 !important;
}

.tab-active {
    --shadow-color: oklch(var(--b1) / 0.4);
    @apply bg-base-100 brightness-[96.5%]  !z-30;

    &::after,
    &::before {
        @apply ml-[1.5px];
    }
}
</style>
