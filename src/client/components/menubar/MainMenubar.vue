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

                    <Button
                        variant="ghost"
                        size="icon"
                        class="gap-3"
                        @click="toggleSidebar()">
                        <icon
                            icon="system-uicons:menu-hamburger"
                            class="size-7 shrink-0 object-center transition-all duration-300"
                            :class="{
                                'stroke-1.5 scale-x-20 scale-y-150':
                                    gs.sidebarState == 'collapsed',
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
        <div class="gap-2">
            <MenubarMenu>
                <SearchButton
                    class="mr-2 h-9 rounded-lg px-4 backdrop-brightness-[97%]"
                    placeholder="Search" />
            </MenubarMenu>
        </div>

        <div class="flex items-center">
            <MenubarMenu>
                <MenubarTrigger
                    class="group radix-state-open:bg-transparent"
                    as-child>
                    <Button variant="ghost">
                        <div
                            class="text-3 w-fit pt-1 pt-px pr-3 opacity-60 group-hover:opacity-100">
                            14.16.1
                        </div>
                        <icon
                            icon="material-symbols-light:breaking-news-outline-rounded"
                            class="group-radix-state-open:opacity-100 size-7.25 shrink-0 stroke-2 opacity-60 group-hover:opacity-100" />
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
