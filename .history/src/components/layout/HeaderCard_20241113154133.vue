<script setup lang="ts">
import { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        open?: boolean
        headerClass?: HTMLAttributes['class']
        cardClass?: HTMLAttributes['class']
        isTop?: boolean
    }>(),
    {
        open: true,
    }
)

const isOpen = ref(props.open)
//const isTop = ref(true)
const emit = defineEmits(['update:open'])

const topAnchor = ref<HTMLElement | null>(null)
const isAnchorVisible = useElementVisibility(topAnchor)
</script>

<template>
    <Card
        :class="cn('relative h-fit w-full !pt-0', props.cardClass)"
        ref="card">
        <CardHeader
            :class="
                cn(
                    'absolute z-20 w-full bg-base-100/90 px-8 pt-0 backdrop-blur-md',
                    { 'py-5': isAnchorVisible, 'py-0': !isAnchorVisible },
                    props.headerClass
                )
            ">
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
        <CardContent class="px-0 pb-0">
            <ScrollArea
                ref="el"
                class="h-full max-h-full overflow-auto px-8 pb-0">
                <div ref="topAnchor" class="h-20 w-full" />
                <slot />
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
