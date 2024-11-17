<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()

document.getElementById('titlebar')?.addEventListener('mousedown', (e) => {
    if (e.buttons === 1) {
        // Primary (left) button
        e.detail === 2 ?
            appWindow.toggleMaximize() // Maximize on double click
        :   appWindow.startDragging() // Else start dragging
    }
})

document
    .getElementById('titlebar-minimize')
    ?.addEventListener('click', () => appWindow.minimize())
document
    .getElementById('titlebar-maximize')
    ?.addEventListener('click', () => appWindow.toggleMaximize())
document
    .getElementById('titlebar-close')
    ?.addEventListener('click', () => appWindow.close())

const classObject = [
    'p-1 hover:bg-base-300 hover:stroke-[1.5] hover:text-base-content hover:shadow-inner hover:shadow-base-300 ize-6',
]
</script>
<template>
    <div data-tauri-drag-region class="titlebar flex items-center">
        <div
            class="titlebar *:s z-[1000] col-start-3 mr-3 grid grid-cols-3 gap-2 justify-self-end text-base-content/60 *:place-items-center *:rounded-md"
            id="titlebar">
            <Button
                variant="ghost"
                size="icon"
                id="titlebar-minimize"
                data-tip="minimize"
                alt="minimize"
                :class="{ classObject }"
                @click="appWindow.minimize()">
                <Icon icon="teenyicons:minus-outline" class="" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                id="titlebar-maximize"
                data-tip="maximize"
                alt="maximize"
                class="p-1 hover:bg-base-300 hover:stroke-[1.5] hover:text-base-content hover:shadow-inner hover:shadow-base-300"
                @click="appWindow.toggleMaximize()">
                <Icon icon="teenyicons:expand-alt-outline" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                id="titlebar-close"
                alt="close"
                data-tip="close"
                class="p-1 hover:bg-base-300 hover:stroke-[1.5] hover:text-base-content hover:shadow-inner hover:shadow-base-300"
                @click="appWindow.close()">
                <Icon icon="teenyicons:x-outline" class="titlebar-button" />
            </Button>
        </div>
    </div>
</template>
<style scoped></style>
