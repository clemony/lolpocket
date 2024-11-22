<script setup lang="ts">
const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}

const router = useRouter()
console.log(router)
const historyState = history.state
console.log('state', historyState)
</script>

<template>
    <Menubar
        class="absolute z-[999] grid w-full grid-cols-3 items-center rounded-t-xl bg-base-100/[97%] p-0 [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center"
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
                    class="h-8 w-9 stroke-[1.5] disabled:stroke-1 disabled:opacity-70"
                    @click="router.back()"
                    :disabled="historyState.back == null">
                    <icon icon="teenyicons:left-outline" class="p-px" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-9 stroke-[1.5] disabled:stroke-1 disabled:opacity-40"
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
                    class="flex w-52 items-center justify-end gap-1 px-3 align-baseline text-base leading-none">
                    <span class="truncate text-left text-md font-semibold">
                        {{ userData.user.name }}
                    </span>
                    <span class="truncate">
                        {{ userData.user.tag }}
                    </span>
                    <Grow />

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
        </div>
    </Menubar>
</template>

<style scoped></style>
