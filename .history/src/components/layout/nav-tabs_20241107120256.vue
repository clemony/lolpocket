<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'

/* ------------------------------- NAVIGATION ------------------------------- */
const sn = useSessionStore()




const currentComponent = ref('')




function removeTab(id) {
    const tabIndex = sn.openTabs.findIndex((tab) => tab.id === id)

    const activeTabIndex = sn.openTabs.findIndex((tab) => tab.link === sn.activeTab)

    sn.openTabs = sn.openTabs.filter((tab) => tab.id !== id);

    if (tabIndex == activeTabIndex) {
        if (sn.openTabs.length) {
            if (tabIndex >= sn.openTabs.length) {
                // If the removed tab was the last, activate the previous one
                sn.activeTab = sn.openTabs[sn.openTabs.length - 1].link;
            } else {
                // Otherwise, activate the one that replaced it in index
                sn.activeTab = sn.openTabs[tabIndex].link;
            }
            sn.navigateTo(sn.activeTab);
        } else {
            // Reset when no tabs are left
            sn.activeTab = '';
            sn.navigateTo('/home');
        }
    }
}


/* ------------------------------ WATCHES & ON MOUNTED ----------------------------- */

function navigate(tab, link) {
    sn.navigateTo(tab.link)
}

onMounted(() => {

    if (!sn.activeTab) {
        sn.navigateTo('/home');
    }
});
</script>

<template>
<div data-tauri-drag-region class='flex mr-24 scrollbar-hide  overflow-x-scroll w-[calc(100%-108px)]'>
    <div data-tauri-drag-region
        class="pt-0.5  !overflow-x-scroll  pointer-events-auto z-10 mr-28  scrollbar-hide  tabs-lifted tabs-sm   !contents ">
        <template v-for="(tab, index) in sn.openTabs" :key="tab.id">

            <a class="group pointer-events-auto z-[5]  m-0 flex flex-nowrap justify-start tab gap-1 items-center h-[31px] w-full grow font-medium capitalize  before:-left-[5.5px]  mt-0.5 "
                :alt="tab.name" :class="{ 'tab-active': sn.isActiveTab(tab.link) }"
                @click.prevent="navigate(tab, tab.link)">
                <Icon :icon="tab.icon || 'default-icon'" class="ml-1 mr-2 w-3.5 h-auto  shrink-0 pointer-events-none" />
                <span class=" grow text-base w-full min-w-0 max-w-36 justify-start truncate text-start pr-3">{{
                    tab.title
                    }}</span>

                <button
                    class="flex size-4 absolute right-2  content-center justify-end opacity-0 transition-opacity duration-300 hover:opacity-100 hover:stroke-[1.5] group-hover:opacity-80"
                    @click.stop="removeTab(tab.id)">
                    <!-- Stop event propagation to prevent tab click -->
                    <Icon icon="teenyicons:x-small-outline" class=" size-full" />
                </button>
            </a>



        </template>

        <div role="tab" data-tauri-drag-region
            class=" pointer-events-none   m-0 flex flex-nowrap justify-start tab  h-[30px] !w-full shrink min-w-28  mt-0.5">

        </div>
        <div role="tabpanel" class='size-full'>
        </div>
    </div>
</div>
</template>
<style scoped>
/* beautify ignore:start */




.tabs > .tab-content {
    @apply rounded-box border-base-300 bg-base-100 p-6 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px];
}

.tab {
    border-bottom-color: transparent !important;
    padding-bottom: 0 !important;
}

.tab-active {
    --shadow-color: oklch(var(--b1) / 0.4);
    @apply !z-30 bg-base-100/90 brightness-[99.5%];

    
}</style>
