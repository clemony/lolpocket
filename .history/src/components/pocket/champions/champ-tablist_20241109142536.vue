<script setup lang="ts">
import type { Champion } from 'types';

const props = defineProps<{
    champion: Champion
}>()
</script>

<template>
<Tabs default-value="account" class="w-full">
    <TabsList class='p-1.5'>
        <TabsTrigger v-for="(ability, key) in champion.abilities" :value="key">
            <LoadImg :url="ability.img" :alt="ability.name" class="shadow-sm rounded-md border-base-300 border" />
        </TabsTrigger>

    </TabsList>
    <TabsContent value="account">
        Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
        Change your password here.
    </TabsContent>
</Tabs>
</template>

<style scoped></style>