<script setup lang="ts">
import '@assets/css/imports.css'
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { Toaster } from '@/components/base/sonner'
import { nav } from '@/components/layout/sidebar/nav'
import { commandModal, newPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'
const ps = usePocketStore()
const sn = useSessionStore()

const pinnedPockets = ref(ps.pinned)
watch(
    () => ps.pinned,
    (newVal) => {
        pinnedPockets.value = newVal
    }
)
</script>

<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleModalState(commandModal)"
        class="open-command"></div>

    <Modal />
    <!--  <Titlebar /> -->
    <Toaster />

    <MainMenubar />
</template>

<style>
/* :root {
    :v-bind(gs.mainTheme);
} */
</style>
