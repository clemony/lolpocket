<script setup lang="ts">
import { Toaster } from '@components/base/sonner'
import { toggleDrawerState } from '@/functions/utils'
import { useAccountStore } from '@stores/accountStore'
import { getOS } from '@/functions/detectOS'
import {
    getChampionData,
    getItemData,
    getRuneData,
    getShardData,
} from '@data/getData'
import { useDataStore } from '@stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const as = useAccountStore()
const ds = useDataStore()

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

onMounted(async () => {
    // os
    ts.userOS = getOS()

    // from cache | get data ****TODO****: add patch update parameter

    !ds.paths.length ? getRuneData() : ''
    !ds.champions.length ? getChampionData() : ''
    !ds.items.length ? getItemData() : ''

    // getItemData()
    // getRuneData()
    //getShardData()
    // route
    const route = useRoute()
    nextTick(() => {
        routeName.value = route.name
    })
})

const open = ref(as.sidebarOpen)
function onOpenChange() {
    open.value = as.sidebarOpen
    open.value = as.mobileOpen
}

const scroll = ref(null)
const { isScrolling } = useScroll(scroll)
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
        @onOpenChange="onOpenChange"
        :default-open="as.defaultSidebarOpen"
        class="bg-b1 relative size-full backdrop-brightness-[96%] transition-all duration-200">
        <MainMenubar />
        <Sidebar :collapsible="as.sidebarCollapsible" class="justify-center">
            <SidebarContent class="pt-16">
                <SidebarAccount :scrolling="isScrolling" />
                <ScrollArea class="!overflow-auto !overscroll-contain" as-child>
                    <div ref="scroll">
                        <SidebarPocketDisplays />

                        <SidebarPocketUtilities />

                        <SidebarBrowse />

                        <SidebarElse />
                    </div>
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
