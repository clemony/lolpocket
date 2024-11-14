<script setup lang="ts">
const props = defineProps<{
    indent?: boolean
    open?: boolean
}>()
</script>

<template>
    <Button
        variant="ghost"
        size="sm"
        class="flex w-full items-center justify-start gap-3">
        <span v-if="indent" class="size-3" />
        <slot />
        <icon
            v-if="props.open"
            icon="teenyicons:right-small-outline"
            class="ml-7 size-4" />
    </Button>
</template>

<style scoped>
.v-popper--shown {
    @apply bg-base-200;
}
</style>
