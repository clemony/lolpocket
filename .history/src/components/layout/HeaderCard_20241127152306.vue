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
        open: false,
    }
)

const isOpen = ref(props.open)
//const isTop = ref(true)
const emit = defineEmits(['update:open'])

const topAnchor = ref<HTMLElement | null>(null)
const isAnchorVisible = useElementVisibility(topAnchor)
const target = ref(null)

onClickOutside(target, (event) => (isOpen.value = false))
</script>

<template>
    <Card
        :class="cn('relative h-fit w-full pt-0!', props.cardClass)"
        ref="card">
        <CardHeader
            ref="target"
            :class="
                cn(
                    'bg-b1/95 w-full px-10 pt-0 backdrop-blur-md transition-all duration-200',
                    {
                        'pt-6 pb-4': isAnchorVisible,
                        'border-b-b2 absolute z-20 border-b py-2':
                            !isAnchorVisible,
                        'border-b-b2 shadow-smooth rounded-b-xl border-b':
                            isOpen,
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
                <CollapsibleContent class="w-full duration-1000">
                    <CardDescription
                        class="text-4 w-full justify-between pt-2 pb-3">
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
                    class="h-1 w-full transition-all duration-500" />
                <slot />
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
