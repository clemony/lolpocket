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
    }>(),
    {
        open: true,
    }
)

const isOpen = ref(props.open)
const emit = defineEmits(['update:open'])
</script>

<template>
    <Card :class="cn('relative h-fit w-full', props.cardClass)" ref="card">
        <CardHeader :class="props.headerClass" class="px-8">
            <Collapsible
                v-model:open="isOpen"
                @update:open="emit('update:open', isOpen)">
                <CollapsibleTrigger
                    class="flex w-full cursor-pointer items-center gap-3 pt-1"
                    as-child>
                    <CardTitle>
                        <h2 v-if="props.title">{{ props.title }}</h2>
                        <slot name="header" class="" />
                    </CardTitle>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <CardDescription class="pt-2 text-base">
                        {{ props.description }}
                        <slot name="description" />
                    </CardDescription>
                </CollapsibleContent>
            </Collapsible>
        </CardHeader>
        <CardContent class="px-0">
            <div class="h-full max-h-full">
                <slot />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
