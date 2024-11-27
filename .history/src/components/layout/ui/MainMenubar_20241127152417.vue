<script setup lang="ts">
const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}

const router = useRouter()
const historyState = history.state
</script>

<template>
    <Menubar
        class="bg-b1/[97%] absolute z-199 grid w-full grid-cols-3 items-center rounded-t-xl p-0 shadow-[inset_0px_0px_3px_2px_#00000006,inset_3px_3px_3px_2px_#00000007,rgba(0,_0,_0,_0.15)_0px_7px_10px_-12px] [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center"
        data-tauri-drag-region>
        <div data-tauri-drag-region>
            <MenubarMenu>
                <div class="flex items-center gap-2 pr-6 pl-1">
                    <div
                        class="bg-neutral text-neutral-content/90 ml-2 flex aspect-square size-7 shrink-0 items-center justify-center rounded-md shadow-xs">
                        <span
                            class="mt-1px cursor-default text-xs! font-bold select-none">
                            LP
                        </span>
                    </div>

                    <Tooltip content="to top">
                        <Button
                            variant="ghost"
                            size="icon"
                            class="size-8 opacity-60">
                            <icon
                                icon="teenyicons:up-small-outline"
                                class="size-full p-1" />
                        </Button>
                    </Tooltip>
                </div>
            </MenubarMenu>

            <Grow data-tauri-drag-region />
        </div>

        <div class="gap-2">
            <MenubarMenu>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-9 stroke-[1.5] disabled:stroke-1 disabled:opacity-30"
                    @click="router.back()"
                    :disabled="historyState.back == null">
                    <icon icon="teenyicons:left-outline" class="p-px" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-9 stroke-[1.5] disabled:stroke-1 disabled:opacity-30"
                    @click="router.forward()"
                    :disabled="historyState.forward == null">
                    <icon
                        icon="teenyicons:right-outline"
                        class="stroke-[1.5] p-px" />
                </Button>
            </MenubarMenu>

            <MenubarMenu>
                <SearchButton
                    class="ml-4 h-9 rounded-lg backdrop-brightness-[97%]"
                    placeholder="lolpockets" />
            </MenubarMenu>
        </div>

        <div data-tauri-drag-region>
            <Grow data-tauri-drag-region />

            <MenubarMenu>
                <MenubarTrigger
                    class="flex max-w-64 min-w-fit grow items-center justify-end gap-2 px-3">
                    <div
                        class="text-4 flex w-full items-center justify-center gap-1 text-center align-baseline leading-none opacity-80">
                        <span class="text-5 truncate font-semibold">
                            {{ userData.user.name }}
                        </span>
                        <span class="truncate">
                            {{ userData.user.tag }}
                        </span>
                    </div>
                    <!--       <icon
                        icon="ph:gear-six"
                        class="oapcity-80 ml-3 size-6 shrink-0" /> -->
                    <Avatar
                        class="ml-2 size-7 rounded-full border border-1 border-transparent shadow-xs">
                        <AvatarImage
                            :src="userData.user.avatar"
                            :alt="userData.user.name" />
                        <AvatarFallback class="rounded-full">LP</AvatarFallback>
                    </Avatar>
                </MenubarTrigger>
                <MenubarContent class="w-(--radix-menubar-trigger-width)">
                    <SettingsDropdown />
                </MenubarContent>
            </MenubarMenu>
        </div>
    </Menubar>
</template>

<style scoped></style>
