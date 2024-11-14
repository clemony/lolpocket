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
<div class='flex gap-2 flex-wrap px-2'>
    <Badge v-for="tag in props.params.data.tags" class='w-fit max-w-32 h-7'>
        # <InputEditable :model="tag" :defaultValue="tag"
            class='max-w-32 rounded-full truncate py-0 px-1 h-7 hover:border-transparent  items-center'>{{ tag
            }}
        </InputEditable>
    </Badge>
</div>
</template>

<style scoped></style>