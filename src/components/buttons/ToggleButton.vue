<script setup lang="ts">
import { cn } from '@lib/utils'
import { type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
    model?: boolean
    class?: HTMLAttributes['class']
}>(), {
    model: false
});

const emit = defineEmits(['update:model'])
const isShown = ref();

onMounted(() => {
    isShown.value = props.model
})
</script>

<template><label
    :class="cn('swap swap-flip  shrink-0 [&_svg]:shrink-0 [&_svg]:stroke-2 group  transition-all duration-300 outline-0! w-3!  pr-2! hover:bg-transparent!  relative self-center grid content-center items-center'), props.class">

    <input v-if="props.model" type="checkbox" v-model="isShown" @change="emit('update:model', isShown)" />

    <icon icon="teenyicons:up-small-outline" class="caret size-3  group-hover:stroke-[1.5] -mb-px ml-1" />

</label></template>

<style scoped>
.v-popper--shown {
    .caret {
        @apply -rotate-180
    }
}
</style>