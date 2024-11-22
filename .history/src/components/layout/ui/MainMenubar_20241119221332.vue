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
        class="absolute z-[999] grid w-full grid-cols-3 items-center rounded-t-xl bg-base-100/[97%] p-0 shadow-[inset_0px_0px_3px_2px_#00000004,inset_3px_3px_3px_2px_#00000005,0_35px_60px_-15px_#00000030,_0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center"
        data-tauri-drag-region>
        <div data-tauri-drag-region>
            <MenubarMenu>
                <div class="join flex items-center gap-2 pl-1 pr-6">
                    <div
                        class="ml-2 flex aspect-square size-7 shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                        <span
                            class="mt-1px cursor-default select-none !text-xs font-bold">
                            LP
                        </span>
                    </div>
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
                    class="flex items-center justify-end gap-2 px-3">
                    <div
                        class="flex w-full items-center justify-center gap-1 text-center align-baseline text-base leading-none">
                        <span class="truncate text-md font-semibold">
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
                        class="border-1 ml-2 size-7 rounded-full border border-transparent shadow-sm">
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
        </div>
    </Menubar>
</template>

<style scoped></style>
