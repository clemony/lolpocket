<script setup lang="ts">
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
import { newPocketModal, commandModal } from '@/components/Layout/ui/Modal'

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
</script>

<template>
    <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <SidebarMenuButton
                            variant="ghost"
                            size="md"
                            class="flex size-full shrink-0 flex-nowrap items-center gap-3 !border-0 !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200">
                            <div
                                class="flex aspect-square h-[19px] w-[20px] shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                                <span class="mt-1px !text-xs font-bold">
                                    LP
                                </span>
                            </div>
                            <span class="mt-px text-lg font-bold opacity-80">
                                lolpockets
                            </span>
                            <icon
                                icon="teenyicons:caret-vertical-small-outline"
                                class="ml-auto !size-5" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg last:mb-1"
                        align="start"
                        side="bottom"
                        :side-offset="4">
                        <DropdownMenuItem
                            class="hover:bg-transparent data-[highlighted]:bg-transparent">
                            <Button
                                variant="outline"
                                class="relative max-h-9 w-full items-center justify-start bg-base-100/80 px-2 hover:cursor-text">
                                <span
                                    class="inset-y-0 flex items-center justify-center justify-self-start">
                                    <icon
                                        icon="teenyicons:search-outline"
                                        class="text-base-content/80" />
                                </span>
                                <span
                                    class="align-end grow px-2 pt-0.5 text-left text-base-content/80">
                                    Search...
                                </span>
                                <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        <DropdownMenuGroup
                            class="mr-0.5 px-1.5 font-medium *:text-sm [&_>div]:gap-4 [&_svg]:size-5">
                            <DropdownMenuItem
                                class=""
                                @click="gs.toggleModalState(newPocketModal)">
                                <icon
                                    icon="teenyicons:folder-plus-outline"
                                    class="size-3.5" />
                                New Pocket

                                <DropdownMenuShortcut>⌘ N</DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                class=""
                                data-sidebar="trigger"
                                @click="toggleSidebar">
                                <icon
                                    v-if="gs.sidebarState == 'expanded'"
                                    icon="teenyicons:send-left-outline"
                                    class="size-3" />
                                <icon
                                    v-if="gs.sidebarState == 'collapsed'"
                                    icon="teenyicons:send-right-outline"
                                    class="size-3" />

                                {{
                                    gs.sidebarState == 'expanded' ?
                                        'Collapse Sidebar'
                                    :   'Expand Sidebar'
                                }}

                                <DropdownMenuShortcut>⌘ L</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
            <SidebarMenuItem class="mx-3 mt-1">
                <SidebarMenuButton
                    class="relative h-8 w-full max-w-44 items-center justify-start border border-base-300/80 bg-base-100/60 px-2 hover:cursor-text">
                    <icon
                        icon="teenyicons:search-outline"
                        class="-mt-px size-[11px] shrink-0 text-base-content/80" />

                    <span
                        class="align-end grow px-1 pt-2px text-left text-base-content/80">
                        Search
                    </span>
                    <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
</template>

<style scoped></style>
