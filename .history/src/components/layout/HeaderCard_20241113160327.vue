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
                    'w-full rounded-b-box bg-base-100/95 px-10 pt-0 backdrop-blur-md transition-all duration-200',
                    {
                        'pb-5 pt-6': isAnchorVisible,
                        'absolute z-20 border-b border-b-base-200 py-2':
                            !isAnchorVisible,
                        'border-b border-b-base-200 shadow-smooth': isOpen,
                    },
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
                <CollapsibleContent class="duration-1000">
                    <CardDescription class="pb-3 pt-2 text-base">
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
                <div
                    ref="topAnchor"
                    class="w-full transition-all duration-500"
                    :class="{
                        'h-0': isAnchorVisible,
                        'h-20': !isAnchorVisible,
                    }" />
                <slot />
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
