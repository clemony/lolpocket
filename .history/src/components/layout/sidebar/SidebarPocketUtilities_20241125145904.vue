<script setup lang="ts"></script>
<template>
    <SidebarGroup>
        <SidebarMenu>
            <SidebarMenuItem v-for="item in navPockets" :key="item.title">
                <SidebarMenuButton
                    as-child
                    @click="sn.navigateTo(item.url, item.title, item.icon)"
                    class="flex">
                    <SidebarMenuButtonChild>
                        <icon :icon="item.icon" :class="item.iconClass" />

                        <span>
                            {{ item.title }}
                        </span>

                        <SidebarMenuBadge v-if="item.array">
                            {{ item.array.length }}
                        </SidebarMenuBadge>
                    </SidebarMenuButtonChild>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
