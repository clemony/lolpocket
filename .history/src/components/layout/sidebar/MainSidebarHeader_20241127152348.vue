<script setup lang="ts">
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
import { newPocketModal, commandModal } from '@components/modal/Modal'

import { useSidebar } from '@/components/base/sidebar/utils'

const sidebar = useSidebar()
console.log(sidebar)
const { toggleSidebar } = useSidebar()
const state = computed(() => {
    return sidebar.state.value
})

watch(
    () => state.value,
    (newVal) => {
        gs.sidebarState = newVal
        console.log(newVal)
    }
)

const collapsed = computed(() => {
    const state = gs.sidebarState == 'collapsed' ? true : false
    return state
})
</script>

<template>
    <SidebarHeader>
        <SidebarMenu
            class="w-full pt-3"
            :class="{
                'items-center': collapsed,
                '': !collapsed,
            }">
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <SidebarMenuButton
                            variant="ghost"
                            size="sm"
                            class="group/lol rounded-none border-0! ring-0 hover:bg-transparent focus:border-0! focus:outline-0! active:bg-transparent! active:hover:bg-transparent! [&_span]:data-[state=open]:underline"
                            :class="{ 'px-3': !collapsed }">
                            <div
                                class="bg-neutral text-neutral-content/90 flex aspect-square size-8 items-center justify-center rounded-md shadow-xs">
                                <span class="mt-1px text-2! font-bold">LP</span>
                            </div>
                            <span
                                class="text-4-content mt-px text-lg font-semibold underline-offset-4 opacity-80 group-hover/lol:underline">
                                lolpockets
                            </span>
                            <icon
                                icon="teenyicons:caret-vertical-small-outline"
                                class="ml-auto size-5!" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        class="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg last:mb-1"
                        align="start"
                        side="bottom"
                        :side-offset="4">
                        <DropdownMenuGroup
                            class="*:text-2 mr-0.5 px-1.5 font-medium [&_>div]:gap-4 [&_svg]:size-5">
                            <DropdownMenuItem
                                class=""
                                @click="togglemodalState(newPocketModal)">
                                <icon
                                    icon="teenyicons:folder-plus-outline"
                                    class="size-3.5" />
                                New Pocket

                                <DropdownMenuShortcut>⌘ N</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                class=""
                                data-sidebar="trigger"
                                @click="toggleSidebar">
                                <icon
                                    v-if="!collapsed"
                                    icon="teenyicons:send-left-outline"
                                    class="size-3" />
                                <icon
                                    v-if="collapsed"
                                    icon="teenyicons:send-right-outline"
                                    class="size-3" />

                                {{
                                    !collapsed ? 'Collapse Sidebar' : (
                                        'Expand Sidebar'
                                    )
                                }}

                                <DropdownMenuShortcut>⌘ L</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
            <SidebarMenuItem class="mx-2.5 mt-3 flex flex-row gap-3">
                <SidebarMenuButton
                    size="xs"
                    class="hover-ring-neutral/60 border-b3/80 bg-b1/50 hover:border-b3 hover:bg-b1/60 relative h-9 min-h-6! w-full items-center justify-start border px-2 py-1! hover:ring-1"
                    :class="{
                        'aspect-square justify-center p-0! [&_span]:hidden [&_svg]:-ml-px':
                            collapsed,
                    }">
                    <icon
                        icon="teenyicons:search-outline"
                        class="text-4-content/80 size-[12px]!" />

                    <span
                        class="align-end pt-2px text-4-content/80 grow px-1 text-left">
                        Search
                    </span>
                    <DropdownMenuShortcut class="mr-1">
                        ⌘ K
                    </DropdownMenuShortcut>
                </SidebarMenuButton>

                <!--                 <SidebarMenuButton class="m-0 mt-2px max-w-fit p-0!" as-child>
                    <Button
                        variant="outline"
                        size="icon"
                        class="m-0 size-8 border-b3 bg-b1/40">
                        <icon icon="lets-icons:key" class="size-6 opacity-50" />
                    </Button>
                </SidebarMenuButton> -->
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
</template>

<style scoped></style>
