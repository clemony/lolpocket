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
                    <DropdownMenuTrigger>
                        <SidebarMenuButton
                            variant="ghost"
                            size="default"
                            class="focus:ring-b2! data-[state=open]:ring-b3/40! flex h-16 flex-nowrap items-center gap-2 border-0! pr-2.5 ring-0! focus:border-0! focus:ring-1! focus:outline-0! data-[state=open]:ring-1! data-[state=open]:shadow-xs">
                            <Avatar
                                class="mt-0.5 size-10 rounded-lg border border-1 border-transparent shadow-xs">
                                <AvatarImage
                                    :src="userData.user.avatar"
                                    :alt="userData.user.name" />
                                <AvatarFallback class="rounded-lg">
                                    LP
                                </AvatarFallback>
                            </Avatar>

                            <div
                                class="text-3 grid flex-1 text-left leading-none">
                                <span class="text-md truncate font-semibold">
                                    {{ userData.user.name }}
                                </span>
                                <span class="truncate">
                                    {{ userData.user.tag }}
                                </span>
                            </div>
                            <icon
                                icon="teenyicons:caret-vertical-small-outline"
                                class="ml-auto size-5!" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        class="shadow-standard! *:text-3 w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg backdrop-brightness-[97%]"
                        side="bottom"
                        align="end"
                        :side-offset="6">
                        <DropdownMenuLabel class="p-0 font-normal">
                            <div
                                class="text-2 flex items-center gap-2 px-1 py-1.5 text-left">
                                <Avatar class="h-10 w-10 rounded-lg">
                                    <AvatarImage
                                        :src="userData.user.avatar"
                                        :alt="userData.user.name" />
                                    <AvatarFallback class="rounded-lg">
                                        CN
                                    </AvatarFallback>
                                </Avatar>
                                <div
                                    class="text-2 grid flex-1 pt-[2px] text-left">
                                    <h5 class="truncate font-semibold!">
                                        {{ userData.user.name }}
                                    </h5>
                                    <span class="text-3 truncate">
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
                        <DropdownMenuItem class="text-2! gap-4 font-medium">
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
