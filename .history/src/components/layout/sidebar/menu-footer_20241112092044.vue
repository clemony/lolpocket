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
                <DropdownMenuTrigger as-child class='py-3'>
                    <SidebarMenuButton variant="ghost" size="md"
                        class="!border-0 flex gap-2 pr-2.5 items-center  h-full data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40 data-[state=open]:shadow-sm !ring-0 focus:!ring-1 focus:!outline-0 focus:!ring-base-200 focus:!border-0 flex-nowrap">
                        <Avatar class="size-10 rounded-lg shadow-sm border border-1 border-transparent mt-0.5">
                            <AvatarImage :src="userData.user.avatar" :alt="userData.user.name" />
                            <AvatarFallback class="rounded-lg">
                                LP
                            </AvatarFallback>
                        </Avatar>

                        <div class="grid flex-1 text-left  text-base leading-none">
                            <span class="truncate text-md font-semibold">{{ userData.user.name }}</span>
                            <span class="truncate">{{ userData.user.tag }}</span>
                        </div>
                        <icon icon="teenyicons:caret-vertical-small-outline" class="ml-auto !size-5" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg backdrop-brightness-[97%] !shadow-standard *:text-base"
                    side="bottom" align="end" :side-offset="6">
                    <DropdownMenuLabel class="p-0 font-normal">
                        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar class="h-10 w-10 rounded-lg">
                                <AvatarImage :src="userData.user.avatar" :alt="userData.user.name" />
                                <AvatarFallback class="rounded-lg">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <div class="grid flex-1 pt-[2px] text-left text-sm ">
                                <h4 class="truncate !font-semibold">{{ userData.user.name }}</h4>
                                <span class="truncate text-base">{{ userData.user.tag }}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>


                    <DropdownMenuSeparator />
                    <DropdownMenuGroup class='font-medium  [&_svg]:size-5  [&_>div]:gap-4 mr-0.5'>
                        <DropdownMenuItem>
                            <icon icon="ph:at" />
                            Account
                            <DropdownMenuShortcut class='flex gap-1'>
                                <icon icon="lucide:arrow-big-up" class='opacity-80' />A
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>

                            <icon icon="radix-icons:gear" />
                            Settings
                            <DropdownMenuShortcut class='flex gap-1'>
                                <icon icon="lucide:arrow-big-up" class='opacity-80' />S
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <icon icon="radix-icons:enter" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem class='gap-4 font-medium !text-sm'>
                        <icon icon="qlementine-icons:on-off-16" class='size-5 stroke-2' />
                        Quit
                        <DropdownMenuShortcut>
                            ⌘ Q
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</SidebarFooter>
</template>

<style scoped></style>