<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//import { Toaster } from '@components/base/sonner'
=======
import '@assets/css/index.css'
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
//import { Toaster } from '@components/base/sonner'
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
//import { Toaster } from '@components/base/sonner'
=======
import '@assets/css/index.css'
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
//import { Toaster } from '@components/base/sonner'
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
ds.fetchData()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
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
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
/* const state = computed(() => {
    return (
        as.commandOpen == true ? 'open'
        : as.commandOpen == false ? 'closed'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
        : null
    )
})
watch(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    () => as.commandOpen,
=======
    () => gs.commandOpen,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    () => as.commandOpen,
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
    () => as.commandOpen,
=======
    () => gs.commandOpen,
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
    <Drawer />
    <Shortkeys />
    <!--     <Toaster />
 -->
<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
    <SidebarProvider
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-1000">
        <MainMenubar />
        <Sidebar collapsible="icon" class="justify-center">
<<<<<<< HEAD
            <SidebarContent class="pt-18">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            <SidebarContent class="pt-14">
                <SidebarAccount />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
    <MainMenubar />

=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
    <SidebarProvider
        class="bg-b1 relative size-full backdrop-brightness-[97%] transition-all duration-1000">
        <MainMenubar />
        <Sidebar collapsible="icon" class="justify-center">
<<<<<<< HEAD
            <SidebarContent class="pt-18">
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
            <SidebarContent class="pt-14">
                <SidebarAccount />
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                <ScrollArea class="!overflow-auto !overscroll-contain">
                    <SidebarPocketDisplays />

                    <SidebarPocketUtilities />

                    <SidebarBrowse />

                    <SidebarElse />
                </ScrollArea>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

                <SidebarAccount />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
=======

                <SidebarAccount />
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
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
