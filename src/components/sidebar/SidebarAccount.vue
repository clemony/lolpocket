<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
import { supabase } from '@/lib/supabase'
const as = useAccountStore()

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

const collapsed = ref()
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
                            }"
                            active-class="bg-b2/30"
                            class="flex h-14 flex-nowrap items-center rounded-md"
                            :class="{ join: as.sidebarOpen }"
                            as-child>
                            <SidebarMenuButton
                                :size="as.sidebarOpen ? 'lg' : 'icon'"
                                class="flex border-none"
                                :class="{
                                    'px-3': !collapsed,
                                    'join-item h-14 w-full grow rounded-r-none !px-1':
                                        as.sidebarOpen,
                                    '-ml-1 aspect-square !size-10':
                                        !as.sidebarOpen,
                                }"
                                tooltip="Insights">
                                <Avatar class="size-9 rounded-full shadow-xs">
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
                                v-if="as.sidebarOpen"
                                as-child
                                class="join-item flex h-full !w-16 items-center rounded-l-none border-none"
                                :class="{ 'hidden opacity-0': !as.sidebarOpen }"
                                @click.stop.prevent>
                                <Button
                                    v-if="as.sidebarOpen"
                                    size="icon"
                                    class="!size-inherit grid place-items-center"
                                    variant="ghost"
                                    @click.stop.prevent>
                                    <ExpandIndicator />
                                </Button>
                            </CollapsibleTrigger>
                        </RouterLink>

                        <CollapsibleContent v-if="as.sidebarOpen">
                            <SidebarMenuSub>
                                <!-- Admin -->
                                <SidebarMenuSubItem>
                                    <RouterLink to="/admindashboard">
                                        <SidebarMenuSubButton
                                            size="lg"
                                            class="gap-4">
                                            <icon
                                                icon="codicon:source-control" />
                                            <span class="">
                                                Admin Dashboard
                                            </span>
                                        </SidebarMenuSubButton>
                                    </RouterLink>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem
                                    v-for="link in links"
                                    :key="link.name">
                                    <RouterLink
                                        :to="{
                                            name: link.link,
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
