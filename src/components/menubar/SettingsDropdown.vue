<script setup lang="ts">
import { summoner } from '@data/playerData'
import { themes } from '@assets/themes'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
</script>
<template>
    <MenubarItem
        class="text-2 flex items-center gap-2 p-0 px-1 py-1 text-left font-normal">
        <Avatar class="size-9 rounded-lg shadow-sm">
            <AvatarImage :src="summoner.icon" :alt="summoner.name" />
            <AvatarFallback class="rounded-lg">LP</AvatarFallback>
        </Avatar>
        <div
            class="text-2 flex items-center gap-2 pt-[2px] text-left align-baseline">
            <h5 class="truncate font-semibold!">
                {{ summoner.name }}
            </h5>
            <span class="text-3 truncate">#{{ summoner.tag }}</span>
        </div>
    </MenubarItem>

    <MenubarSeparator />
    <MenubarItem class="flex items-center">
        <icon icon="teenyicons:paintbucket-outline" class="!size-6 stroke-2" />
        <div class="flex w-full items-center gap-3 px-3">
            <Label
                v-for="theme in themes"
                :data-theme="theme.name"
                class="text-bc border-neutral grid size-8 place-items-center rounded-full border p-1 shadow-sm"
                :style="{ background: theme.color }">
                <icon
                    :icon="theme.icon"
                    class="[&_path]:stroke-bc !size-full stroke-2" />
                <input
                    type="radio"
                    class="peer hidden"
                    name="themeChanger"
                    :value="theme.name"
                    :v-model="as.theme" />
            </Label>
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
