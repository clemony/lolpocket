<script setup lang="ts">
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/client/components/base/sidebar'

const props = defineProps<{
    to: string
    badge?: number
    icon?: string
    sub?: boolean
    name?: string
    hash?: string
}>()

const tooltip = computed(() => {
    return !props.sub ? props.to.toUpperCase() : ''
})

const linkName = computed(() => {
    return (
        !props.sub ? props.to
        : props.sub ? props.name
        : null
    )
})
const components = computed(() => {
    if (!props.sub) {
        return {
            item: SidebarMenuItem,
            button: SidebarMenuButton,
        }
    } else if (props.sub) {
        return {
            item: SidebarMenuSubItem,
            button: SidebarMenuSubButton,
        }
    } else {
        return null // Fallback for invalid type
    }
})
</script>
<template>
    <component :is="components.item">
        <RouterLink
            :to="{ name: props.to, hash: props.hash }"
            class="flex rounded-lg"
            exactActiveClass="bg-b2/70">
            <component :is="components.button" class="flex" :tooltip="tooltip">
                <Icon :icon="props.icon" class="size-4.5" />
                <span class="capitalize">{{ linkName }}</span>

                <SidebarMenuBadge class="text-bc mr-8">
                    {{ badge }}
                </SidebarMenuBadge>
            </component>
        </RouterLink>
    </component>
</template>
<style scoped></style>
