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
console.log(isOutside.value)

const variant = 'ghost'
const size = 'icon'
const classObject = [
    'stroke-[1.5] [&_svg]:object-center [&_svg]:size-5 [&_svg]:shrink-0 shadow-inner hover:shadow-base-300 size-4.5 rounded-full [&_svg]:opacity-60',
]

const minimize = ['mynaui:circle', 'mynaui:x-circle', 'mynaui:x-circle-solid']
const maximize = ['mynaui:circle', 'mynaui:x-circle', 'mynaui:x-circle-solid']
const close = ['mynaui:circle', 'mynaui:x-circle', 'mynaui:x-circle-solid']

const value = computed(() => {
    const v = isOutside.value ? 0 : 1
    return v
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
            data-tip="minimize"
            alt="minimize"
            :class="classObject"
            @click="appWindow.minimize()">
            <Icon :icon="minimize[value]" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-maximize"
            data-tip="maximize"
            alt="maximize"
            :class="classObject"
            @click="appWindow.toggleMaximize()">
            <Icon :icon="maximize[value]" />
        </Button>

        <Button
            :variant="variant"
            :size="size"
            id="titlebar-close"
            alt="close"
            data-tip="close"
            :class="classObject"
            @click="appWindow.close()">
            <Icon :icon="close[value]" />
        </Button>
    </div>
</template>
<style scoped></style>
