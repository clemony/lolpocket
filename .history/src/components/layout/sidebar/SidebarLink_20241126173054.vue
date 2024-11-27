<script setup lang="ts">
const props = defineProps<{
    to: string
    badge: number
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
    <SidebarMenuItem class="max-w-[17.9rem]">
        <RouterLink :to="link" class="flex gap-4" activeClass="bg-base-200/70">
            <SidebarMenuButton class="flex" :tooltip="tooltip">
                <Icon :icon="props.icon" class="size-4.5" />
                <span class="capitalize">{{ to }}</span>

                <SidebarMenuBadge class="mr-8">
                    {{ badge }}
                </SidebarMenuBadge>
            </SidebarMenuButton>
        </RouterLink>
    </SidebarMenuItem>
</template>
<style scoped></style>
