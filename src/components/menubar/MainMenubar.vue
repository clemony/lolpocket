<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useAccountStore } from '@stores/accountStore'
import { useSidebar } from '@/components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()

=======
import { useGeneralStore } from '@stores/generalStore'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
import { useSidebar } from '@/components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()

<<<<<<< HEAD
/*
@click="toggleSidebar()"
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
//import { useSidebar } from '@/components/base/sidebar/utils'
=======
import { useSidebar } from '@/components/base/sidebar/utils'
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
import { summoner } from '@data/playerData'
const gs = useGeneralStore()
=======
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
import { useSidebar } from '@/components/base/sidebar/utils'
import { summoner } from '@data/playerData'
const as = useAccountStore()
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)

<<<<<<< HEAD
/*
@click="toggleSidebar()"
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
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
<<<<<<< HEAD
        as.sidebarState = newVal
=======
        gs.sidebarState = newVal
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        as.sidebarState = newVal
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
        as.sidebarState = newVal
=======
        gs.sidebarState = newVal
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
        as.sidebarState = newVal
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
        console.log(newVal)
    }
)

const collapsed = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
    const state = as.sidebarState == 'collapsed' ? true : false
    return state
})

=======
    const state = gs.sidebarState == 'collapsed' ? true : false
    return state
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 */
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======

>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
 */
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
 */
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======

>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
const router = useRouter()
const hs = history.state
</script>

<template>
    <Menubar
        class="bg-b1/80 absolute z-199 m-0 flex w-full items-center gap-3 overflow-hidden border-x-0 border-t-0 border-b border-b-transparent p-0 pr-4 pl-2 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center">
        <div>
            <MenubarMenu>
                <div class="flex items-center">
                    <!--               <Button
                        v-if="
                        variant="neutral"
                        size="icon"
                        class="flex aspect-square size-7 shrink-0 items-center justify-center rounded-md">
                        <span
                            class="text-nc text-1 mt-px cursor-default font-bold select-none">
                            LP
                        </span>
                    </Button> -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                    <Button
                        variant="ghost"
                        size="icon"
                        class="gap-3"
                        @click="toggleSidebar()">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <Button variant="ghost" size="icon" class="gap-3">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
                    <Button variant="ghost" size="icon" class="gap-3">
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
                    <Button variant="ghost" size="icon" class="gap-3">
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                        <icon
                            icon="system-uicons:menu-hamburger"
                            class="size-7 shrink-0 object-center transition-all duration-300"
                            :class="{
                                'stroke-1.5 scale-x-20 scale-y-150':
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                    as.sidebarState == 'collapsed',
=======
                                    gs.sidebarState == 'collapsed',
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                    as.sidebarState == 'collapsed',
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
                                    as.sidebarState == 'collapsed',
=======
                                    gs.sidebarState == 'collapsed',
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
                                    as.sidebarState == 'collapsed',
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
                            }" />
                    </Button>

                    <Button variant="ghost" class="justify-start gap-3">
                        <h3>lolpocket</h3>
                    </Button>

                    <!--     <Tooltip content="to top">
                        <Button
                            variant="ghost"
                            size="icon"
                            class="size-8 opacity-60">
                            <icon
                                icon="teenyicons:up-small-outline"
                                class="size-full p-1" />
                        </Button>
                    </Tooltip> -->
                </div>
            </MenubarMenu>
        </div>
        <Grow />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div class="">
=======
        <div class="gap-2">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        <div class="">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
        <div class="">
=======
        <div class="gap-2">
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
        <div class="">
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
            <MenubarMenu>
                <SearchButton
                    class="mr-2 h-9 rounded-lg px-4 backdrop-brightness-[97%]"
                    placeholder="Search" />
            </MenubarMenu>
        </div>

        <div class="flex items-center">
            <MenubarMenu>
                <MenubarTrigger
                    class="group data-[state=open]:bg-transparent"
                    as-child>
                    <Button variant="ghost">
                        <div
                            class="text-3 w-fit pt-1 pt-px pr-3 opacity-60 group-hover:opacity-100">
                            14.16.1
                        </div>
                        <icon
                            icon="material-symbols-light:breaking-news-outline-rounded"
                            class="size-7.25 shrink-0 stroke-2 opacity-60 group-hover:opacity-100 group-data-[state=open]:opacity-100" />
                    </Button>
                </MenubarTrigger>
                <MenubarContent class="w-96">
                    <News />
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger
                    class="group flex min-w-fit grow items-center justify-end">
                    <icon
                        icon="ph:gear-six"
                        class="size-6 shrink-0 opacity-60 group-hover:opacity-100" />
                </MenubarTrigger>

                <MenubarContent class="">
                    <SettingsDropdown />
                </MenubarContent>
            </MenubarMenu>
        </div>
    </Menubar>
</template>

<style scoped></style>
