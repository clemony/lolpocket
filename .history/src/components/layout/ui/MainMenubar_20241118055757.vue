<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}
</script>

<template>
    <Menubar
        class="absolute z-[999] w-full bg-base-100/[97%] pl-0 pr-4"
        data-tauri-drag-region>
        <MenubarMenu>
            <div class="join flex w-[18rem] items-center gap-2 pl-1 pr-6">
                <div
                    class="ml-2 flex aspect-square size-7 shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                    <span class="mt-1px !text-xs font-bold">LP</span>
                </div>
            </div>
        </MenubarMenu>

        <Grow data-tauri-drag-region />

        <MenubarMenu>
            <SearchButton class="h-9 rounded-lg" placeholder="lolpockets" />
        </MenubarMenu>

        <!-- <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                    New Tab
                    <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
            </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Champions</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Items</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Runes</MenubarTrigger>
        </MenubarMenu> -->
        <Grow data-tauri-drag-region />
        <MenubarMenu></MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger
                class="flex items-center gap-1 text-left align-baseline text-base leading-none">
                <span class="truncate text-md font-semibold">
                    {{ userData.user.name }}
                </span>
                <span class="truncate">
                    {{ userData.user.tag }}
                </span>

                <Avatar
                    class="border-1 ml-2 size-9 rounded-full border border-transparent shadow-sm">
                    <AvatarImage
                        :src="userData.user.avatar"
                        :alt="userData.user.name" />
                    <AvatarFallback class="rounded-full">LP</AvatarFallback>
                </Avatar>
            </MenubarTrigger>
            <MenubarContent>
                <MenuWindowButtons />
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
