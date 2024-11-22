<script setup lang="ts"></script>
<template>
    <template v-if="set">
        <div class="max-size-full absolute left-2 z-0 max-h-[35px] opacity-80">
            <img
                v-if="set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="-mt-1.5 size-[60px] object-cover object-top" />
            <Placeholder
                v-else
                :size="35"
                class="border-base-300/80 shadow-inset-sm"
                img="/img/runes/RunesIcon.svg"
                iClass="p-2 opacity-15" />
        </div>
    </template>
</template>
<style scoped></style>
