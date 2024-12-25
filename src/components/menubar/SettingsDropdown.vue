<script setup lang="ts">
import { summoner } from '@data/playerData'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
</script>
<template>
    <MenubarItem
        class="text-2 flex w-full items-center justify-end gap-2 px-1 py-1 font-normal">
        <Avatar class="size-8 shrink-0 rounded-lg shadow-sm">
            <AvatarImage :src="summoner.icon" :alt="summoner.name" />
            <AvatarFallback class="rounded-lg">LP</AvatarFallback>
        </Avatar>
        <!-- <icon icon="teenyicons:at-outline" class="-ml-px !size-6" /> -->
        <div
            class="text-2 flex w-full items-center gap-2 px-2 pt-[2px] text-start align-baseline">
            <h5 class="truncate !font-semibold">
                {{ summoner.name }}
            </h5>
            <span class="text-3">#{{ summoner.tag }}</span>
        </div>
    </MenubarItem>

    <MenubarSeparator />
    <Themes />

    <MenubarSeparator />

    <MenubarItem class="mr-px">
        <icon icon="ph:gear-six" class="-ml-px !size-5" />
        Settings
        <MenubarShortcut>
            <icon icon="lucide:arrow-big-up" />
            S
        </MenubarShortcut>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem>
        <icon icon="radix-icons:enter" class="mr-px" />
        Log out
        <MenubarShortcut>⌘Q</MenubarShortcut>
    </MenubarItem>
</template>
<style scoped></style>
