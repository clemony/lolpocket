<script setup lang="ts"></script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            Pocket Utilities
        </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Pocket Tables">
                    <RouterLink
                        to="/tables"
                        class="flex gap-4"
                        activeClass="bg-base-200/90">
                        <icon
                            icon="teenyicons:border-all-outline"
                            class="size-4.5" />
                        <span>Table</span>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Pocket Cards">
                    <RouterLink to="/cards" class="flex gap-4">
                        <icon
                            icon="teenyicons:layers-outline"
                            class="size-4.5" />
                        <span>Cards</span>
                    </RouterLink>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem class="mb-2">
                <RouterLink to="/calculator">
                    <SidebarMenuButton class="py-5" tooltip="Calculator">
                        <icon icon="teenyicons:calculator-outline" />
                        <span class="text-base">Calculator</span>
                    </SidebarMenuButton>
                </RouterLink>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
