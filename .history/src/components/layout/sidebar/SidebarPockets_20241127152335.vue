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
        <Collapsible
            key="pockets"
            as-child
            :default-open="title == 'pinned' ? true : false"
            class="group">
            <SidebarMenuItem>
                <CollapsibleTrigger
                    as-child
                    :disabled="!data.length"
                    class="group">
                    <SidebarMenuButton
                        :tooltip="title + ' Pockets'"
                        class="flex items-center py-5">
                        <Icon :icon="props.icon" :class="props.iconClass" />
                        <span class="text-4">
                            {{ props.title }}
                        </span>

                        <SidebarMenuBadge class="mr-8">
                            {{ data.length }}
                        </SidebarMenuBadge>
                        <Icon
                            icon="teenyicons:left-small-outline"
                            class="group-radix-state-open:-rotate-90 ml-auto transition-transform duration-200" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem
                            v-for="pocket in data"
                            :key="pocket.key"
                            :class="cn('text-4')">
                            <PocketMenu
                                :pocket="pocket"
                                type="context"
                                class="flex w-full flex-row items-center justify-start!">
                                <RouterLink
                                    :to="`/pocket/${pocket.key}`"
                                    class="w-full">
                                    <SidebarMenuSubButton
                                        class="flex w-full flex-nowrap items-center gap-4 px-2! py-5">
                                        <PocketIcon
                                            :pocket="pocket"
                                            class="size-6 rounded-lg shadow-xs!"
                                            iconClass="rounded-lg" />
                                        <span
                                            class="text-3 text-start text-nowrap">
                                            {{ pocket.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </RouterLink>
                                <!-------------------⟢ popper ⟣-------------------->
                            </PocketMenu>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
</template>

<style scoped></style>
