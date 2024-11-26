<script setup lang="ts"></script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            View Pockets
        </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton as-child>
                    <RouterLink :to="/pockets">
                        <SidebarMenuButtonChild>
                            <icon icon="teenyicons:table-outline" />
                            <span>Table</span>
                        </SidebarMenuButtonChild>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
