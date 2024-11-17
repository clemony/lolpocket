<script setup lang="ts"></script>

<template>
    <Dialog
        v-model:open="state"
        :title="title"
        :description="description"
        :submitText="submitText">
        <DialogTrigger
            @click="toggleState(newPocketModal)"
            v-shortkey.once="['meta', 'p']"
            @shortkey="toggleState(newPocketModal)"
            class="absolute right-1/4 z-[2000]">
            click
        </DialogTrigger>
        <DialogContent>
            <component :key="id" :is="component" />
        </DialogContent>
</template>

<style scoped></style>
