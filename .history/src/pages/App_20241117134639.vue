<script setup lang="ts">
import '@assets/css/imports.css'
import { useSessionStore } from '@/stores/sessionStore'
//import {navigateTo}
import { useDataStore } from '@/stores/dataStore'
import { usePocketStore } from '@/stores/pocketStore'
import { Toaster } from '@/components/base/sonner'
import { navData } from '@/components/Layout/Sidebar/Nav'
import { commandModal, newPocketModal } from '@/components/Layout/ui/Modal'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
const ps = usePocketStore()
const sn = useSessionStore()
const ds = useDataStore()
ds.fetchData()

const pinnedPockets = ref(ps.pinned)
watch(
    () => ps.pinned,
    (newVal) => {
        pinnedPockets.value = newVal
    }
)

/* ------------------------------ ON MOUNTED ----------------------------- */

const navPockets = [
    {
        title: 'All',
        url: '/pockets',
        array: ps.pockets,
        icon: 'formkit:folder',
    },
    {
        title: 'Trash',
        url: '/trash',
        array: ps.trashPockets,
        icon: 'formkit:trash',
    },
    {
        title: 'Archive',
        url: '/archive',
        array: ps.archivePockets,
        icon: 'fluent:archive-16-regular',
    },
]

// State for controlling modal open/close and the active modal data
</script>

<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="gs.toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="gs.toggleModalState(commandModal)"
        class="open-command"></div>

    <Modal />
    <!--  <Titlebar /> -->
    <Toaster />

    <!--     <MainMenubar /> -->

    <SidebarProvider>
        <Sidebar
            collapsible="icon"
            class="justify-center before:absolute before:size-full before:border-y-[6px] before:border-base-100"
            variant="floating">
            <MainSidebarHeader />
            <SidebarContent class="-mt-1">
                <ScrollArea>
                    <SidebarGroup>
                        <SidebarGroupLabel data-tauri-drag-region>
                            Basics
                        </SidebarGroupLabel>
                        <SidebarMenu class="mb-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton @click="sn.navigateTo('/')">
                                    <icon
                                        icon="teenyicons:home-outline"
                                        class="m-0 overflow-auto object-none p-0" />
                                    <span class="text-base">Home</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarSeparator
                                v-if="gs.sidebarState == 'collapsed'"
                                class="grow" />

                            <Collapsible
                                key="pockets"
                                as-child
                                :default-open="true"
                                class="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child>
                                        <SidebarMenuButton
                                            tooltip="Pockets"
                                            class="py-5">
                                            <icon icon="formkit:folder" />
                                            <span class="text-base">
                                                Pockets
                                            </span>
                                            <icon
                                                icon="teenyicons:left-small-outline"
                                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem
                                                v-for="item in navPockets"
                                                :key="item.title">
                                                <SidebarMenuSubButton
                                                    as-child
                                                    @click="
                                                        sn.navigateTo(
                                                            item.url,
                                                            item.title,
                                                            item.icon
                                                        )
                                                    "
                                                    class="group/pocketstuff">
                                                    <div
                                                        class="flex items-center">
                                                        <!--  <icon :icon="item.icon" class='!size-4.5' /> -->

                                                        <span>
                                                            {{ item.title }}
                                                        </span>

                                                        <SidebarMenuBadge>
                                                            {{
                                                                item.array
                                                                    .length
                                                            }}
                                                        </SidebarMenuBadge>
                                                    </div>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                            <SidebarMenuItem class="mt-1">
                                <SidebarMenuButton as-child>
                                    <a
                                        @click="sn.navigateTo('/loved')"
                                        class="py-5">
                                        <icon icon="teenyicons:heart-outline" />
                                        <span class="text-base">Loved</span>

                                        <SidebarMenuBadge>
                                            <SidebarMenuLoves />
                                        </SidebarMenuBadge>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem class="mb-2">
                                <SidebarMenuButton as-child>
                                    <a @click="sn.navigateTo('')" class="py-5">
                                        <icon
                                            icon="teenyicons:calculator-outline" />
                                        <span class="text-base">
                                            Calculator
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <Collapsible
                                v-for="item in navData.navCollapse"
                                :key="item.title"
                                as-child
                                :default-open="item.isActive"
                                class="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child>
                                        <SidebarMenuButton
                                            :tooltip="item.title"
                                            class="py-5">
                                            <icon :icon="item.icon" />
                                            <span class="text-base">
                                                {{ item.title }}
                                            </span>
                                            <icon
                                                icon="teenyicons:left-small-outline"
                                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem
                                                v-for="subItem in item.items"
                                                :key="subItem.title">
                                                <SidebarMenuSubButton as-child>
                                                    <a
                                                        @click="
                                                            sn.navigateTo(
                                                                subItem.url,
                                                                subItem.title,
                                                                subItem.icon
                                                            )
                                                        ">
                                                        <!--     <icon :icon="subItem.icon" /> -->
                                                        <span class="text-base">
                                                            {{ subItem.title }}
                                                        </span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroup>

                    <SidebarPockets
                        v-show="ps.pinned"
                        class="transition-all duration-700 animate-in animate-out fade-in-100 fade-out-100"
                        :data="ps.pinned"
                        title="Pinned"
                        :key="ps.pinned" />
                    <SidebarPockets
                        :data="ps.general"
                        title="Pockets"
                        :key="ps.general" />
                </ScrollArea>
            </SidebarContent>

            <MainSidebarFooter />

            <SidebarRail />
        </Sidebar>
        <SidebarInset class="relative">
            <div
                data-tauri-drag-region
                class="absolute inset-0 left-0 top-0 m-0 h-full w-full overflow-y-clip border border-y-base-300 border-l-transparent border-r-base-300 !bg-base-100/90 !p-0 !shadow-[inset_-12px_-8px_40px_#00000020]">
                <router-view v-slot="{ Component }">
                    <KeepAlive
                        :include="[
                            'Pockets',
                            'Pocket',
                            'PocketChampions',
                            'PocketDashboard',
                            'PocketItems',
                            'PocketRunes',
                            'PocketSelectedChampions',
                        ]">
                        <component
                            :is="Component"
                            ref="currentComponent"
                            @update:modalState="
                                (modal) => gs.toggleModalState(modal)
                            " />
                    </KeepAlive>
                </router-view>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style>
/* :root {
    :v-bind(gs.mainTheme);
} */
</style>
