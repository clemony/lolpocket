<script setup lang="ts">
const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}
</script>

<template>
    <MenubarMenu>
        <MenubarTrigger>
            <span class="truncate text-md font-semibold">
                {{ userData.user.name }}
            </span>
            <span class="truncate">
                {{ userData.user.tag }}
            </span>

            <Avatar
                class="border-1 size-9 rounded-full border border-transparent shadow-sm">
                <AvatarImage
                    :src="userData.user.avatar"
                    :alt="userData.user.name" />
                <AvatarFallback class="rounded-full">LP</AvatarFallback>
            </Avatar>
        </MenubarTrigger>
        <MenubarContent>
            <MenubarItem class="p-0 font-normal">
                <div
                    class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar class="h-10 w-10 rounded-lg">
                        <AvatarImage
                            :src="userData.user.avatar"
                            :alt="userData.user.name" />
                        <AvatarFallback class="rounded-lg">CN</AvatarFallback>
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
                <icon icon="ph:at" />
                Account
                <MenubarShortcut class="flex gap-1">
                    <icon icon="lucide:arrow-big-up" class="opacity-80" />
                    A
                </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
                <icon icon="qlementine-icons:settings-16" />
                Settings
                <MenubarShortcut class="flex gap-1">
                    <icon icon="lucide:arrow-big-up" class="opacity-80" />
                    S
                </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
                <icon icon="radix-icons:enter" />
                Log out
            </MenubarItem>

            <MenubarSeparator />
            <MenubarItem class="gap-4 !text-sm font-medium">
                <icon
                    icon="qlementine-icons:on-off-16"
                    class="size-5 stroke-2" />
                Quit
                <MenubarShortcut>⌘ Q</MenubarShortcut>
            </MenubarItem>
        </MenubarContent>
    </MenubarMenu>
</template>

<style scoped></style>
