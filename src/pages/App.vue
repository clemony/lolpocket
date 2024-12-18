<script setup lang="ts">
//import { Toaster } from '@components/base/sonner'
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
ds.fetchData()
/* const state = computed(() => {
    return (
        as.commandOpen == true ? 'open'
        : as.commandOpen == false ? 'closed'
        : null
    )
})
watch(
    () => as.commandOpen,
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
    <Drawer />
    <Shortkeys />
    <!--     <Toaster />
 -->
    <SidebarProvider
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-1000">
        <MainMenubar />
        <Sidebar collapsible="icon" class="justify-center">
            <SidebarContent class="pt-15">
                <SidebarAccount />
                <ScrollArea class="!overflow-auto !overscroll-contain">
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
                class="absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border border-y-0 border-r-0 border-l-transparent p-0">
                <RouterView v-slot="{ Component }">
                    <component :is="Component" ref="currentComponent" />
                </RouterView>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style></style>
