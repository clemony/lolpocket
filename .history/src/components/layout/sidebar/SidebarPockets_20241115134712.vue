<script setup lang="ts">
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { useGeneralStore } from '@/stores/generalStore'
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
        <SidebarGroupLabel data-tauri-drag-region>
            {{ props.title }}
        </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem v-for="pocket in data" :key="pocket.key" class="">
                <ContextMenu>
                    <ContextMenuTrigger>
                        <VDropdown
                            theme="default"
                            :triggers="['hover']"
                            placement="right-start"
                            :skidding="0"
                            :showGroup="pocket.key"
                            :overflowPadding="0"
                            
                                :tooltip="pocket.name"
                                class="flex w-full flex-nowrap items-center gap-4 !px-2 py-5"
                                @click.stop="
                                    sn.navigateTo(
                                        `/pocket/${pocket.key}`,
                                        pocket.name,
                                        pocket.icon
                                    )
                                ">
                                <div class="flex">
                                    <icon :icon="pocket.icon" class="!size-5" />
                                    <span
                                        class="text-nowrap text-start text-base font-medium tracking-tight">
                                        {{ pocket.name }}
                                    </span>
                                </div>
                            </SidebarMenuButton>

                            <!-------------------⟢ popper ⟣-------------------->
                            <template #popper>
                                <PocketPreview :pocket="pocket" />
                            </template>
                        </VDropdown>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <CmPocket :pocket="pocket" />
                    </ContextMenuContent>
                </ContextMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>

<style scoped>
/*prettier ignore */
/* beautify ignore:start */
</style>
