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

const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}
</script>
<template>
    <MenubarItem class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1 text-left text-sm">
            <Avatar class="h-10 w-10 rounded-lg">
                <AvatarImage
                    :src="userData.user.avatar"
                    :alt="userData.user.name" />
                <AvatarFallback class="rounded-lg">LP</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 pt-[2px] text-left text-sm">
                <h4 class="truncate !font-semibold">
                    {{ userData.user.name }}
                </h4>
                <span class="truncate text-base">
                    {{ userData.user.tag }}
                </span>
            </div>
        </div>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem>
        <icon icon="qlementine-icons:settings-16" />
        Settings
        <MenubarShortcut>
            <icon icon="lucide:arrow-big-up" class="opacity-80" />
            S
        </MenubarShortcut>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem
        id="titlebar-minimize"
        ref="minimize"
        alt="minimize"
        @click="appWindow.minimize()">
        <icon icon="teenyicons:minus-small-outline" />
        Minimize
        <MenubarShortcut>⌘</MenubarShortcut>
    </MenubarItem>

    <MenubarItem
        id="titlebar-maximize"
        ref="maximize"
        alt="maximize"
        @click="appWindow.toggleMaximize()">
        <span class="relative w-4">
            <icon icon="stash:expand-diagonal" class="size-5" />
        </span>
        Maximize
        <MenubarShortcut>⌘</MenubarShortcut>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem>
        <icon icon="radix-icons:enter" />
        Log out
    </MenubarItem>

    <MenubarSeparator />

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
