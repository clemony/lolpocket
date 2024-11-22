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
    <MenubarItem>
        <icon icon="qlementine-icons:settings-16" />
        Settings
        <MenubarShortcut>
            <icon icon="lucide:arrow-big-up" class="opacity-80" />
            S
        </MenubarShortcut>
    </MenubarItem>
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
    <MenubarItem>
        <icon icon="radix-icons:enter" />
        Log out
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
</template>
<style scoped></style>
