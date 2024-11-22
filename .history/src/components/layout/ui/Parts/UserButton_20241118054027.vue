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
                <MenubarShortcut>
                    <icon icon="lucide:arrow-big-up" class="opacity-80" />
                    S
                </MenubarShortcut>
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
