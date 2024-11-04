<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'
import { useGeneralStore } from '@stores/generalStore'
import type { pocket } from 'types'

const sn = useSessionStore()
const ps = usePocketStore()
const gs = useGeneralStore()

const props = defineProps<{
    data: Array<pocket>
    title?: string
}>()

const data = props.data
</script>

<template>
<SidebarGroup>
    <SidebarGroupLabel data-tauri-drag-region>{{ props.title }}
    </SidebarGroupLabel>
    <SidebarMenu v-auto-animate>

        <SidebarMenuItem v-for="pocket in data" :key="pocket.key" class="">
            <VDropdown theme="default" :triggers="['hover']" placement="right-start" :skidding="0"
                :showGroup="pocket.key" :overflowPadding="0" :delay="{ show: 500, hide: 100 }"
                class="flex flex-row w-full  items-center !justify-start ">
                <SidebarMenuButton as-child :tooltip="pocket.name"
                    class='flex !h-8 !px-2 gap-3 w-full flex-nowrap  items-center'
                    @click.stop="sn.navigateTo(`/pocket/${pocket.key}`, pocket.name, pocket.icon)">
                    <div class='flex'>
                        <icon :icon="pocket.icon" class=" !size-4" />
                        <span class="font-medium text-nowrap text-start">{{ pocket.name }}</span>
                    </div>
                </SidebarMenuButton>
                <!-------------------⟢ popper ⟣-------------------->
                <template #popper>
                    <PocketPreview :pocket="pocket" />
                </template>
            </VDropdown>
        </SidebarMenuItem>

    </SidebarMenu>
</SidebarGroup>
</template>

<style scoped>
/*prettier ignore */
/* beautify ignore:start */</style>