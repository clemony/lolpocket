<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'

/* ------------------------------- NAVIGATION ------------------------------- */
const sn = useSessionStore()




const currentComponent = ref('')


const activeTab = ref('')

function removeTab(id) {
    const tabIndex = sn.openTabs.findIndex((tab) => tab.id === id);

    sn.openTabs = sn.openTabs.filter((tab) => tab.id !== id);

    if (sn.openTabs.length) {
        if (tabIndex >= sn.openTabs.length) {
            // If the removed tab was the last, activate the previous one
            activeTab.value = sn.openTabs[sn.openTabs.length - 1].link;
        } else {
            // Otherwise, activate the one that replaced it in index
            activeTab.value = sn.openTabs[tabIndex].link;
        }
        sn.navigateTo(activeTab.value);
    } else {
        // Reset when no tabs are left
        activeTab.value = '';
        sn.navigateTo('/home');
    }
}


/* ------------------------------ WATCHES & ON MOUNTED ----------------------------- */

function navigate(tab, link) {
    sn.navigateTo(tab.link)
}

onMounted(() => {
    // Ensure openTabs are reset correctly on app start
    sn.openTabs.length = 0;
    sn.activeTab = '';
    activeTab.value = ''; // Reset local activeTab reference

    // Redirect to home or default if there are no open tabs
    sn.navigateTo('/home');
});
</script>

<template>
<div data-tauri-drag-region role="tablist"
    class="tabs pt-0.5 tabs-lifted tabs-sm pointer-events-auto z-10 mr-28 flex overflow-y-hidden overflow-x-scroll scrollbar-hide">
    <template v-for="(tab, index) in sn.openTabs" :key="tab.id">
        <a role="tab"
            class="group tab pointer-events-auto z-[5] m-0 flex h-[30px] w-36 min-w-32 flex-nowrap justify-start  font-medium capitalize before:visible before:-left-[8px] after:visible"
            :alt="tab.name" :class="['tab', { 'tab-active': sn.isActiveTab(tab.link) }]"
            @click.prevent="navigate(tab, tab.link)">
            <Icon :icon="tab.icon || 'default-icon'" class="ml-1 mr-2 !size-3.5 shrink-0" />
            <span class="mt-[2px] w-full min-w-0 max-w-28 justify-start truncate text-start">{{ tab.title }}</span>

            <button
                class="flex size-4 content-center justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                @click.stop="removeTab(tab.id)">
                <!-- Stop event propagation to prevent tab click -->
                <Icon icon="material-symbols:close" class="-mr-1 ml-2 size-3.5" />
            </button>
        </a>
        <div role="tabpanel"
            class="tab-content absolute inset-0 m-0 mt-[31px] h-auto overflow-hidden !rounded-bl-none !rounded-tr-none border border-base-300 !bg-base-100/90 !p-0 !shadow-[inset_-12px_-8px_40px_#00000020]">
            <router-view v-slot="{ Component }">
                <KeepAlive include='Pocket, PocketChampions, PocketItems, PocketRunes, PocketDashboard'>
                    <component :is="Component" ref="currentComponent" :id="tab.id" />
                </KeepAlive>
            </router-view>
        </div>
    </template>
    <a role="tab" class="closet hidden">skeletons</a>
</div>
</template>

<style scoped>
/* beautify ignore:start */

.tab {
    --tab-bg: oklch(var(--b1) / 90%) !important;
    --tab-corner-bg: oklch(var(--b1) / 60%) !important;
     --tab-border: 1px !important;
     --tab-radius: 0.35rem !important;
}

.layout.tabs {
    @apply tabs-lifted tabs-lg mx-4;
}

.tabs > .tab-content {
    @apply rounded-box border-base-300 bg-base-100 p-6 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px];
}

.tab {
    border-bottom-color: transparent !important;
    padding-bottom: 0 !important;
}

.tab-active {
    --shadow-color: oklch(var(--b1) / 0.4);
    @apply !z-30 bg-base-100 brightness-[96%];

    &::after,
    &::before {
        @apply ml-[2.5px];
    }
}</style>
