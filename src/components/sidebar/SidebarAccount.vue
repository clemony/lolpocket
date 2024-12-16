<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { useAccountStore } from '@stores/accountStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()
=======
import { useGeneralStore } from '@stores/generalStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const gs = useGeneralStore()
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
import { useSidebar } from '@components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

const sidebar = useSidebar()
console.log(sidebar)
const { toggleSidebar } = useSidebar()
const state = computed(() => {
    return sidebar.state.value
})

watch(
    () => state.value,
    (newVal) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        as.sidebarState = newVal
=======
        gs.sidebarState = newVal
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        as.sidebarState = newVal
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
        as.sidebarState = newVal
=======
        gs.sidebarState = newVal
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
        console.log(newVal)
    }
)

const collapsed = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const state = as.sidebarState == 'collapsed' ? true : false
=======
    const state = gs.sidebarState == 'collapsed' ? true : false
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    const state = as.sidebarState == 'collapsed' ? true : false
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
    const state = as.sidebarState == 'collapsed' ? true : false
=======
    const state = gs.sidebarState == 'collapsed' ? true : false
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
    return state
})
</script>

<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
    <SidebarHeader>
        <SidebarMenu
            class="w-full pt-3 pr-6">

                <Collapsible
                as-child
                :default-open="true"
                class="group">

            <SidebarMenuItem>
                <div class='flex flex-nowrap items-center'>
                <RouterLink to="/" active-class="bg-b2/30" class="grow">
                    <SidebarMenuButton
                        variant="default"
                        size="lg"
                        class="h-14 !px-1 !py-2"
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
                  
                            <span class='font-normal text-4'>
                                {{ summoner.name }}'s insights
                            </span>
                        
                       
                    </SidebarMenuButton>
                </RouterLink>
                       <CollapsibleTrigger as-child class="group" :class="{ 'hidden': collapsed }">
                        <Button size="icon" class=' grid place-items-center' variant="ghost" >
                            <ExpandIndicator />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </SidebarMenuItem>
                </Collapsible>
        </SidebarMenu>

    </SidebarHeader>
=======
    <SidebarFooter>
<<<<<<< HEAD
=======
    <SidebarHeader>
>>>>>>> 404a531d (update 84 files and delete 4 files)
        <SidebarMenu
            class="w-full pt-3 pr-6">

                <Collapsible
                as-child
                :default-open="true"
                class="group">

            <SidebarMenuItem>
                <div class='flex flex-nowrap items-center'>
                <RouterLink to="/" active-class="bg-b2/30" class="grow">
                    <SidebarMenuButton
                        variant="default"
                        size="lg"
                        class="h-14 !px-1 !py-2"
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
                  
                            <span class='font-normal text-4'>
                                {{ summoner.name }}'s insights
                            </span>
                        
                       
                    </SidebarMenuButton>
                </RouterLink>
                       <CollapsibleTrigger as-child class="group" :class="{ 'hidden': collapsed }">
                        <Button size="icon" class=' grid place-items-center' variant="ghost" >
                            <ExpandIndicator />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </SidebarMenuItem>
                </Collapsible>
        </SidebarMenu>
<<<<<<< HEAD
    </SidebarFooter>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======

    </SidebarHeader>
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
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
                        class=""
                        :class="{ 'px-3': !collapsed }">
                        <Avatar
                            class="size-11 rounded-lg border border-1 border-transparent shadow-xs">
                            <AvatarImage
                                :src="summoner.icon"
                                :alt="summoner.name" />
                            <AvatarFallback class="rounded-full">
                                LP
                            </AvatarFallback>
                        </Avatar>
                        <div
                            class="flex w-full items-center gap-1 align-baseline leading-none opacity-80">
                            <div class="text-md text-4 truncate font-semibold">
                                {{ summoner.name }}
                            </div>
                            <div class="text-3 truncate">
                                #{{ summoner.tag }}
                            </div>
                        </div>
                        <Grow />
                    </SidebarMenuButton>
                </RouterLink>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
</template>

<style scoped></style>
