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
            <SidebarMenuItem
                :class="{
                    '!p-0': gs.sidebarState == 'collapsed',
                }">
                <DropdownMenu>
                    <DropdownMenuTrigger as-child class="py-3">
                        <SidebarMenuButton
                            variant="ghost"
                            size="md"
                            class="flex h-full flex-nowrap items-center gap-3 !border-0 !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200"
                            :class="{
                                '!pl-0': gs.sidebarState == 'collapsed',
                            }">
                            <div
                                class="flex aspect-square size-8 shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90">
                                <h4 class="shrink-0">LP</h4>
                            </div>
                            <div class="grid flex-1 text-left leading-tight">
                                <h2>lolpockets</h2>
                            </div>
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
        </SidebarMenu>
    </SidebarHeader>
</template>

<style scoped></style>
