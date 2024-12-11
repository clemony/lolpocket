<script setup lang="ts">
import '@/client/assets/css/index.css'
import { Toaster } from '@/client/components/base/sonner'
import { useGeneralStore } from '@/client/stores/generalStore'
import { toggleDrawerState } from '@/client/utils/utils'
import { useDataStore } from '@/client/stores/dataStore'
import Home from '@/client/pages/Home.vue'

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

    <main vaul-drawer-wrapper class="wrapper size-full p-0" :key="state">
        <History>
            <MainMenubar :class="{ 'z-0!': state == 'open' }" class="menubar" />

            <Sidebar collapsible="icon" class="justify-center">
                <SidebarContent class="pt-16">
                    <MainSidebarHeader />
                    <ScrollArea>
                        <SidebarGroup>
                            <SidebarMenu class="mb-1">
                                <SidebarMenuItem>
                                    <RouterLink to="/" active-class="bg-b2/30">
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

                        <SidebarPocketDisplays />

                        <SidebarPocketUtilities />

                        <SidebarBrowse />

                        <SidebarElse />
                    </ScrollArea>
                </SidebarContent>

                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <div
                    class="border-y-b3 border-r-b3 absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border border-l-transparent p-0!">
                    <RouterView v-slot="{ Component }">
                        <component :is="Component" ref="currentComponent" />
                    </RouterView>
                    <!--     @update:modalState="
                                (modal) => toggleDrawerState(modal)
                            " -->
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
