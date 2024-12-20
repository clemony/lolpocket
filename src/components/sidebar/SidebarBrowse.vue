<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { navGroup, navItem } from 'types'
import LinksJson from '@data/databaseLinks.json'
console.log('💠 - LinksJson:', LinksJson)
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel>Browse</SidebarGroupLabel>
        <SidebarMenu class="mb-1">
            <SidebarLink to="favorites" icon="teenyicons:heart-outline" />

            <Collapsible
                v-for="section in LinksJson"
                as-child
                :default-open="section.open"
                class="group">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child class="group">
                        <SidebarMenuButton size="lg" :tooltip="section.name">
                            <icon :icon="section.icon" />
                            <span class="capitalize">{{ section.name }}</span>
                            <ExpandIndicator />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub v-if="section.links">
                            <SidebarMenuSubItem
                                v-for="link in section.links"
                                :key="link.name">
                                <RouterLink
                                    :to="{
                                        name: link.link,
                                        /*  hash: item.hash, */
                                    }">
                                    <SidebarMenuSubButton size="lg">
                                        <span class="">
                                            {{ link.name }}
                                        </span>
                                    </SidebarMenuSubButton>
                                </RouterLink>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
