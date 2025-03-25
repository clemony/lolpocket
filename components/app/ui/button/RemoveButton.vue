<script lang="ts" setup>
const props = defineProps<{
tip: string
}>()
</script>

<template>
    <button v-tippy="props.tip" class="btn group/btn btn-ghost btn-xs btn-square  opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30" >
              <icon name="x-sm" class="size-6 dst shrink-0 group-hover/btn:text-bc/100 text-bc/50" />
            </button>
</template>