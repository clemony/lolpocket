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
        as.sidebarOpen = newVal
        console.log(newVal)
    }
)

/*   */
const links = [
    {
        name: 'Build Analysis',
        link: 'build-analysis',
        icon: 'octicon:graph-24',
    },
    {
        name: 'Match History',
        link: 'match-history',
        icon: 'iconoir:archery-match',
    },
]
const collapsed = computed(() => {
    const state = as.sidebarOpen == 'collapsed' ? true : false
    return state
})
</script>

<template>
    <SidebarHeader class="-mb-2 w-full">
        <SidebarGroup>
            <SidebarMenu class="w-full pt-3">
                <Collapsible as-child :default-open="true" class="w-full">
                    <SidebarMenuItem>
                        <RouterLink
                            :to="{
                                name: 'player-home',
                                /*  hash: item.hash, */
                            }"
                            active-class="bg-b2/30"
                            class="join flex h-14 flex-nowrap items-center rounded-md"
                            as-child>
                            <SidebarMenuButton
                                size="lg"
                                class="join-item flex h-14 w-full grow rounded-r-none border-none !px-1 !py-2"
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

                                <span class="capitalize">
                                    {{ summoner.name }}'s Home
                                </span>
                            </SidebarMenuButton>
                            <CollapsibleTrigger
                                as-child
                                class="join-item h-full !w-16 rounded-l-none border-none"
                                :class="{ hidden: collapsed }"
                                @click.stop.prevent>
                                <Button
                                    size="icon"
                                    class="!size-inherit grid place-items-center"
                                    variant="ghost"
                                    @click.stop.prevent>
                                    <ExpandIndicator />
                                </Button>
                            </CollapsibleTrigger>
                        </RouterLink>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem
                                    v-for="link in links"
                                    :key="link.name">
                                    <RouterLink
                                        :to="{
                                            name: link.link,
                                            /*  hash: item.hash, */
                                        }">
                                        <SidebarMenuSubButton
                                            size="lg"
                                            class="gap-4">
                                            <icon :icon="link.icon" />
                                            <span class="">
                                                {{ link.name }}
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
    </SidebarHeader>
</template>

<style scoped></style>
