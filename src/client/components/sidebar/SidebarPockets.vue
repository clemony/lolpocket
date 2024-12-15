<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import type { pocket } from 'types'

const props = defineProps<{
    data: Array<pocket>
    title?: string
    class?: HTMLAttributes['class']
    iconClass?: HTMLAttributes['class']
    icon?: string
}>()

const data = props.data
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem class="group">
            <Collapse
                key="pockets"
                as-child
                :open="title == 'pinned' ? true : false"
                class="group"
                :disabled="!data.length">
                <template #a>
                    <SidebarMenuButton
                        size="lg"
                        :tooltip="title + ' Pockets'"
                        class="text-bc pocket-icon flex items-center py-5">
                        <Icon :icon="props.icon" :class="props.iconClass" />
                        <span class="">
                            {{ props.title }}
                        </span>

                        <SidebarMenuBadge class="mr-8">
                            {{ data.length }}
                        </SidebarMenuBadge>
                        <ExpandIndicator />
                    </SidebarMenuButton>
                </template>
                <template #b>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem
                            v-for="pocket in data"
                            :key="pocket.key"
                            :class="cn('text-3')">
                            <PocketMenu
                                :pocket="pocket"
                                type="context"
                                class="flex w-full flex-row items-center justify-start!">
                                <RouterLink
                                    :to="`/pocket/${pocket.key}`"
                                    class="w-full">
                                    <SidebarMenuSubButton
                                        size="lg"
                                        class="flex w-full flex-nowrap items-center gap-4 px-2! py-5">
                                        <PocketIcon
                                            :pocket="pocket"
                                            class="size-6 rounded-lg shadow-xs!"
                                            iconClass="rounded-lg" />
                                        <span
                                            class="text-2 text-start text-nowrap">
                                            {{ pocket.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </RouterLink>
                            </PocketMenu>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </template>
            </Collapse>
        </SidebarMenuItem>
    </SidebarMenu>
</template>

<style scoped></style>
