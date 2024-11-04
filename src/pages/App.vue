<script setup lang="ts">
import '@assets/css/imports.css'
import { useGeneralStore } from '@stores/generalStore'
import { useSessionStore } from '@stores/sessionStore'
import { useDataStore } from '@stores/dataStore'
import { usePocketStore } from '@stores/pocketStore'
import { Toaster } from '@/components/ui/sonner'



const ps = usePocketStore();
const sn = useSessionStore()
const gs = useGeneralStore()
const ds = useDataStore()
ds.fetchData()

const pinnedPockets = ref(ps.pinnedRowData)
watch(
    () => ps.pinnedRowData,
    (newVal) => {
        pinnedPockets.value = newVal
    }
)

/* ------------------------------ ON MOUNTED ----------------------------- */




const navData = {
    navCollapse: [

        {
            title: 'Database',
            url: '',
            icon: 'cil:save',
            isActive: true,

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

}


const navPockets = [
    {
        title: 'Trash',
        url: '/trash',
        array: ps.trashPockets,
        icon: 'formkit:trash'
    },
    {
        title: 'Archive',
        url: '/archive',
        array: ps.archivePockets,
        icon: 'fluent:archive-16-regular'
    },
]

</script>

<template>
<Titlebar />
<Toaster />
<SidebarProvider>
    <Sidebar collapsible="icon">
        <MenuHeader />
        <SidebarContent>
            <SidebarGroup>

                <SidebarGroupLabel data-tauri-drag-region>Basics</SidebarGroupLabel>

                <SidebarMenu class='mb-1'>

                    <Collapsible as-child :default-open="true" class="group/collapsible ">
                        <SidebarMenuItem>

                            <SidebarMenuButton tooltip="Pockets" class='gap-3 group/pocket'
                                @click="sn.navigateTo('/pockets')">
                                <icon icon="formkit:folder" />
                                <span class='font-medium'>Pockets</span>


                                <SidebarMenuBadge v-if="ps.pockets && ps.pockets.length"
                                    class='right-2.5 badge badge-neutral badge-sm group-hover/pocket:opacity-60'>
                                    {{ ps.pockets.length }}
                                </SidebarMenuBadge>

                            </SidebarMenuButton>

                            <CollapsibleContent>
                                <SidebarMenuSub class='!-mr-px '>
                                    <SidebarMenuSubItem v-for="item in navPockets" :key="item.title">
                                        <SidebarMenuSubButton as-child
                                            @click="sn.navigateTo(item.url, item.title, item.icon)"
                                            class='group/pocketstuff'>

                                            <div class='flex items-center'>
                                                <!--  <icon :icon="item.icon" class='!size-4.5' /> -->

                                                <span class='font-medium'>{{ item.title }}</span>

                                                <SidebarMenuBadge
                                                    v-if="item.array && Array.isArray(item.array) && item.array.length"
                                                    class='right-0 badge badge-neutral flex items-center badge-sm group-hover/pocketstuff:opacity-60'>
                                                    {{ item.array.length }}
                                                </SidebarMenuBadge>

                                            </div>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>

                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton as-child>
                            <a @click="sn.navigateTo('/loved')" class='gap-3'>
                                <icon icon="teenyicons:heart-outline" />
                                <span class='font-medium'>Loved</span>

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
                                <span class='font-medium'>Calculator</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                </SidebarMenu>
                <SidebarMenu>
                    <Collapsible v-for="item in navData.navCollapse" :key="item.title" as-child
                        :default-open="item.isActive" class="group/collapsible ">
                        <SidebarMenuItem>
                            <CollapsibleTrigger as-child>
                                <SidebarMenuButton :tooltip="item.title" class='gap-3'>
                                    <icon :icon="item.icon" />
                                    <span class='font-medium'>{{ item.title }}</span>
                                    <icon icon="teenyicons:left-small-outline"
                                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />


                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                                        <SidebarMenuSubButton as-child>
                                            <a @click="sn.navigateTo(subItem.url, subItem.title, subItem.icon)">
                                                <!--     <icon :icon="subItem.icon" /> -->
                                                <span class='font-medium'>{{ subItem.title }}</span>

                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>




                </SidebarMenu>
            </SidebarGroup>



            <MenuPockets v-show="ps.pinnedRowData.length"
                class='animate-in animate-out fade-in-100 fade-out-100 transition-all duration-700'
                :data="pinnedPockets" title="Pinned" :key="ps.pinnedRowData" />
            <MenuPockets :data="ps.rowData" title="Pockets" :key="ps.rowData" />





        </SidebarContent>


        <MenuFooter />

        <SidebarRail />
    </Sidebar>
    <SidebarInset class='relative'>
        <div class='w-full min-w-full h-full  flex overflow-scroll absolute'>
            <NavTabs />
        </div>
        <div class=" absolute  w-full max-w-full top-0 left-0  inset-0 m-0 mt-[31px] h-full  rounded-tl-box  border border-base-300 !bg-base-100/90 !p-0 !shadow-[inset_-12px_-8px_40px_#00000020]  overflow-y-clip object-contain first:contain-inline-size first:flex"
            :class="{ '!rounded-tl-none': sn.activeTab == sn.openTabs[0].link }">

            <router-view v-slot="{ Component }">
                <KeepAlive
                    :include="['Pockets', 'Pocket', 'PocketChampions', 'PocketDashboard', 'PocketItems', 'PocketRunes', 'PocketSelectedChampions']">
                    <component :is="Component" ref="currentComponent" />
                </KeepAlive>
            </router-view>
        </div>

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