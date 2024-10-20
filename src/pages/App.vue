<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import '@assets/css/imports.css'
import { useGeneralStore } from '../stores/generalStore'
import { useSessionStore } from './../stores/sessionStore'
import { useDataStore } from '../stores/dataStore'
import { usePocketStore } from '../stores/pocketStore'

let ps
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
    if (sn.openTabs.length == 0) {
        sn.navigateTo('/')
    }
})
</script>
<template>
    <Titlebar />

    <Splitpanes
        ref="splitter"
        id="split"
        :dbl-click-splitter="false"
        class="drawer-content !w-[inherit] default-theme overscroll-none overflow-hidden place-content-end"
        @resize="resize('resize', $event)">
        <!-------------------------------⟢ Pane 1 ⟣-------------------------------->

        <Pane
            :size="gs.firstPane"
            :min-size="2"
            :max-size="21"
            :class="{ minimize: gs.isMinimized == true }"
            class="max-w-[300px] min-w-[50px] w-[250px] relative transition-width overflow-hidden overscroll-none duration-500 z-20 mt-0">
            <Menu />
        </Pane>

        <!-------------------------------⟢ Pane 2 ⟣-------------------------------->

        <Pane
            min-size="79"
            :size="gs.secondPane"
            class="relative bottom-0 left-0 justify-end mt-3 overflow-hidden overscroll-none">
            <Tabs />
        </Pane>
    </Splitpanes>

    <div
        class="pointer-events-none w-screen h-screen fixed top-0 left-0 z-[999] shadow-frame rounded-[12px]"></div>
</template>

<style></style>
