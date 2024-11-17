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
const minimize = ref()
const maximize = ref()
const close = ref()
const els = [target, minimize, maximize, close]

const locations = els.map((el) => {
    const { isOutside } = useMouseInElement(el)
    return isOutside // Return the `ref` directly
})
const isButton = ref(location[0])
const isMin = ref(location[1])
const isMax = ref(location[2])
const isClose = ref(location[3])

const variant = 'ghost'
const size = 'icon'
const classObject = [
    'stroke-[1.5] [&_svg]:object-center [&_svg]:size-5 [&_svg]:shrink-0 shadow-inner hover:shadow-base-300 size-4.5 rounded-full [&_svg]:opacity-60',
]

const minimizeIcon = computed(() => {
    const i =
        isButton.value && isMin.value ? 'mynaui:x-circle-solid'
        : isButton.value ? 'mynaui:x-circle'
        : 'mynaui:circle'
    return i
})

const maximizeIcon = computed(() => {
    const i =
        location[0] && location[1] ? 'mynaui:x-circle-solid'
        : location[0] ? 'mynaui:x-circle'
        : 'mynaui:circle'
    return i
})

const closeIcon = computed(() => {
    const i =
        location[0] && location[1] ? 'mynaui:x-circle-solid'
        : location[0] ? 'mynaui:x-circle'
        : 'mynaui:circle'
    return i
})
</script>
<template>
    <div
        ref="target"
        class="group flex h-full items-center gap-3 justify-self-end px-3 text-base-content/70">
        <Button
            :variant="variant"
            :size="size"
            id="titlebar-minimize"
            ref="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <Icon :icon="minimizeIcon" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-maximize"
            ref="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <Icon :icon="maximizeIcon" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-close"
            ref="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <Icon :icon="closeIcon" />
        </Button>
    </div>
</template>
<style scoped></style>
