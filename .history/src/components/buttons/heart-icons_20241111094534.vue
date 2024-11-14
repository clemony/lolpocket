<script setup lang="ts">

</script>

<template>
<icon v-if="props.loved" icon="teenyicons:heart-outline" class="swap-off size-6 absolute p-px" />
<icon v-if="props.loved" icon="teenyicons:heart-solid" class=" swap-on size-6 text-base-content/80 absolute p-px" />
<icon v-else icon="fluent:heart-off-20-regular" class="size-6 absolute   text-base-content/30" />
</template>

<style scoped></style>