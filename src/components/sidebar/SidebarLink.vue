<script setup lang="ts">
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@components/base/sidebar'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

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

/* const showText = ref(true)
watch(
    () => as.sidebarOpen,
    (newVal) => {
        if (!newVal) {
            setTimeout(() => {
                showText.value = false
            }, 140)
        } else if (newVal) {
            showText.value = true
        }
    }
) */
const open = ref(as.sidebarOpen)

const size = computed(() => {
    const open = ref(as.sidebarOpen)
    const a =
        open.value ? 'default'
        : !open.value ? 'icon'
        : 'default'
    return a
})
</script>
<template>
    <SidebarMenuItem>
        <RouterLink
            :to="{ name: props.to, hash: props.hash }"
            class="duration- flex rounded-lg transition-all"
            :class="{
                '-ml-2 !grid !aspect-square !size-12 !place-items-center':
                    !as.sidebarOpen,
            }"
            exactActiveClass="bg-b2/70">
            <SidebarMenuButton
                class="flex"
                size="lg"
                :tooltip="tooltip"
                :class="{
                    '!grid !aspect-square !size-12 !place-items-center':
                        !as.sidebarOpen,
                }">
                <Icon
                    :icon="props.icon"
                    class=""
                    :class="{
                        'size-4.5': as.sidebarOpen,
                        '!size-5 shrink-0 overflow-hidden object-center':
                            !as.sidebarOpen,
                    }" />
                <span
                    class="capitalize"
                    :class="{
                        '!invisible hidden !opacity-0': !as.sidebarOpen,
                    }">
                    {{ linkName }}
                </span>

                <SidebarMenuBadge class="text-bc mr-8">
                    {{ badge }}
                </SidebarMenuBadge>
            </SidebarMenuButton>
        </RouterLink>
    </SidebarMenuItem>
</template>
<style scoped></style>
