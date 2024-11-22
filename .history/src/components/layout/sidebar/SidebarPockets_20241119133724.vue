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
    <!--     <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            {{ props.title }}
        </SidebarGroupLabel>
        <SidebarMenu> -->
    <SidebarMenuSubItem
        v-for="pocket in data"
        :key="pocket.key"
        class="text-base">
        <ContextMenu>
            <ContextMenuTrigger>
                <VDropdown
                    theme="default"
                    :triggers="['hover']"
                    placement="right-start"
                    :skidding="0"
                    :showGroup="pocket.key"
                    :overflowPadding="0"
                    :delay="{ show: 500, hide: 100 }"
                    class="flex w-full flex-row items-center !justify-start">
                    <SidebarMenuSubButton
                        as-child
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
                            <PocketIcon
                                :pocket="pocket"
                                class="size-6 rounded-lg !shadow-sm [&_svg]:p-2px"
                                iconClass="rounded-lg" />
                            <span class="text-nowrap text-start text-sm+">
                                {{ pocket.name }}
                            </span>
                        </div>
                    </SidebarMenuSubButton>

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
    </SidebarMenuSubItem>
    <!--         </SidebarMenu>
    </SidebarGroup> -->
</template>

<style scoped>
/*prettier ignore */
/* beautify ignore:start */
</style>
