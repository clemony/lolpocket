<script setup lang="ts">
import { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import type { ItemSet } from 'types'

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        headerClass?: HTMLAttributes['class']
        cardClass?: HTMLAttributes['class']
        noPadding?: boolean
        noCollapse?: boolean
        model?: Array<any>
        value?: ItemSet
    }>(),
    {}
)

const model = ref(props.model)

const emit = defineEmits(['update:model'])
</script>

<template>
    <Label for="itemset" as-child>
        <Card :class="cn('relative h-fit w-full', props.cardClass)" ref="card">
            <input
                type="radio"
                name="itemset"
                v-model="model"
                :value="value"
                class="hidden" />
            <CardHeader
                :class="props.headerClass"
                class="flex w-full px-5 py-5">
                <CardTitle class="flex w-full">
                    <h2 v-if="props.title">{{ props.title }}</h2>
                    <slot name="header" class="flex w-full gap-3" />
                </CardTitle>

                <CardDescription
                    v-if="props.description"
                    class="pt-2 text-base">
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
    </Label>
</template>

<style scoped></style>
