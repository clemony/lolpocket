<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
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
    <SidebarFooter>
        <SidebarMenu
            class="w-full pt-3 pr-6"
            :class="{
                'items-center': collapsed,
            }">
            <SidebarMenuItem>
                <RouterLink to="/" active-class="bg-b2/30" class="">
                    <SidebarMenuButton
                        variant="default"
                        size="lg"
                        class="h-14 !px-1 !py-2"
                        :class="{ 'px-3': !collapsed }">
                        <Avatar
                            class="size-11 rounded-lg border border-1 border-transparent shadow-xs">
                            <AvatarImage
                                :src="summoner.icon"
                                :alt="summoner.name" />
                            <AvatarFallback class="rounded-lg">
                                LP
                            </AvatarFallback>
                        </Avatar>
                        <div
                            class="flex w-full items-center gap-1 align-baseline leading-none opacity-80">
                            <div class="text-4 truncate !font-medium">
                                {{ summoner.name }}'s profile
                            </div>
                        </div>
                        <Grow />
                    </SidebarMenuButton>
                </RouterLink>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
</template>

<style scoped></style>
