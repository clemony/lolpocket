<script setup lang="ts">
import '@assets/css/imports.css'
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { Toaster } from '@/components/base/sonner'
import { nav } from '@/components/layout/sidebar/nav'
import { commandModal, newPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'
const ps = usePocketStore()
const sn = useSessionStore()

const pinnedPockets = ref(ps.pinned)
watch(
    () => ps.pinned,
    (newVal) => {
        pinnedPockets.value = newVal
    }
)

/* ------------------------------ O)N MOUNTED ----------------------------- */

const navPockets = [
    {
        title: 'Table',
        url: '/pockets',

        icon: 'formkit:folder',
    },
    {
        title: 'Trash',
        url: '/trash',
        array: ps.trashPockets,
        icon: 'formkit:trash',
    },
    {
        title: 'Archive',
        url: '/archive',
        array: ps.archivePockets,
        icon: 'fluent:archive-16-regular',
    },
]

// State for controlling modal open/close and the active modal data
</script>

<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleModalState(commandModal)"
        class="open-command"></div>

    <Modal />
    <!--  <Titlebar /> -->
    <Toaster />

    <MainMenubar />

    <SidebarProvider>
        <Sidebar
            collapsible="icon"
            class="justify-center border border-b-base-300 border-l-base-200 border-r-transparent">
            <SidebarContent class="pt-12">
                <ScrollArea>
                    <SidebarGroup>
                        <SidebarGroupLabel data-tauri-drag-region>
                            Navigation
                        </SidebarGroupLabel>
                        <SidebarMenu class="mb-1">
                            <SidebarMenuItem>
                                <RouterLink to="/">
                                    <SidebarMenuButton>
                                        <icon
                                            icon="teenyicons:home-outline"
                                            class="m-0 overflow-auto object-none p-0" />
                                        <span class="text-base">Home</span>
                                    </SidebarMenuButton>
                                </RouterLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <icon
                                        icon="teenyicons:home-outline"
                                        class="m-0 overflow-auto object-none p-0" />
                                    <span class="text-base">Home</span>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <SidebarMenuAction show-on-hover>
                                            <icon
                                                icon="teenyicons:more-vertical-outline"
                                                class="size-5 shrink-0" />
                                            <span class="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        class="w-48 rounded-lg"
                                        side="bottom"
                                        align="end">
                                        <DropdownMenuItem>
                                            <span>View Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <span>Share Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <span>Delete Project</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>

                            <Collapsible
                                key="pockets"
                                as-child
                                :default-open="true"
                                class="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child>
                                        <SidebarMenuButton
                                            tooltip="Pockets"
                                            class="py-5">
                                            <icon icon="formkit:folder" />
                                            <span class="text-base">
                                                Pockets
                                            </span>
                                            <icon
                                                icon="teenyicons:left-small-outline"
                                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub
                                            v-show="ps.pinned"
                                            class="transition-all duration-700 animate-in animate-out fade-in-100 fade-out-100">
                                            <SidebarPockets
                                                :data="ps.pinned"
                                                title="Pinned"
                                                :key="ps.pinned" />
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <Collapsible
                                                key="pocket"
                                                as-child
                                                :default-open="false"
                                                class="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger
                                                        as-child>
                                                        <SidebarMenuSubButton>
                                                            All
                                                            <SidebarMenuBadge
                                                                class="mr-8">
                                                                {{
                                                                    ps.pockets
                                                                        .length
                                                                }}
                                                            </SidebarMenuBadge>

                                                            <icon
                                                                icon="teenyicons:left-small-outline"
                                                                class="-mr-1 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                                        </SidebarMenuSubButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarPockets
                                                            :data="ps.pockets"
                                                            title="Pockets"
                                                            :key="ps.pockets" />
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>

                                            <SidebarMenuSubItem
                                                v-for="item in navPockets"
                                                :key="item.title">
                                                <SidebarMenuSubButton
                                                    as-child
                                                    @click="
                                                        sn.navigateTo(
                                                            item.url,
                                                            item.title,
                                                            item.icon
                                                        )
                                                    "
                                                    class="group/pocketstuff">
                                                    <div
                                                        class="flex items-center">
                                                        <!--  <icon :icon="item.icon" class='!size-4.5' /> -->

                                                        <span>
                                                            {{ item.title }}
                                                        </span>

                                                        <SidebarMenuBadge
                                                            v-if="item.array">
                                                            {{
                                                                item.array
                                                                    .length
                                                            }}
                                                        </SidebarMenuBadge>
                                                    </div>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                            <SidebarMenuItem class="mt-1">
                                <RouterLink to="/loved">
                                    <SidebarMenuButton class="py-5">
                                        <icon icon="teenyicons:heart-outline" />
                                        <span class="text-base">Loved</span>

                                        <SidebarMenuBadge>
                                            <SidebarMenuLoves />
                                        </SidebarMenuBadge>
                                    </SidebarMenuButton>
                                </RouterLink>
                            </SidebarMenuItem>

                            <SidebarMenuItem class="mb-2">
                                <RouterLink to="/calculator">
                                    <SidebarMenuButton class="py-5">
                                        <icon
                                            icon="teenyicons:calculator-outline" />
                                        <span class="text-base">
                                            Calculator
                                        </span>
                                    </SidebarMenuButton>
                                </RouterLink>
                            </SidebarMenuItem>

                            <Collapsible
                                v-for="item in navData.navCollapse"
                                :key="item.title"
                                as-child
                                :default-open="item.isActive"
                                class="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger as-child>
                                        <SidebarMenuButton
                                            :tooltip="item.title"
                                            class="py-5">
                                            <icon :icon="item.icon" />
                                            <span class="text-base">
                                                {{ item.title }}
                                            </span>
                                            <icon
                                                icon="teenyicons:left-small-outline"
                                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem
                                                v-for="subItem in item.items"
                                                :key="subItem.title">
                                                <RouterLink
                                                    :to="{
                                                        name: subItem.url,
                                                        hash: subItem.hash,
                                                    }">
                                                    <SidebarMenuSubButton>
                                                        <!--     <icon :icon="subItem.icon" /> -->
                                                        <span class="text-base">
                                                            {{ subItem.title }}
                                                        </span>
                                                    </SidebarMenuSubButton>
                                                </RouterLink>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroup>
                </ScrollArea>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
        <SidebarInset class="relative">
            <div
                data-tauri-drag-region
                class="absolute inset-0 left-0 top-0 m-0 h-full w-full overflow-y-clip border border-y-base-300 border-l-transparent border-r-base-300 !p-0">
                <router-view v-slot="{ Component }">
                    <KeepAlive
                        :include="[
                            'Pockets',
                            'Pocket',
                            'PocketChampions',
                            'PocketDashboard',
                            'PocketItems',
                            'PocketRunes',
                            'PocketSelectedChampions',
                        ]">
                        <component
                            :is="Component"
                            ref="currentComponent"
                            @update:modalState="
                                (modal) => toggleModalState(modal)
                            " />
                    </KeepAlive>
                </router-view>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<style>
/* :root {
    :v-bind(gs.mainTheme);
} */
</style>
