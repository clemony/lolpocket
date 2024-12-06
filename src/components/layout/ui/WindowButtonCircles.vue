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
const { isOutside } = useMouseInElement(target)

const variant = 'ghost'
const size = 'icon'
const classObject = [
    'stroke-[1.5] [&_svg]:object-center shadow-sm [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:shadow-inner hover:shadow-b3 size-4.5 rounded-full [&_svg]:absolute group/button',
]
</script>
<template>
    <div
        ref="target"
        class="group flex h-full items-center gap-3 justify-self-end px-3 text-ac/70">
        <Button
            :variant="variant"
            :size="size"
            id="titlebar-minimize"
            ref="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <icon
                icon="mynaui:circle"
                class="opacity-60 group-hover:opacity-0" />
            <icon
                icon="mynaui:plus-circle"
                class="opacity-0 group-hover/button:opacity-0 group-hover:opacity-80" />
            <Icon
                icon="mynaui:plus-circle-solid"
                class="opacity-0 group-hover/button:opacity-90" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-maximize"
            ref="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <icon
                icon="mynaui:circle"
                class="opacity-60 group-hover:opacity-0" />
            <icon
                icon="mynaui:plus-circle"
                class="opacity-0 group-hover/button:opacity-0 group-hover:opacity-80" />
            <Icon
                icon="mynaui:plus-circle-solid"
                class="opacity-0 group-hover/button:opacity-90" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-close"
            ref="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <icon
                icon="mynaui:circle"
                class="opacity-60 group-hover:opacity-0" />
            <icon
                icon="mynaui:x-circle"
                class="opacity-0 group-hover/button:opacity-0 group-hover:opacity-80" />
            <Icon
                icon="mynaui:x-circle-solid"
                class="opacity-0 group-hover/button:opacity-90" />
        </Button>
    </div>
</template>
<style scoped></style>
