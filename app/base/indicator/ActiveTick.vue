<script lang="ts" setup>
const {class: className } = defineProps<{
class?: HTMLAttributes['class']

}>()
</script>

<template>
<transition-fade group  :class="cn('flex gap-3 items-center  font-medium italic', className)">
        <span class="btn btn-neutral btn-circle size-5.25 !p-0">
        <Tick class="size-6.5 stroke-[1.4]" />
        </span>
        Active
        </transition-fade>
</template>