<script setup lang="ts"></script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            Pocket Utilities
        </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton as-child>
                    <RouterLink to="/pockets">
                        <SidebarMenuButtonChild>
                            <icon icon="teenyicons:table-outline" />
                            <span>Table</span>
                        </SidebarMenuButtonChild>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem class="mb-2">
                <RouterLink to="/calculator">
                    <SidebarMenuButton class="py-5">
                        <icon icon="teenyicons:calculator-outline" />
                        <span class="text-base">Calculator</span>
                    </SidebarMenuButton>
                </RouterLink>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
