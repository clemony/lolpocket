<script setup lang="ts">
import '@assets/css/imports.css'
import { useGeneralStore } from '@stores/generalStore'
import { useSessionStore } from '@stores/sessionStore'
import { useDataStore } from '@stores/dataStore'

const sn = useSessionStore()
const gs = useGeneralStore()
const ds = useDataStore()
ds.fetchData()

/* ------------------------------- NAVIGATION ------------------------------- */

function resize(resize, event: any) {
    if (event[0].size <= 12) {
        gs.isMinimized = true
        gs.firstPane = 3
        gs.secondPane = 97
    } else {
        gs.isMinimized = false
    }
}

/* ------------------------------ ON MOUNTED ----------------------------- */

onMounted(() => {
    const settings = useGeneralStore()
    const sn = useSessionStore()
    if (!sn.openTabs.length) {
        sn.navigateTo('/')
    }
})
</script>
<template>
<Titlebar />

<Splitpanes ref="splitter" id="split" :dbl-click-splitter="false"
    class="default-theme drawer-content !w-[inherit] place-content-end overflow-hidden overscroll-none"
    @resize="resize('resize', $event)">
    <!-------------------------------⟢ Pane 1 ⟣-------------------------------->

    <Pane :size="gs.firstPane" :min-size="2" :max-size="21" :class="{ minimize: gs.isMinimized == true }"
        class="relative z-20 mt-0 w-[250px] min-w-[50px] max-w-[300px] overflow-hidden overscroll-none transition-width duration-500">
        <Menu />
    </Pane>

    <!-------------------------------⟢ Pane 2 ⟣-------------------------------->

    <Pane min-size="79" :size="gs.secondPane"
        class="relative bottom-0 left-0 mt-0 justify-end overflow-hidden overscroll-none">
        <Tabs />
    </Pane>
</Splitpanes>

<div class="shadow-frame pointer-events-none fixed left-0 top-0 z-[999] h-screen w-screen rounded-[12px]"></div>
</template>

<style></style>
