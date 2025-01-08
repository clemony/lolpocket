<script setup lang="ts">
import { summoner } from '@data/playerData'
import { supabase } from '@/lib/supabase'
import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const as = useAccountStore()

async function signOut() {
    const { error } = await supabase.auth.signOut()
    console.log('Signed Out')
}
</script>
<template>
    <MenubarItem
        class="text-2 flex w-full items-center justify-end gap-2 px-1 py-1 font-normal">
        <Avatar class="size-8 shrink-0 rounded-lg shadow-sm">
            <AvatarImage :src="summoner.icon" :alt="summoner.name" />
            <AvatarFallback class="rounded-lg">LP</AvatarFallback>
        </Avatar>
        <!-- <icon icon="teenyicons:at-outline" class="-ml-px !size-6" /> -->
        <div
            class="text-2 flex w-full items-center gap-2 px-2 pt-[2px] text-start align-baseline">
            <h5 class="truncate !font-semibold">
                {{ summoner.name }}
            </h5>
            <span class="text-3">#{{ summoner.tag }}</span>
        </div>
    </MenubarItem>

    <MenubarSeparator />
    <Themes />

    <MenubarSeparator />

    <MenubarItem class="mr-px">
        <icon icon="ph:gear-six" class="-ml-px !size-5" />
        Settings
        <MenubarShortcut>
            <icon icon="lucide:arrow-big-up" />
            S
        </MenubarShortcut>
    </MenubarItem>

    <MenubarSeparator />

    <MenubarItem v-if="ts.sessionInfo" @click="signOut">
        <icon icon="iconamoon:player-stop-light" class="-ml-0.5 !size-5.5" />
        Log out

        <MenubarShortcut>⌘Q</MenubarShortcut>
    </MenubarItem>

    <MenubarItem v-if="!ts.sessionInfo" class="flex">
        <icon icon="iconamoon:player-play-light" class="-ml-0.5 !size-5.5" />
        Log in

        <MenubarShortcut>⌘Q</MenubarShortcut>
    </MenubarItem>
</template>
<style scoped></style>
