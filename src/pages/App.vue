<script setup lang="ts">
import '@assets/css/index.css'
//import { Toaster } from '@components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
ds.fetchData()
const gs = useGeneralStore()
/* const state = computed(() => {
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
 */
const router = useRouter()
const history = router.options.history
console.log(history)
console.log(router)
</script>

<template>
    <!--  <Drawer />
     <Shortkeys />
    <Toaster /> -->

    <MainMenubar />

    <SidebarProvider
        class="bg-b2/10 relative size-full transition-all duration-1000">
        <Sidebar collapsible="icon" class="justify-center">
            <SidebarContent class="pt-18">
                <ScrollArea class="!overflow-auto !overscroll-contain">
                    <SidebarPocketDisplays />

                    <SidebarPocketUtilities />

                    <SidebarBrowse />

                    <SidebarElse />
                </ScrollArea>

                <SidebarAccount />
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
        <SidebarInset>
            <div
                class="absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border border-y-0 border-r-0 border-l-transparent p-0">
                <RouterView v-slot="{ Component }">
                    <component :is="Component" ref="currentComponent" />
                </RouterView>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style></style>
