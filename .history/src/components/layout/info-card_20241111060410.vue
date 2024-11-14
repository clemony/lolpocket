<script setup lang="ts">
import { HTMLAttributes } from 'vue';


const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        open?: boolean
        headerClass?: HTMLAttributes['class']
        cardClass?: HTMLAttributes['class']
        noPadding?: boolean

    }>(), {
    open: true
})



const isOpen = ref(props.open)
</script>

<template>
<Card class="h-fit w-full relative" :class="props.cardClass" ref="card">
    <slot name="first" />


    <CardHeader :class="props.headerClass" class=''>
        <Collapsible v-model:open="isOpen">
            <CollapsibleTrigger class=' flex w-full pt-1 items-center gap-3 '>
                <h2 v-if="props.title">{{ props.title }}</h2>
                <slot name="header" class='' />
            </CollapsibleTrigger>
            <CollapsibleContent>
                <CardDescription class='pt-2 text-base'>
                    {{ props.description }}
                    <slot name="description" />
                </CardDescription>
            </CollapsibleContent>
        </Collapsible>
    </CardHeader>
    <CardContent>
        <div :class="{ 'px-5': !props.noPadding }">
            <slot />
        </div>
    </CardContent>
</Card>
</template>

<style scoped></style>