<script setup lang="ts">
const props = defineProps<{
    to: string
    badge: Array<any>
    icon: string
}>()

const tooltip = computed(() => {
    return props.to.toUpperCase()
})
const link = computed(() => {
    const r = /\/[A-Za-z]+/
    let l = !props.to.match(r) ? props.to.replace(/(.*)/, '/$1') : ''
    l.toLowerCase()
    return l
})
</script>
<template>
    <SidebarMenuItem>
        <SidebarMenuButton class="flex" :tooltip="tooltip">
            <RouterLink :to="link" class="flex gap-4">
                <icon :icon="props.icon" class="size-4.5" />
                <span class="capitalize">{{ to }}</span>

                <SidebarMenuBadge class="mr-8">
                    {{ props.badge.length }}
                </SidebarMenuBadge>
            </RouterLink>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
<style scoped></style>
