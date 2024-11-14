<script setup lang="ts">
import '@assets/css/imports.css'
import { useSessionStore } from '@stores/sessionStore'
import { useDataStore } from '@stores/dataStore'
import { usePocketStore } from '@stores/pocketStore'
import { Toaster } from '@/components/base/sonner'
import { nav } from '@/components/layout/sidebar/nav'
import { modal } from '@/components/layout/ui/modal'
const ps = usePocketStore()
const sn = useSessionStore()
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

const navPockets = [
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

const state = ref(false)

const component = shallowRef()
const title = ref('')
const description = ref('')
const submitText = ref('')
const obj = ref()

function toggleState(obj) {
    if (state.value == false) {
        state.value = true
        obj.value = obj.cmpt
        title.value = obj.title
        description.value = obj.description
        submitText.value = obj.submitText
    }
}

console.log(state.value)
</script>

<template>
    <div
        v-shortkey.once="['meta', 'p']"
        @shortkey="toggleState(modal)"
        class="absolute hidden"></div>
    <Titlebar />
    <Toaster />
    <SidebarProvider>
        <Sidebar collapsible="icon" class="justify-center">
            <MenuHeader
                v-model:open="state"
                v-model:obj="obj"
                @update:state="toggleState(obj)" />
            <SidebarContent class="[&_button]:py-5">
                <SidebarGroup>
                    <SidebarGroupLabel data-tauri-drag-region>
                        Basics
                    </SidebarGroupLabel>

                    <SidebarMenu class="mb-1 [&_svg]:!size-5">
                        <Collapsible
                            as-child
                            :default-open="true"
                            class="group/collapsible">
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    tooltip="Pockets"
                                    class="group/pocket gap-4"
                                    @click="sn.navigateTo('/pockets')">
                                    <icon icon="formkit:folder" />
                                    <span class="text-base font-medium">
                                        Pockets
                                    </span>

                                    <SidebarMenuBadge>
                                        <Badge
                                            variant="primary"
                                            size="sm"
                                            v-if="
                                                ps.pockets && ps.pockets.length
                                            "
                                            class="absolute right-2 px-1.5 group-hover/pocket:opacity-60">
                                            {{ ps.pockets.length }}
                                        </Badge>
                                    </SidebarMenuBadge>
                                </SidebarMenuButton>

                                <CollapsibleContent>
                                    <SidebarMenuSub class="!-mr-px">
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
                                                <div class="flex items-center">
                                                    <!--  <icon :icon="item.icon" class='!size-4.5' /> -->

                                                    <span
                                                        class="text-base font-medium">
                                                        {{ item.title }}
                                                    </span>

                                                    <SidebarMenuBadge>
                                                        <Badge
                                                            variant="secondary"
                                                            size="sm"
                                                            v-if="
                                                                item.array &&
                                                                Array.isArray(
                                                                    item.array
                                                                ) &&
                                                                item.array
                                                                    .length
                                                            "
                                                            class="absolute right-0 px-1.5 group-hover/pocket:opacity-60">
                                                            {{
                                                                item.array
                                                                    .length
                                                            }}
                                                        </Badge>
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
                        <SidebarMenuItem class="mt-1">
                            <SidebarMenuButton as-child>
                                <a
                                    @click="sn.navigateTo('/loved')"
                                    class="gap-4 py-5">
                                    <icon
                                        icon="teenyicons:heart-outline"
                                        class="!size-5" />
                                    <span class="text-base font-medium">
                                        Loved
                                    </span>

                                    <SidebarMenuBadge>
                                        <MenuLoves />
                                    </SidebarMenuBadge>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem class="mb-2">
                            <SidebarMenuButton as-child>
                                <a
                                    @click="sn.navigateTo('')"
                                    class="gap-4 py-5">
                                    <icon
                                        icon="teenyicons:calculator-outline"
                                        class="!size-5" />
                                    <span class="text-base font-medium">
                                        Calculator
                                    </span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenu>
                        <Collapsible
                            v-for="item in nav.navCollapse"
                            :key="item.title"
                            as-child
                            :default-open="item.isActive"
                            class="group/collapsible">
                            <SidebarMenuItem>
                                <CollapsibleTrigger as-child>
                                    <SidebarMenuButton
                                        :tooltip="item.title"
                                        class="gap-4 py-5">
                                        <icon
                                            :icon="item.icon"
                                            class="!size-5" />
                                        <span class="text-base font-medium">
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
                                            <SidebarMenuSubButton as-child>
                                                <a
                                                    @click="
                                                        sn.navigateTo(
                                                            subItem.url,
                                                            subItem.title,
                                                            subItem.icon
                                                        )
                                                    ">
                                                    <!--     <icon :icon="subItem.icon" /> -->
                                                    <span
                                                        class="text-base font-medium">
                                                        {{ subItem.title }}
                                                    </span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>

                <MenuPockets
                    v-show="ps.pinned"
                    class="transition-all duration-700 animate-in animate-out fade-in-100 fade-out-100"
                    :data="ps.pinned"
                    title="Pinned"
                    :key="ps.pinned" />
                <MenuPockets
                    :data="ps.general"
                    title="Pockets"
                    :key="ps.general" />
            </SidebarContent>

            <MenuFooter />

            <SidebarRail />
        </Sidebar>
        <SidebarInset class="relative">
            <div class="absolute flex h-full w-full min-w-full overflow-scroll">
                <NavTabs />
            </div>
            <div
                data-tauri-drag-region
                class="absolute inset-0 left-0 top-0 m-0 mt-[31px] h-full w-full max-w-full overflow-y-clip rounded-tl-box border border-base-300 !bg-base-100/90 object-contain !p-0 !shadow-[inset_-12px_-8px_40px_#00000020] first:flex first:contain-inline-size"
                :class="{
                    '!rounded-tl-none': sn.activeTab == sn.openTabs[0].link,
                }">
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
                        <component :is="Component" ref="currentComponent" />
                    </KeepAlive>
                </router-view>
            </div>

            <Dialog v-model:open="state">
                <component
                    :is="component"
                    :title="title"
                    :description="description"
                    :submitText="submitText" />
            </Dialog>
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
