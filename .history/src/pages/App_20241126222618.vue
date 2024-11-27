<script setup lang="ts">
import '@assets/css/imports.css'
import { Toaster } from '@/components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
import { toggleModalState } from '@utils/utils'

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
        :class="{ 'backdrop-brightness-50': state == 'open' }">
        <MainMenubar
            v-if="state != 'open'"
            class="menubar animate-in animate-out slide-in-from-top-full slide-out-to-top-full" />
        <div
            v-if="state == 'open'"
            class="command isolate z-[1000] h-1/3 animate-in fade-in-0 slide-in-from-bottom-8 before:absolute before:left-0 before:top-0 before:h-screen before:w-screen before:bg-red-700">
            <Command />
        </div>
        <label>
            <input
                type="checkbox"
                v-model="gs.commandOpen"
                class="hidden"
                :disabled="gs.commandOpen == false ? true : false" />

            <SidebarProvider
                class="page overflow-hidden"
                :class="{
                    'scale-50 overflow-hidden rounded-xl bg-base-100/90':
                        state == 'open',
                }">
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
.command,
.menubar {
    @apply transition-all duration-700;
}
</style>
