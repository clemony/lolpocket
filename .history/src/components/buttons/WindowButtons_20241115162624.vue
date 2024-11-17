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

const variant = 'ghost'
const size = 'icon'
const classObject = [
    'stroke-[1.5] [&_svg]:object-center [&_svg]:size-5 [&_svg]:shrink-0 shadow-inner hover:shadow-base-300 size-4.5 rounded-full  [&_svg]:opacity-0 group-hover:[&_svg]:opacity-100',
]

const minimize = [
    {
        0: 'mynaui:circle',
        1: 'mynaui:x-circle',
        2: 'mynaui:x-circle-solid',
    },
]
const maximize = [
    {
        0: 'mynaui:circle',
        1: 'mynaui:x-circle',
        2: 'mynaui:x-circle-solid',
    },
]
const close = [
    {
        0: 'mynaui:circle',
        1: 'mynaui:x-circle',
        2: 'mynaui:x-circle-solid',
    },
]

const index = ref(0)
</script>
<template>
    <div
        class="group flex h-full items-center gap-3 justify-self-end px-3 text-base-content/70"
        id="titlebar">
        <Button
            :variant="variant"
            :size="size"
            id="titlebar-minimize"
            data-tip="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <Icon :icon="minimize[index]" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-maximize"
            data-tip="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <Icon :icon="maximize[index]" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-close"
            alt="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <icon icon="" />
            <Icon :icon="close[index]" />
        </Button>
    </div>
</template>
<style scoped></style>
