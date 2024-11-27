<script setup lang="ts">
import '@assets/css/imports.css'
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { Toaster } from '@/components/base/sonner'
import { nav } from '@/components/layout/sidebar/nav'
import { commandModal, newPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'
const ps = usePocketStore()
const sn = useSessionStore()

const pinnedPockets = ref(ps.pinned)
watch(
    () => ps.pinned,
    (newVal) => {
        pinnedPockets.value = newVal
    }
)
</script>

<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleModalState(commandModal)"
        class="open-command"></div>

    <Modal />
    <!--  <Titlebar /> -->
    <Toaster />

    <MainMenubar />

    <SidebarProvider class="">
        <Sidebar
            collapsible="icon"
            class="justify-center border border-b-base-300 border-l-base-200 border-r-transparent">
            <SidebarContent class="pt-12">
                <ScrollArea>
                    <SidebarGroup>
                        <SidebarGroupLabel data-tauri-drag-region>
                            Navigation
                        </SidebarGroupLabel>
                        <SidebarMenu class="mb-1">
                            <SidebarMenuItem>
                                <RouterLink to="/">
                                    <SidebarMenuButton>
                                        <icon
                                            icon="teenyicons:home-outline"
                                            class="m-0 overflow-auto object-none p-0" />
                                        <span class="text-base">Home</span>
                                    </SidebarMenuButton>
                                </RouterLink>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>

                    <SidebarPocketDisplays />

                    <SidebarPocketUtilities />

                    <SidebarGroup>
                        <SidebarGroupLabel data-tauri-drag-region>
                            Browse
                        </SidebarGroupLabel>
                        <SidebarMenu class="mb-1">
                            <SidebarMenuItem class="mt-1">
                                <RouterLink to="/loved">
                                    <SidebarMenuButton class="py-5">
                                        <icon icon="teenyicons:heart-outline" />
                                        <span class="text-base">Loved</span>

                                        <SidebarMenuBadge>
                                            <SidebarMenuLoves />
                                        </SidebarMenuBadge>
                                    </SidebarMenuButton>
                                </RouterLink>
                            </SidebarMenuItem>

                            <Collapsible
                                v-for="item in nav"
                                :key="item.name"
                                as-child
                                :default-open="item.isActive"
                                class="group">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child>
                                        <SidebarMenuButton
                                            :tooltip="item.name"
                                            class="py-5">
                                            <icon :icon="item.icon" />
                                            <span class="text-base">
                                                {{ item.name }}
                                            </span>
                                            <icon
                                                icon="teenyicons:left-small-outline"
                                                class="ml-auto transition-transform duration-200 group-radix-state-open:-rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem
                                                v-for="subItem in item.items"
                                                :key="subItem.name">
                                                <RouterLink
                                                    :to="{
                                                        name: subItem.url,
                                                        hash: subItem.hash,
                                                    }">
                                                    <SidebarMenuSubButton>
                                                        <!--     <icon :icon="subItem.icon" /> -->
                                                        <span class="text-base">
                                                            {{ subItem.name }}
                                                        </span>
                                                    </SidebarMenuSubButton>
                                                </RouterLink>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroup>
                </ScrollArea>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
        <SidebarInset class="relative">
            <div
                data-tauri-drag-region
                class="absolute inset-0 left-0 top-0 m-0 h-full w-full overflow-y-clip border border-y-base-300 border-l-transparent border-r-base-300 !p-0">
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
                                (modal) => toggleModalState(modal)
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
