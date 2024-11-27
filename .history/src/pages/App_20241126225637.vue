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
        :class="{
            '': state == 'open',
        }">
        <div
            v-show="state == 'open'"
            class="command z-[100] delay-300 animate-in fade-in-0 slide-in-from-bottom-8">
            <Command />
        </div>
        <label>
            <input
                type="checkbox"
                v-model="gs.commandOpen"
                class="hidden"
                :disabled="gs.commandOpen == false ? true : false" />

            <SidebarProvider
                class="page overflow-hidden rounded-xl bg-base-100/95"
                :class="{
                    'absolute animate-out zoom-out-[0.75] slide-out-to-bottom-1/3':
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
    @apply transition-all duration-700;
}
</style>
