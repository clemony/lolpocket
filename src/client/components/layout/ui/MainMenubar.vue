<script setup lang="ts">
import { useGeneralStore } from '@/client/stores/generalStore'
const gs = useGeneralStore()
import { summoner } from '@/client/data/playerData'

const router = useRouter()
const hs = history.state
</script>

<template>
    <Menubar
        class="bg-b1/[97%] !border-b-b3 absolute -inset-1 -right-1 -left-1 z-199 m-0 grid w-full grid-cols-3 items-center overflow-hidden border-b border-transparent p-0 shadow-[inset_0px_0px_3px_2px_#00000006,inset_3px_3px_3px_2px_#00000007,rgba(0,_0,_0,_0.15)_0px_7px_10px_-12px] outline-hidden [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center">
        <div>
            <MenubarMenu>
                <div class="flex items-center gap-2 pl-3">
                    <Button
                        variant="neutral"
                        size="icon"
                        class="ml-2 flex aspect-square size-7 shrink-0 items-center justify-center rounded-md">
                        <span
                            class="text-nc text-1 mt-px cursor-default font-bold select-none">
                            LP
                        </span>
                    </Button>

                    <Tooltip content="to top">
                        <Button
                            variant="ghost"
                            size="icon"
                            class="size-8 opacity-60">
                            <icon
                                icon="teenyicons:up-small-outline"
                                class="size-full p-1" />
                        </Button>
                    </Tooltip>
                </div>
            </MenubarMenu>

            <Grow />
        </div>

        <div class="gap-2">
            <MenubarMenu>
                <SearchButton
                    class="ml-4 h-9 rounded-lg backdrop-brightness-[97%]"
                    placeholder="lolpocket" />
            </MenubarMenu>
        </div>

        <div>
            <Grow />

            <MenubarMenu>
                <MenubarTrigger
                    class="group flex max-w-64 min-w-fit grow items-center justify-end gap-2 px-3 focus:bg-transparent data-[state=open]:bg-transparent">
                    <!--       <icon
                        icon="ph:gear-six"
                        class="oapcity-80 ml-3 size-6 shrink-0" /> -->
                </MenubarTrigger>
                <MenubarContent class="w-(--radix-menubar-trigger-width)">
                    <SettingsDropdown />
                </MenubarContent>
            </MenubarMenu>
        </div>
    </Menubar>
</template>

<style scoped></style>
