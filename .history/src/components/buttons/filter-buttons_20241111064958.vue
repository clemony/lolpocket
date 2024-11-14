<script setup lang="ts">
const props = defineProps<{
    data: Array<any>
}>()
</script>

<template>
<div class='join mr-1'>
    <label alt="Filter Likes" class="tab swap swap-flip relative mr-2 px-2 *:absolute has-[:disabled]:cursor-default">
        <input type="checkbox" v-model="props.data" class="hidden" :disabled="!props.data.length" />

        <icon v-if="props.data.length" icon="teenyicons:heart-outline" class="swap-off mb-1 size-4" />
        <icon v-if="props.data.length" icon="teenyicons:heart-solid" class="swap-on mb-1 size-4 text-base-content/80" />
        <icon v-else icon="fluent:heart-off-20-regular" class="mb-[4px] size-5 text-base-content/30" />
    </label>
    <slot />
</div>
</template>

<style scoped></style>