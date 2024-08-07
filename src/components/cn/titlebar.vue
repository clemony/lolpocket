<template>
    <div data-tauri-drag-region class="titlebar">
        <DropdownMenu>
            <DropdownMenuTrigger class="justify-self-start">
                <Button variant="ghost" class="title">
                    <div class="avatar">
                        <div class="object-contain rounded-full size-5">
                            <img src="/img/ui/lp.svg" class="object-contain" />
                        </div>
                    </div>
                    <span>lolpocket</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="ml-2 -mt-1 font-normal">
                <DropdownMenuLabel class="text-base font-semibold">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="!text-md" @click="navigateTo('/home')">Home</DropdownMenuItem>
                <DropdownMenuItem class="text-base" @click="navigateTo('/settings')">Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="text-base">Save</DropdownMenuItem>
                <DropdownMenuItem class="text-base">Export</DropdownMenuItem>
                <DropdownMenuItem class="text-base">Quit</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>



        <div class="s-box">
            <form class="s-form">
                <div class="relative ">
                    <Icon icon="fluent:search-28-regular" class="s-icon" />
                    <Input placeholder="" class="in-search" />
                </div>
            </form>
        </div>

        <div class="button-wrapper">
            <div class="titlebar-button" id="titlebar-minimize">
                <Icon icon="jam:chevron-circle-down-f" class="b-window" />
            </div>
            <div class="titlebar-button" id="titlebar-maximize">
                <Icon icon="jam:plus-circle-f" class="b-window" />
            </div>
            <div class="titlebar-button" id="titlebar-close">
                <Icon icon="jam:close-circle-f" class="b-window" />
            </div>
        </div>
    </div>
</template>