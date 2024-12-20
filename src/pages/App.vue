<script setup lang="ts">
//import { Toaster } from '@components/base/sonner'
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
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
const route = useRoute()
watch(
    () => route.name,
    (newVal) => {
        console.log('💠 - route:', newVal)
    }
)
onMounted(() => {
    console.log('💠 - route:', route.name)
    as.defaultSidebarOpen = true
    as.sidebarOpen = true
})
/*
const open = ref(as.defaultSidebarOpen)

        :defaultOpen="route.name == 'home' ? false : true"
        v-model:open="as.sidebarOpen"
        @update:open="(e) => (open = e)" */

const open = ref()
</script>

<template>
    <Drawer />
    <Shortkeys />
    <!--     <Toaster />
 -->
    <SidebarProvider
        v-model:open="open"
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-1000">
        <MainMenubar />
        <Sidebar
            :collapsible="route.name == 'home' ? 'offcanvas' : 'icon'"
            class="justify-center">
            <SidebarContent class="pt-16">
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
                class="absolute inset-0 top-0 left-0 m-0 h-full w-full overflow-y-clip border-none">
                <RouterView v-slot="{ Component }">
                    <component
                        :is="Component"
                        ref="currentComponent"
                        @update:open="(e) => (open = e)" />
                </RouterView>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style></style>
