<script setup lang="ts">
import { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        open?: boolean
        headerClass?: HTMLAttributes['class']
        cardClass?: HTMLAttributes['class']
        noPadding?: boolean
        noCollapse?: boolean
    }>(),
    {
        open: true,
    }
)

const isOpen = ref(props.open)
const emit = defineEmits(['update:open'])
</script>

<template>
    <Card
        :class="cn('relative h-fit w-full @container', props.cardClass)"
        ref="card">
        <CardHeader :class="props.headerClass" class="flex w-full px-5 py-5">
            <CardTitle class="flex w-full">
                <h2 v-if="props.title">{{ props.title }}</h2>
                <slot name="header" class="flex w-full gap-3" />
            </CardTitle>

            <CardDescription v-if="props.description" class="pt-2 text-base">
                {{ props.description }}
                <slot name="description" />
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div :class="{ 'h-full max-h-full px-5': !props.noPadding }">
                <slot />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
