<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import type { HTMLAttributes } from 'vue'

const as = useAccountStore()

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>
<template>
    <Icon
        icon="teenyicons:left-small-outline"
        :class="
            cn(
                'ml-auto size-4.5 shrink-0 transition-transform duration-200 group-data-[state=open]:-rotate-90',
                props.class
            )
        " />
</template>
<style scoped></style>
