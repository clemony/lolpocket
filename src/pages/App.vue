<script setup lang="ts">
import '@assets/css/imports.css'
import { useGeneralStore } from '@stores/generalStore'
import { useSessionStore } from '@stores/sessionStore'
import { useDataStore } from '@stores/dataStore'
import { usePocketStore } from '@stores/pocketStore'


const ps = usePocketStore();
const sn = useSessionStore()
const gs = useGeneralStore()
const ds = useDataStore()
ds.fetchData()



/* ------------------------------ ON MOUNTED ----------------------------- */


const userData = {
    user: {
        name: 'clem',
        tag: '#cats',
        avatar: '/img/summoner-icons/space-yuumi.jpg',
    },
}

const navData = {
    navCollapse: [
        {
            title: 'Pockets',
            url: '/pockets',
            icon: 'teenyicons:folders-outline',
            array: ps.pockets,
            isActive: true,
            items: [
                {
                    title: 'Table',
                    url: '/pockets',
                    icon: 'teenyicons:table-outline'
                },
                {
                    title: 'Trash',
                    url: '/trash',
                    array: ps.trashPockets,
                    icon: 'teenyicons:trash-outline'
                },
                {
                    title: 'Archive',
                    url: '/archive',
                    array: ps.archivePockets,
                    icon: 'teenyicons:archive-outline'
                },
            ],
        },
        {
            title: 'Database',
            url: '',
            icon: 'teenyicons:sd-card-outline',

            items: [
                {
                    title: 'Champions',
                    url: '/champions',
                    icon: '',
                    array: '',
                },
                {
                    title: 'Items',
                    url: '/items',
                    icon: '',
                },
                {
                    title: 'Runes',
                    url: '/runes',
                    icon: '',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: 'teenyicons:cog-outline',
            items: [
                {
                    title: 'General',
                    url: '/settings',
                    icon: '',
                },
                {
                    title: 'Account',
                    url: '#',
                    icon: 'teenyicons:at-outline',
                },
                {
                    title: 'About',
                    url: '/about',
                    icon: 'teenyicons:info-outline',
                },

            ],
        },
    ],

    navLinks: [

        {
            title: 'Loved',
            url: '#',
            icon: 'teenyicons:heart-outline',
        },
        {
            title: '',
            url: '#',
            icon: 'teenyicons:calculator-outline'
        }
    ],
    pocketLinks: [
        {
            name: 'Dashboard',
            link: '',
            icon: 'heroicons:squares-2x2-16-solid',
        },
        {
            name: 'Champions',
            link: 'champions',
            icon: 'teenyicons:user-circle-outline',
        },
        {
            name: 'Items',
            link: 'items',
            icon: '',
        },
        {
            name: 'Runes',
            link: 'runes',
            icon: '',
        },
    ]

}



</script>

<template>
<SidebarProvider>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <SidebarMenuButton size="md"
                                class="data-[state=open]:bg-base-200 data-[state=open]:text-base-content">
                                <div
                                    class="flex aspect-square size-6 items-center justify-center rounded-md bg-neutral text-neutral-content text-xl">

                                    LP
                                </div>
                                <div class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold !text-base">lolpockets</span>

                                </div>
                                <icon icon="teenyicons:caret-vertical-small-outline" class=" ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            align="start" side="bottom" :side-offset="4">

                            <DropdownMenuItem>
                                <div class="relative w-full max-w-sm items-center max-h-8">
                                    <Input id="search" type="text" placeholder="Search..."
                                        class="pl-10 !max-h-8 !h-8" />
                                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2 7">
                                        <icon icon="teenyicons:search-outline" class="h-5 text-base-content/80" />
                                    </span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem class="gap-2 p-2">
                                <div class="flex size-6 items-center justify-center rounded-md border bg-background">
                                    <icon icon="teenyicons:add-small-outline" class="size-4" />
                                </div>
                                <div class="font-medium text-muted-foreground">
                                    New Pocket
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>



        <SidebarContent>
            <SidebarGroup>

                <SidebarGroupLabel>Basics</SidebarGroupLabel>

                <SidebarMenu>
                    <Collapsible v-for="item in navData.navCollapse" :key="item.title" as-child
                        :default-open="item.isActive" class="group/collapsible ">
                        <SidebarMenuItem>
                            <CollapsibleTrigger as-child>
                                <SidebarMenuButton tooltip="item.title" class='gap-3'>
                                    <icon :icon="item.icon" />
                                    <span class=''>{{ item.title }}</span>
                                    <icon icon="teenyicons:left-small-outline"
                                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />

                                    <SidebarMenuBadge
                                        v-if="item.array && Array.isArray(item.array) && item.array.length"
                                        class='right-8 badge badge-neutral badge-sm'>
                                        {{ item.array.length }}
                                    </SidebarMenuBadge>

                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                                        <SidebarMenuSubButton as-child>
                                            <a @click="sn.navigateTo(subItem.url, subItem.title, subItem.icon)">
                                                <!--     <icon :icon="subItem.icon" /> -->
                                                <span>{{ subItem.title }}</span>

                                                <SidebarMenuBadge
                                                    v-if="subItem.array && Array.isArray(subItem.array) && subItem.array.length"
                                                    class='right-1.5 badge badge-neutral badge-sm'>
                                                    {{ subItem.array.length }}
                                                </SidebarMenuBadge>

                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>

                    <SidebarMenuItem>
                        <SidebarMenuButton as-child>
                            <a @click="sn.navigateTo('/loved')" class='gap-3'>
                                <icon icon="teenyicons:heart-outline" />
                                <span>Loved</span>

                                <SidebarMenuBadge>
                                    <MenuLoves />
                                </SidebarMenuBadge>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton as-child>
                            <a @click="sn.navigateTo('')" class='gap-3'>
                                <icon icon="teenyicons:calculator-outline" />
                                <span>Calculator</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>


                </SidebarMenu>
            </SidebarGroup>


            <SidebarGroup>

                <SidebarGroupLabel>Pinned</SidebarGroupLabel>

                <SidebarMenu>
                    <Collapsible v-for="pocket in ps.pockets" :key="pocket.key" as-child :default-open="pocket.pinned"
                        class="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger as-child>
                                <SidebarMenuButton tooltip="pocket.name" class='gap-3'>
                                    <icon :icon="pocket.icon" />
                                    <span>{{ pocket.name }}</span>
                                    <icon icon="teenyicons:left-small-outline"
                                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem v-for="link in navData.pocketLinks">
                                        <SidebarMenuSubButton as-child>
                                            <a
                                                @click="sn.navigateTo(`/pocket/${pocket.key}/${link.link}`, pocket.name, pocket.icon)">
                                                <span>{{ link.name }}</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
            </SidebarGroup>



        </SidebarContent>



        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <SidebarMenuButton size="lg"
                                class="data-[state=open]:bg-base-200 data-[state=open]:text-sidebar-accent-foreground">
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
                        <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
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

                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <icon icon="teenyicons:basket-minus-outline" />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <icon icon="teenyicons:cog-outline" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <icon icon="teenyicons:chrome-outline" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <icon icon="teenyicons:cup-outline" />
                                Quit
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
    <SidebarInset>

        <Tabs />
    </SidebarInset>
</SidebarProvider>
</template>

<style scoped></style>
<!--         <header
            class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div class="flex items-center gap-2 px-4">
                        <SidebarTrigger class="-ml-1" />
                        <Separator orientation="vertical" class="mr-2 h-4" />
        
                    </div>
                </header> -->