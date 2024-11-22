<script setup lang="ts">
import { useSessionStore } from '@/stores/sessionStore'

/* ------------------------------- NAVIGATION ------------------------------- */
const sn = useSessionStore()

const currentComponent = ref('')

function removeTab(id) {
    const tabIndex = sn.openTabs.findIndex((tab) => tab.id === id)

    const activeTabIndex = sn.openTabs.findIndex(
        (tab) => tab.link === sn.activeTab
    )

    sn.openTabs = sn.openTabs.filter((tab) => tab.id !== id)

    if (tabIndex == activeTabIndex) {
        if (sn.openTabs.length) {
            if (tabIndex >= sn.openTabs.length) {
                // If the removed tab was the last, activate the previous one
                sn.activeTab = sn.openTabs[sn.openTabs.length - 1].link
            } else {
                // Otherwise, activate the one that replaced it in index
                sn.activeTab = sn.openTabs[tabIndex].link
            }
            sn.navigateTo(sn.activeTab)
        } else {
            // Reset when no tabs are left
            sn.activeTab = ''
            sn.navigateTo('/home')
        }
    }
}

/* ------------------------------ WATCHES & ON MOUNTED ----------------------------- */

function navigate(tab, link) {
    sn.navigateTo(tab.link)
}

onMounted(() => {
    if (!sn.activeTab) {
        sn.navigateTo('/home')
    }
})
/* 

        :class="{
                    '!rounded-tl-none': sn.activeTab == sn.openTabs[0].link,
                }"

                  <div class="absolute flex h-full w-full min-w-full overflow-scroll">
                <TitleTabs />
            </div>  */
</script>

<template>
    <div
        data-tauri-drag-region
        class="mr-24 flex w-[calc(100%-108px)] overflow-x-scroll scrollbar-hide">
        <div
            data-tauri-drag-region
            class="tabs-lifted tabs-sm pointer-events-auto z-10 mr-28 !contents !overflow-x-scroll pt-0.5 scrollbar-hide">
            <template v-for="(tab, index) in sn.openTabs" :key="tab.id">
                <a
                    class="group tab pointer-events-auto z-[5] m-0 mt-0.5 flex h-[31px] w-full grow flex-nowrap items-center justify-start gap-1 font-medium capitalize before:-left-[5.5px]"
                    :alt="tab.name"
                    :class="{ 'tab-active': sn.isActiveTab(tab.link) }"
                    @click.prevent="navigate(tab, tab.link)">
                    <Icon
                        :icon="tab.icon || 'default-icon'"
                        class="pointer-events-none ml-1 mr-2 h-auto w-3.5 shrink-0" />
                    <span
                        class="w-full min-w-0 max-w-36 grow justify-start truncate pr-3 text-start text-base">
                        {{ tab.title }}
                    </span>

                    <button
                        class="absolute right-2 flex size-4 content-center justify-end opacity-0 transition-opacity duration-300 hover:stroke-[1.5] hover:opacity-100 group-hover:opacity-80"
                        @click.stop="removeTab(tab.id)">
                        <!-- Stop event propagation to prevent tab click -->
                        <Icon
                            icon="teenyicons:x-small-outline"
                            class="size-full" />
                    </button>
                </a>
            </template>

            <div
                role="tab"
                data-tauri-drag-region
                class="tab m-0 mt-0.5 flex h-[30px] !w-full min-w-28 shrink flex-nowrap justify-start"></div>
            <div role="tabpanel" class="size-full"></div>
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
}
</style>
