<script setup lang="ts">
import '@assets/css/imports.css'
import { Toaster } from '@/components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
import { toggleModalState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
ds.fetchData()
const gs = useGeneralStore()
const state = computed(() => {
    return (
        gs.commandOpen == true ? 'open'
        : gs.commandOpen == false ? 'closed'
        : null
    )
})
watch(
    () => gs.commandOpen,
    (newVal) => {
        console.log(newVal)
        console.log('st', state)
    }
)
//fade-out slide-out-to-bottom-2/3
</script>

<template>
    <Modal />
    <Shortkeys />
    <Toaster />

    <main
        data-tauri-drag-region
        class="wrapper size-full"
        :key="state"
        :class="{
            '': state == 'open',
        }">
        <div
            data-tauri-drag-region
            v-if="state == 'open'"
            class="command margin-auto z-[100] mt-24 delay-100 animate-in animate-out fade-in-0 slide-in-from-bottom-2/3">
            <Command />
        </div>
        <label>
            <input
                type="checkbox"
                v-model="gs.commandOpen"
                class="hidden"
                :disabled="gs.commandOpen == false ? true : false" />

            <SidebarProvider
                class="page overflow-hidden rounded-xl bg-base-100/95 animate-in zoom-in-[0.75] slide-in-from-bottom-1/3"
                :class="{
                    'absolute shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-out zoom-out-[0.75] slide-out-to-bottom-1/3 after:absolute after:z-50 after:size-full after:bg-red-500':
                        state == 'open',
                }">
                <MainMenubar
                    :class="{ 'isolate !z-0': state == 'open' }"
                    class="menubar" />

                <Sidebar
                    collapsible="icon"
                    class="justify-center border border-b-base-300 border-l-base-200 border-r-transparent">
                    <SidebarContent class="pt-16">
                        <ScrollArea>
                            <SidebarGroup>
                                <SidebarMenu class="mb-1">
                                    <SidebarMenuItem>
                                        <RouterLink
                                            to="/home"
                                            active-class="bg-base-200/30">
                                            <SidebarMenuButton>
                                                <icon
                                                    icon="teenyicons:home-outline"
                                                    class="m-0 overflow-auto object-none p-0" />
                                                <span class="text-base">
                                                    Home
                                                </span>
                                            </SidebarMenuButton>
                                        </RouterLink>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroup>

                            <SidebarPocketDisplays />

                            <SidebarPocketUtilities />

                            <SidebarBrowse />

                            <SidebarElse />
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
        </label>
    </main>
</template>

<style>
.page,
.command {
    @apply transition-all duration-300 [animation-fill-mode:forwards];
}
</style>
