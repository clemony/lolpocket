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

const isTop = computed(() => {
    const { arrivedState } = useScroll(scrollArea)
    return arrivedState
})

watch(
    () => isTop.value,
    (newVal) => {
        console.log(newVal)
        console.log(isTop.value)
    }
)
</script>

<template>
    <Card
        :class="cn('relative h-fit w-full !pt-0', props.cardClass)"
        ref="card">
        <CardHeader
            :class="
                cn(
                    'absolute z-20 w-full bg-base-100/90 px-8 pt-0 backdrop-blur-md',
                    { 'py-5': isTop, 'py-0': !isTop },
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
                ref="scrollArea"
                class="h-full max-h-full overflow-auto px-8 pb-0">
                <div class="h-10 w-full" />
                <slot />
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
