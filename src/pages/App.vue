<script setup lang="ts">
<<<<<<< HEAD
//import { Toaster } from '@components/base/sonner'
=======
import '@assets/css/index.css'
//import { Toaster } from '@components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
ds.fetchData()
<<<<<<< HEAD
/* const state = computed(() => {
    return (
        as.commandOpen == true ? 'open'
        : as.commandOpen == false ? 'closed'
=======
const gs = useGeneralStore()
/* const state = computed(() => {
    return (
        gs.commandOpen == true ? 'open'
        : gs.commandOpen == false ? 'closed'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
        : null
    )
})
watch(
<<<<<<< HEAD
    () => as.commandOpen,
=======
    () => gs.commandOpen,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
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
<<<<<<< HEAD
    <Drawer />
    <Shortkeys />
    <!--     <Toaster />
 -->
    <SidebarProvider
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-1000">
        <MainMenubar />
        <Sidebar collapsible="icon" class="justify-center">
            <SidebarContent class="pt-14">
                <SidebarAccount />
=======
    <!--  <Drawer />
     <Shortkeys />
    <Toaster /> -->

    <MainMenubar />

    <SidebarProvider
        class="bg-b2/10 relative size-full transition-all duration-1000">
        <Sidebar collapsible="icon" class="justify-center">
            <SidebarContent class="pt-18">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
                <ScrollArea class="!overflow-auto !overscroll-contain">
                    <SidebarPocketDisplays />

                    <SidebarPocketUtilities />

                    <SidebarBrowse />

                    <SidebarElse />
                </ScrollArea>
<<<<<<< HEAD
=======

                <SidebarAccount />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
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
