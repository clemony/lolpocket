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
    <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child class="py-3">
                        <SidebarMenuButton
                            variant="ghost"
                            size="md"
                            class="flex h-full w-full flex-nowrap items-center gap-2 !border-0 pr-2.5 !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200 data-[state=open]:shadow-sm data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40">
                            <Avatar
                                class="border-1 mt-0.5 size-10 rounded-lg border border-transparent shadow-sm">
                                <AvatarImage
                                    :src="userData.user.avatar"
                                    :alt="userData.user.name" />
                                <AvatarFallback class="rounded-lg">
                                    LP
                                </AvatarFallback>
                            </Avatar>

                            <div
                                class="grid flex-1 text-left text-base leading-none">
                                <span class="truncate text-md font-semibold">
                                    {{ userData.user.name }}
                                </span>
                                <span class="truncate">
                                    {{ userData.user.tag }}
                                </span>
                            </div>
                            <icon
                                icon="teenyicons:caret-vertical-small-outline"
                                class="ml-auto !size-5" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg !shadow-standard backdrop-brightness-[97%] *:text-base"
                        side="bottom"
                        align="end"
                        :side-offset="6">
                        <DropdownMenuLabel class="p-0 font-normal">
                            <div
                                class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar class="h-10 w-10 rounded-lg">
                                    <AvatarImage
                                        :src="userData.user.avatar"
                                        :alt="userData.user.name" />
                                    <AvatarFallback class="rounded-lg">
                                        CN
                                    </AvatarFallback>
                                </Avatar>
                                <div
                                    class="grid flex-1 pt-[2px] text-left text-sm">
                                    <h4 class="truncate !font-semibold">
                                        {{ userData.user.name }}
                                    </h4>
                                    <span class="truncate text-base">
                                        {{ userData.user.tag }}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuGroup
                            class="mr-0.5 font-medium [&_>div]:gap-4 [&_svg]:size-5">
                            <DropdownMenuItem>
                                <icon icon="ph:at" />
                                Account
                                <DropdownMenuShortcut class="flex gap-1">
                                    <icon
                                        icon="lucide:arrow-big-up"
                                        class="opacity-80" />
                                    A
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <icon icon="qlementine-icons:settings-16" />
                                Settings
                                <DropdownMenuShortcut class="flex gap-1">
                                    <icon
                                        icon="lucide:arrow-big-up"
                                        class="opacity-80" />
                                    S
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <icon icon="radix-icons:enter" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem class="gap-4 !text-sm font-medium">
                            <icon
                                icon="qlementine-icons:on-off-16"
                                class="size-5 stroke-2" />
                            Quit
                            <DropdownMenuShortcut>⌘ Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
</template>

<style scoped></style>
