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
    }>(),
    {
        open: true,
    }
)

const isOpen = ref(props.open)
const emit = defineEmits(['update:open'])

const scrollArea = ref<HTMLElement | null>(null)

const isScrollTop = computed(() => {
    const { x, y, isScrolling, arrivedState, directions } =
        useScroll(scrollArea)
    return arrivedState
})

const { x, y, isScrolling, arrivedState, directions } = useScroll(scrollArea)

console.log(directions)
console.log(isScrollTop)
watch(
    () => isScrollTop,
    (newVal) => {
        console.log(isScrollTop)
        console.log(newVal)
    }
)
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
            <ScrollArea
                ref="scrollArea"
                class="h-full max-h-full overflow-auto px-8 pb-10">
                <slot />
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
