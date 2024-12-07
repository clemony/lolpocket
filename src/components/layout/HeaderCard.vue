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
        wrapper?: HTMLElement | null
    }>(),
    {
        open: false,
    }
)
const topAnchor = ref<HTMLElement | null>(null)
const isAnchorVisible = useElementVisibility(topAnchor)
const target = ref(null)

const openTrigger = ref(false)
const isOpen = ref(false)

if (props.open) {
    isOpen.value = true
}
if ((openTrigger.value = true)) {
    isOpen.value = true
}
onClickOutside(target, (event) => {
    isOpen.value = false
    openTrigger.value = false
})

const scrollArea = ref(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(scrollArea)

watch(
    () => isScrolling.value,
    (newVal) => {
        console.log(newVal)
        isOpen.value = false
        openTrigger.value = false
    }
)
/*
watch(
    () => isScrolling.value,
    (newVal) => {
        console.log(isScrolling)
    
    }
) */
//const isTop = ref(true)
</script>

<template>
    <Card
        :class="cn('relative h-fit w-full !pt-0', props.cardClass)"
        ref="card">
        <CardHeader
            ref="target"
            :class="
                cn(
                    'absolute z-20 w-full bg-b1/95 px-10 pb-4 pt-6 backdrop-blur-md transition-all duration-200',
                    {
                        '': isAnchorVisible || isOpen,
                        'border-b border-b-b2':
                            !isAnchorVisible && !isOpen,
                        'rounded-b-xl border-b border-b-b2 shadow-smooth':
                            isOpen,
                    },
                    props.headerClass
                )
            ">
            <Collapsible
                v-model:open="isOpen"
                @update:open="(v) => (isOpen = v)">
                <CollapsibleTrigger
                    class="flex w-full cursor-pointer items-center gap-3 pt-1"
                    as-child>
                    <CardTitle>
                        <h2 v-if="props.title">{{ props.title }}</h2>
                        <slot name="header" class="" />
                    </CardTitle>
                </CollapsibleTrigger>
                <CollapsibleContent class="w-full duration-1000">
                    <CardDescription
                        class="w-full justify-between pb-3 pt-2 text-base">
                        {{ props.description }}
                        <slot name="description" />
                    </CardDescription>
                </CollapsibleContent>
            </Collapsible>
        </CardHeader>
        <CardContent class="px-0 pb-0">
            <ScrollArea class="h-full max-h-full overflow-auto px-8 pb-0 pt-18">
                <div
                    ref="topAnchor"
                    class="h-1 w-full transition-all duration-500" />
                <div ref="scrollArea">
                    <slot />
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
