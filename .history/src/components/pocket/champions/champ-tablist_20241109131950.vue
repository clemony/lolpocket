<script setup lang="ts">

</script>

<template>
<Tabs default-value="account" class="w-full">
    <TabsList>
        <TabsTrigger value="account">
            Account
        </TabsTrigger>
        <TabsTrigger value="password">
            Password
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