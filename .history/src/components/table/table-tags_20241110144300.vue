<script setup lang="ts">


const props = defineProps<{
    params: {
        data: {
            name: string
            key: string
            icon: string
            pinned: any
            tags: Array<string>
        }
        api: any
        node: any
    }
}>()
</script>

<template>
<div class='flex flex-wrap px-2'>
    <Badge v-for="tag in props.params.data.tags" class='w-fit max-w-24'>
        # <InputEditable class='max-w-24 truncate'>{{ tag }} </InputEditable>
    </Badge>
</div>
</template>

<style scoped></style>