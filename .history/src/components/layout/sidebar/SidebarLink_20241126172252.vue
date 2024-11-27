<script setup lang="ts">
const props = defineProps<{
    to: string
    badge: Array<any>
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
            <RouterLink to="/trash" class="flex gap-4">
                <icon icon="teenyicons:bin-outline" class="size-4.5" />
                <span class="capitalize">Trash</span>

                <SidebarMenuBadge class="mr-8">
                    {{ ps.trashPockets.length }}
                </SidebarMenuBadge>
            </RouterLink>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
<style scoped></style>
