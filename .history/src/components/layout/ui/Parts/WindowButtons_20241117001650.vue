<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()

document
    .getElementById('titlebar-minimize')
    ?.addEventListener('click', () => appWindow.minimize())
document
    .getElementById('titlebar-maximize')
    ?.addEventListener('click', () => appWindow.toggleMaximize())
document
    .getElementById('titlebar-close')
    ?.addEventListener('click', () => appWindow.close())

const target = ref()

const variant = 'ghost'
const size = 'icon'
const classObject = [
    'hover:stroke-[1.5] [&_svg]:object-center [&_svg]:size-5 [&_svg]:shrink-0  size-4.5  opacity-60 hover:opacity-90 ',
]
</script>
<template>
    <div
        ref="target"
        class="group flex h-full items-center gap-3 justify-self-end text-base-content/70">
        <Button
            :variant="variant"
            :size="size"
            id="titlebar-minimize"
            ref="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <icon icon="teenyicons:minus-small-outline" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-maximize"
            ref="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <icon icon="mynaui:maximize-one-solid" class="!size-4" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-close"
            ref="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <icon icon="teenyicons:x-small-outline" />
        </Button>
    </div>
</template>
<style scoped></style>
