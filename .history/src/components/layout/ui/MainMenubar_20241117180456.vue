<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const route = useRoute()
const pocket = ref(ps.getPocket(route.params.pocketKey))
</script>

<template>
    <Menubar
        class="absolute z-[999] w-full bg-base-100/[97%] pl-0 pr-4"
        data-tauri-drag-region>
        <div class="w-[18rem]">
            <MenubarMenu>
                <MenubarTrigger class="flex gap-4 pl-4 pr-10">
                    <div
                        class="flex aspect-square size-7 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                        <span class="mt-1px !text-xs font-bold">LP</span>
                    </div>
                    <span
                        class="mt-px text-lg font-semibold text-base-content underline-offset-4 opacity-80 group-hover/lol:underline">
                        lolpockets
                    </span>
                </MenubarTrigger>
                <MenubarContent>
                    <MenuWindowButtons />
                </MenubarContent>
            </MenubarMenu>
        </div>
        <MenubarMenu>
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
        </MenubarMenu>
        <Grow data-tauri-drag-region />
        <MenubarMenu>
            <!--             <MenubarTrigger class="mx-5">
                {{ pocket.name }}

                <div class="grid size-7 place-items-center rounded-full px-3">
                    <icon :icon="pocket.icon" />
                </div>
            </MenubarTrigger> -->
        </MenubarMenu>

        <MenubarMenu>
            <Button
                size="xs"
                class="hover-ring-neutral/60 relative h-9 !min-h-6 w-full min-w-40 max-w-52 items-center justify-start border border-base-300/80 bg-base-100/50 !py-1 px-2 hover:border-base-300 hover:bg-base-100/60 hover:ring-1">
                <icon
                    icon="teenyicons:search-outline"
                    class="!size-[12px] text-base-content/80" />

                <span
                    class="align-end grow px-1 pt-2px text-left text-base-content/80">
                    Search
                </span>
                <DropdownMenuShortcut class="mr-1">⌘ K</DropdownMenuShortcut>
            </Button>
        </MenubarMenu>

        <Grow class="min-w-6 max-w-20" />
        <MenubarMenu>
            <UserButton />
        </MenubarMenu>
        <MenubarMenu>
            <WindowButtons
                class="first:hidden odd:hidden [&_:nth-child(2)]:hidden" />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
