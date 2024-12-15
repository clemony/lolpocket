<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
</script>
<template>
    <MenubarItem class="p-0 font-normal">
        <div class="text-2 flex items-center gap-2 px-1 py-1 text-left">
            <Avatar class="size-9 rounded-lg">
                <AvatarImage :src="summoner.icon" :alt="summoner.name" />
                <AvatarFallback class="rounded-lg">LP</AvatarFallback>
            </Avatar>
            <div
                class="text-2 flex items-center gap-2 pt-[2px] text-left align-baseline">
                <h5 class="truncate font-semibold!">
                    {{ summoner.name }}
                </h5>
                <span class="text-3 truncate">
                    {{ summoner.tag }}
                </span>
            </div>
        </div>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem>
        <icon icon="ph:gear-six" class="size-5" />
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
