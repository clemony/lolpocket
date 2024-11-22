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
</script>
<template>
    <div
        ref="target"
        class="group -mt-2px flex h-full items-center gap-1.5 justify-self-end text-base-content/70">
        <MenubarItem
            id="titlebar-minimize"
            ref="minimize"
            alt="minimize"
            @click="appWindow.minimize()">
            <icon icon="teenyicons:minus-small-outline" />
            Minimize Window
            <MenubarShortcut>⌘</MenubarShortcut>
        </MenubarItem>

        <MenubarItem
            id="titlebar-maximize"
            ref="maximize"
            alt="maximize"
            @click="appWindow.toggleMaximize()">
            <icon icon="mynaui:maximize-one" class="!size-[13px]" />
            Maximize Window
            <MenubarShortcut>⌘</MenubarShortcut>
        </MenubarItem>

        <MenubarItem
            id="titlebar-close"
            ref="close"
            data-tip="close"
            @click="appWindow.close()">
            <icon icon="teenyicons:x-small-outline" />
            Quit App
            <MenubarShortcut>⌘ Q</MenubarShortcut>
        </MenubarItem>
    </div>
</template>
<style scoped></style>
