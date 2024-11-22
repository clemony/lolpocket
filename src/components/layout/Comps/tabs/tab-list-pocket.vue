<script setup lang="ts">
import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'vue';
const props = defineProps<{
    class?: HTMLAttributes['class']
}>();
</script>

<template>
<div role="tablist"
    :class="cn('tabs tabs-lifted relative overflow-hidden  w-full  border-base-300/70 scrollbar-hide *: [&_.tab-content]:!z-0 [&_.tab]:!z-30 [&_.tab]:!border-b-transparent [&_.tab]:font-medium ', props.class)">
    <slot />
</div>
</template>

<style scoped></style>
