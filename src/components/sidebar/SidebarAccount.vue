<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()

const sidebar = useSidebar()
console.log(sidebar)
const { toggleSidebar } = useSidebar()
const state = computed(() => {
    return sidebar.state.value
})

watch(
    () => state.value,
    (newVal) => {
        as.sidebarState = newVal
        console.log(newVal)
    }
)

const collapsed = computed(() => {
    const state = as.sidebarState == 'collapsed' ? true : false
    return state
})
</script>

<template>
    <SidebarHeader class="w-full">
        <SidebarMenu class="w-full pt-3 pr-2">
            <Collapsible as-child :default-open="true" class="group w-full">
                <SidebarMenuItem class="w-full">
                    <div
                        class="group join flex w-full flex-nowrap items-center">
                        <RouterLink
                            to="/"
                            active-class="bg-b2/30"
                            class="join-item grow"
                            as-child>
                            <SidebarMenuButton
                                size="lg"
                                class="h-14 rounded-r-none !px-1 !py-2"
                                :class="{ 'px-3': !collapsed }"
                                tooltip="Insights">
                                <Avatar
                                    class="size-9 rounded-lg border border-1 border-transparent shadow-xs">
                                    <AvatarImage
                                        :src="summoner.icon"
                                        :alt="summoner.name" />
                                    <AvatarFallback class="rounded-lg">
                                        LP
                                    </AvatarFallback>
                                </Avatar>

                                <span class="text-4 font-normal">
                                    {{ summoner.name }}'s insights
                                </span>
                            </SidebarMenuButton>
                        </RouterLink>
                        <CollapsibleTrigger
                            as-child
                            class="group-has-[.router-link-exact-active]:bg-b2/30 join-item h-14 rounded-l-none"
                            :class="{ hidden: collapsed }">
                            <Button
                                size="icon"
                                class="grid place-items-center"
                                variant="ghost">
                                <ExpandIndicator />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarHeader>
</template>

<style scoped></style>
