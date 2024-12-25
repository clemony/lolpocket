<script setup lang="ts">
import { Toaster } from '@components/base/sonner'
import { toggleDrawerState } from '@utils/utils'
import { useDataStore } from '@stores/dataStore'
import { useAccountStore } from '@stores/accountStore'
import { getOS } from '@utils/detectOS'
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
const routeName = ref(null)
const route = useRoute()

onMounted(() => {
    getOS()
})
/*
const open = ref(as.defaultSidebarOpen)

        :defaultOpen="route.name == 'home' ? false : true"
        v-model:open="as.sidebarOpen"
        @update:open="(e) => (open = e)" */

onMounted(async () => {
    const route = useRoute()
    nextTick(() => {
        routeName.value = route.name
    })
})
const open = ref(as.sidebarOpen)
</script>

<template>
    <Drawer />
    <Shortkeys />

    <Toaster
        closeButton
        position="top-right"
        :hotkey="['KeyC']"
        :toastOptions="{}"
        :expand="true" />

    <SidebarProvider
        v-model:open="as.sidebarOpen"
        @onOpenChange="open = as.sidebarOpen"
        :default-open="as.defaultSidebarOpen"
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-200">
        <MainMenubar />
        <Sidebar :collapsible="as.sidebarCollapsible" class="justify-center">
            <SidebarContent class="pt-14">
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
                    <component :is="Component" ref="currentComponent" />
                </RouterView>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style></style>
