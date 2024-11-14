<script setup lang="ts">

</script>

<template>
<div class='join mr-1'>
    <Button variant="outline" size="icon" class='join-item'>
        <icon icon="teenyicons:heart-outline" class="size-4.5 opacity-70" />
    </Button>
    <VDropdown theme='detail'>
        <Button variant="outline" size="icon" class="join-item">

            <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
        </Button>

        <template #popper>
            <slot />
        </template>
    </VDropdown>
</div>
</template>

<style scoped></style>