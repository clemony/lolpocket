<script setup lang="ts">
import '@assets/css/index.css'

import { Toaster } from '@/components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
import { toggleDrawerState } from '@utils/utils'
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

const router = useRouter()
const history = router.options.history
console.log(history)
console.log(router)
</script>

<template>
    <Drawer />
    <Shortkeys />
    <Toaster />

    <main
        data-tauri-drag-region
        vaul-drawer-wrapper
        class="wrapper size-full overflow-hidden rounded-lg"
        :key="state">
        <History>
            <MainMenubar :class="{ 'z-0!': state == 'open' }" class="menubar" />

            <Sidebar
                collapsible="icon"
                class="border-b-b3 border-l-b2 justify-center border border-r-transparent">
                <SidebarContent class="pt-16">
                    <ScrollArea>
                        <SidebarGroup>
                            <SidebarMenu class="mb-1">
                                <SidebarMenuItem>
                                    <RouterLink
                                        to="/home"
                                        active-class="bg-b2/30">
                                        <SidebarMenuButton>
                                            <icon
                                                icon="teenyicons:home-outline"
                                                class="m-0 overflow-auto object-none p-0" />
                                            <span class="text-3">Home</span>
                                        </SidebarMenuButton>
                                    </RouterLink>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroup>
                        <SidebarGroup>
                            <SidebarPocketDisplays />

                            <SidebarPocketUtilities />
                        </SidebarGroup>

                        <SidebarBrowse />

                        <SidebarElse />
                    </ScrollArea>
                </SidebarContent>

                <SidebarRail />
            </Sidebar>
            <SidebarInset class="relative">
                <div
                    data-tauri-drag-region
                    class="border-y-b3 border-r-b3 absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border border-l-transparent p-0!">
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
                                    (modal) => toggleDrawerState(modal)
                                " />
                        </KeepAlive>
                    </router-view>
                </div>
            </SidebarInset>
        </History>
    </main>
</template>

<style>
.page,
.command {
    transition: all 0.3s ease-in-out forwards;
}
</style>
