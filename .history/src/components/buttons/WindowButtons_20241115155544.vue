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
    'p-1 hover:stroke-[1.5]  shadow-inner hover:[&_svg]:opacity-1000 [&_svg]:opacity-0 hover:shadow-base-300 size-4.5 rounded-full border border-neutral/20',
]
</script>
<template>
    <div
        class="flex gap-3 justify-self-end px-3 text-base-content/60"
        id="titlebar">
        <Button
            variant="ghost"
            size="icon"
            id="titlebar-minimize"
            data-tip="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <Icon icon="teenyicons:minus-outline" class="" />
        </Button>

        <Button
            variant="ghost"
            size="icon"
            id="titlebar-maximize"
            data-tip="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <Icon icon="teenyicons:expand-alt-outline" />
        </Button>

        <Button
            variant="ghost"
            size="icon"
            id="titlebar-close"
            alt="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <Icon icon="teenyicons:x-outline" class="titlebar-button" />
        </Button>
    </div>
</template>
<style scoped></style>
