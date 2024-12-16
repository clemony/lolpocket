<script setup lang="ts">
const props = defineProps<{
    open?: boolean
    disabled?: boolean
}>()

const open = ref(props.open)
const toggleOpen = useToggle(open)

const animate = computed(() => {
    const a = !open ? { h } : { height: '1px' }
    return a
})
</script>
<template>
    <Collapsible>
        <CollapsibleTrigger
            @click="toggleOpen()"
            as-child
            :disabled="props.disabled"
            class="group">
            <slot name="a" />
        </CollapsibleTrigger>
        <CollapsibleContent :class="{ 'data-[state=open]': open }" as-child>
            <MotionPresence>
                <Motion
                    v-show="open"
                    :initial="{ height: '0px' }"
                    :animate="{
                        height: 'var(--radix-collapsible-content-height',
                        transition: 'all 0.2s ease-in-out',
                    }"
                    :exit="{ height: '0px' }"
                    :transition="{ duration: 0.2, type: 'easeInOut' }">
                    <slot name="b" />
                </Motion>
            </MotionPresence>
        </CollapsibleContent>
    </Collapsible>
</template>
<style scoped></style>
