<script setup lang="ts">
import { useSessionStore } from '@/stores/sessionStore'
import type { HTMLAttributes } from 'vue'

import type { pocket } from 'types'

const sn = useSessionStore()

const props = defineProps<{
    data: Array<pocket>
    title?: string
    class?: HTMLAttributes['class']
}>()

const data = props.data
</script>

<template>
    <!--     <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            {{ props.title }}
        </SidebarGroupLabel>
        <SidebarMenu> -->
    <SidebarMenuSub :class="cn('text-base', props.class)">
        <SidebarMenuSubItem
            v-for="pocket in data"
            :key="pocket.key"
            :class="cn('text-base')">
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
                                    class="size-6 rounded-lg !shadow-sm"
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
    </SidebarMenuSub>
</template>

<style scoped>
/*prettier ignore */
/* beautify ignore:start */
</style>
