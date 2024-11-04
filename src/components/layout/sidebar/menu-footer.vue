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
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton size="lg"
                        class="data-[state=open]:ring-1 data-[state=open]:shadow-sm data-[state=open]:backdrop-brightness-105 rounded-md hover:data-[state=open]:backdrop-brightness-105">
                        <Avatar class="h-8 w-8 rounded-lg">
                            <AvatarImage :src="userData.user.avatar" :alt="userData.user.name" />
                            <AvatarFallback class="rounded-lg">
                                CN
                            </AvatarFallback>
                        </Avatar>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">{{ userData.user.name }}</span>
                            <span class="truncate text-xs">{{ userData.user.tag }}</span>
                        </div>
                        <icon icon="teenyicons:caret-vertical-small-outline" class="ml-auto size-4" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg backdrop-brightness-[98%] !shadow-standard"
                    side="bottom" align="end" :side-offset="4">
                    <DropdownMenuLabel class="p-0 font-normal">
                        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar class="h-8 w-8 rounded-lg">
                                <AvatarImage :src="userData.user.avatar" :alt="userData.user.name" />
                                <AvatarFallback class="rounded-lg">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold">{{ userData.user.name }}</span>
                                <span class="truncate text-xs">{{ userData.user.tag }}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>


                    <DropdownMenuSeparator />
                    <DropdownMenuGroup class='font-medium'>
                        <DropdownMenuItem>
                            <icon icon="teenyicons:at-outline" class='size-4 p-px' />
                            Account
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <icon icon="teenyicons:cog-outline" class='size-4 p-px' />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <icon icon="uiw:logout" class='size-4 p-px' />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <icon icon="cil:exit-to-app" class='size-4 p-px' />
                        Exit App
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</SidebarFooter>
</template>

<style scoped></style>