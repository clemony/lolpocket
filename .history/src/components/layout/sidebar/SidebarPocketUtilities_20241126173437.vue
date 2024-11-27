<script setup lang="ts"></script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel data-tauri-drag-region>
            Pocket Utilities
        </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarLink to="table" icon="teenyicons:border-all-outline" />

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
