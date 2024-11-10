<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();
import { NPobj } from '@/data/dialog-pop'
import { useSidebar } from '@/components/base/sidebar/utils'

const props = defineProps<{
    open: boolean
}>()

const state = ref(props.open)
const emit = defineEmits(['update:state'])
function toggleState(obj) {
    if (state.value == false) {
        state.value = true
        emit('update:state', obj)
    }
}




const sidebar = useSidebar()
const { toggleSidebar } = useSidebar()
const sidebarState = sidebar.state
</script>

<template>
<SidebarHeader>
    <SidebarMenu :ref="gs.sidebar">
        <SidebarMenuItem>

            <DropdownMenu>

                <DropdownMenuTrigger as-child class='py-3'>
                    <SidebarMenuButton variant="ghost" size="md"
                        class="!border-0 flex gap-3 pr-2.5 items-center  h-full data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40 data-[state=open]:shadow-sm !ring-0 focus:!ring-1 focus:!outline-0 focus:!ring-base-200 focus:!border-0 flex-nowrap">
                        <div
                            class="flex aspect-square size-8 items-center justify-center rounded-md bg-neutral text-neutral-content/90">

                            <h4>LP</h4>
                        </div>
                        <div class="grid flex-1 text-left  leading-tight">
                            <h2>lolpockets</h2>

                        </div>
                        <icon icon="teenyicons:caret-vertical-small-outline" class=" ml-auto !size-5" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg last:mb-1"
                    align="start" side="bottom" :side-offset="4">

                    <DropdownMenuItem class='hover:bg-transparent data-[highlighted]:bg-transparent '>
                        <Button variant="outline"
                            class="relative hover:cursor-text w-full justify-start px-2 items-center max-h-9 bg-base-100/80">
                            <span class="inset-y-0 justify-self-start flex items-center justify-center">
                                <icon icon="teenyicons:search-outline" class=" text-base-content/80" />
                            </span>
                            <span class='grow text-left px-2 pt-0.5 text-base-content/80 align-end'>Search...</span>
                            <DropdownMenuShortcut>
                                ⌘ K
                            </DropdownMenuShortcut>
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuGroup class='font-medium *:text-sm [&_svg]:size-5  [&_>div]:gap-4 mr-0.5 px-1.5'>

                        <DropdownMenuItem class="" @click="toggleState(NPobj)">
                            <icon icon="teenyicons:folder-plus-outline" class="size-3.5" />
                            New Pocket

                            <DropdownMenuShortcut>
                                ⌘ N
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem class="" data-sidebar="trigger" @click="toggleSidebar">
                            <icon v-if="sidebarState == 'expanded'" icon="teenyicons:send-left-outline"
                                class="size-3" />
                            <icon v-if="sidebarState == 'collapsed'" icon="teenyicons:send-right-outline"
                                class="size-3" />

                            {{ sidebarState == 'expanded' ? 'Collapse Sidebar' : 'Expand Sidebar' }}

                            <DropdownMenuShortcut>
                                ⌘ L
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>


        </SidebarMenuItem>
    </SidebarMenu>
</SidebarHeader>
</template>

<style scoped></style>