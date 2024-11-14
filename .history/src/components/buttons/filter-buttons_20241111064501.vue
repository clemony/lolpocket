<script setup lang="ts">
//pr
</script>

<template>
<div class='join mr-1'>
    <label alt="Filter Likes" :title="likeText"
        class="tab swap swap-flip relative mr-2 px-2 *:absolute has-[:disabled]:cursor-default">
        <input type="checkbox" v-model="is.viewLiked" class="hidden" :disabled="is.lovedItems.length == 0" />

        <icon v-if=" > 0" icon="teenyicons:heart-outline" class="swap-off mb-1 size-4" />
        <icon v-if="is.lovedItems.length > 0" icon="teenyicons:heart-solid"
            class="swap-on mb-1 size-4 text-base-content/80" />
        <icon v-else icon="fluent:heart-off-20-regular" class="mb-[4px] size-5 text-base-content/30" />
    </label>
    <slot />
</div>
</template>

<style scoped></style>