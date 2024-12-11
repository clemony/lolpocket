<script setup lang="ts">
import { useGeneralStore } from '@/client/stores/generalStore'
import { useSidebar } from '@/client/components/base/sidebar/utils'
import { summoner } from '@/client/data/playerData'
const gs = useGeneralStore()

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
            }">
            <SidebarMenuItem>
                <SidebarMenuButton
                    variant="default"
                    size="sm"
                    class="group/lol rounded-none border-0! ring-0 hover:bg-transparent focus:border-0! focus:outline-0! active:bg-transparent! active:hover:bg-transparent! [&_span]:data-[state=open]:underline"
                    :class="{ 'px-3': !collapsed }">
                    <Avatar
                        class="ml-2 size-9 rounded-full border border-1 border-transparent shadow-xs">
                        <AvatarImage
                            :src="summoner.icon"
                            :alt="summoner.name" />
                        <AvatarFallback class="rounded-full">LP</AvatarFallback>
                    </Avatar>
                    <div
                        class="text-3 flex w-full items-center gap-1 align-baseline leading-none opacity-80 group-data-[state=open]:underline hover:underline">
                        <div class="text-md truncate font-semibold">
                            {{ summoner.name }}
                        </div>
                        <div class="truncate group-data-[state=open]:italic">
                            #{{ summoner.tag }}
                        </div>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
</template>

<style scoped></style>
