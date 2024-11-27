<script setup lang="ts">
import '@assets/css/index.css'
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
</script>

<template>
    <Modal />
    <Shortkeys />
    <Toaster />

    <main
        class="wrapper size-full"
        :key="state"
        :class="{
            '': state == 'open',
        }">
        <div
            v-show="state == 'open'"
            class="command margin-auto animate-in fade-in-0 slide-in-from-bottom-0 z-100 mt-24 translate-y-48 opacity-0 delay-150"
            :class="{ 'translate-y-0 opacity-100': state == 'open' }">
            <Command />
        </div>
        <label>
            <input
                type="checkbox"
                v-model="gs.commandOpen"
                class="hidden"
                :disabled="gs.commandOpen == false ? true : false" />

            <SidebarProvider
                class="page bg-base-100/95 animate-in zoom-in-[0.75] slide-in-from-bottom-1/3 overflow-hidden rounded-xl"
                :class="{
                    'animate-out zoom-out-[0.75] slide-out-to-bottom-1/3 absolute':
                        state == 'open',
                }">
                <MainMenubar
                    :class="{ 'isolate z-0!': state == 'open' }"
                    class="menubar" />

                <Sidebar
                    collapsible="icon"
                    class="border-b-base-300 border-l-base-200 justify-center border border-r-transparent">
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
                        class="border-y-base-300 border-r-base-300 absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border border-l-transparent p-0!">
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
@import '@assets/css/theme.css' theme(reference);
@theme {
    .page,
    .command {
        @apply transition-all duration-300 [animation-fill-mode:forwards];
    }
}
</style>
