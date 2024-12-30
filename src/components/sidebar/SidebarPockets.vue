<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
const ps = usePocketStore()
import type { pocket } from '@/types/pocketTypes'

const props = defineProps<{
    data: Array<pocket>
    title?: string
    class?: HTMLAttributes['class']
    iconClass?: HTMLAttributes['class']
    icon?: string
}>()

const dataKey = computed(() => {
    console.log('💠 - dataKey - props.data.length:', props.data.length)
    return props.title + 'key' + props.data.length
})

const dataLength = computed(() => {
    console.log('💠 - dataKey - props.data.length:', props.data.length)
    return props.title + 'LengthKey' + props.data.length
})

const open = ref()
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem
            class="group"
            :class="{
                '-ml-2 !grid !aspect-square !size-12 !place-items-center':
                    !as.sidebarOpen,
            }">
            <Collapsible
                key="pockets"
                as-child
                :defaultOpen="title == 'pinned' ? true : false"
                class="group"
                :open="open"
                :disabled="!data.length">
                <CollapsibleTrigger as-child>
                    <SidebarMenuButton
                        :size="as.sidebarOpen ? 'lg' : 'icon'"
                        :tooltip="title + ' Pockets'"
                        class="text-bc pocket-icon flex items-center py-5"
                        :class="{
                            '!grid !aspect-square !size-12 !place-items-center overflow-hidden':
                                !as.sidebarOpen,
                        }">
                        <Icon
                            :icon="props.icon"
                            :class="{
                                '!size-5 shrink-0 object-center':
                                    !as.sidebarOpen,
                            }" />
                        <span
                            class=""
                            :class="{
                                '!invisible hidden !opacity-0': !as.sidebarOpen,
                            }">
                            {{ props.title }}
                        </span>

                        <SidebarMenuBadge
                            class="mr-8"
                            v-if="props.data"
                            :key="dataLength">
                            {{ data.length }}
                        </SidebarMenuBadge>
                        <ExpandIndicator
                            :class="{
                                '!invisible hidden !opacity-0': !as.sidebarOpen,
                            }" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent as-child>
                    <SidebarMenuSub v-if="props.data" :key="dataKey">
                        <SidebarMenuSubItem
                            v-for="pocket in data"
                            :key="pocket.key"
                            :class="cn('text-3')">
                            <RouterLink
                                :to="`/pocket/${pocket.key}`"
                                class="w-full">
                                <PocketMenu
                                    :pocket="pocket"
                                    type="context"
                                    class="flex w-full flex-row items-center justify-start">
                                    <SidebarMenuSubButton
                                        size="lg"
                                        class="flex w-full flex-nowrap items-center gap-4 px-2! py-5">
                                        <PocketIcon
                                            :pocket="pocket"
                                            class="size-6 rounded-xs stroke-2 shadow-xs!"
                                            iconClass="rounded-md" />
                                        <span
                                            class="text-start !font-normal text-nowrap">
                                            {{ pocket.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </PocketMenu>
                            </RouterLink>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    </SidebarMenu>
</template>

<style scoped></style>
