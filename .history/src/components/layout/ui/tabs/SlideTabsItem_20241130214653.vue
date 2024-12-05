<script setup lang="ts">
import { ref, computed, defineComponent, onMounted } from 'vue'
import { useTabsContext } from './tabsContext'
import { JSX } from 'vue/jsx-runtime'

interface Props {
    label: string | JSX.Element
    value: string
    disabled?: boolean
}

const defaultProps = {
    disabled: false,
}

defineProps<Props>()
defineEmits(['register'])

const props = withDefaults(defineProps<Props>(), defaultProps)
const { label, value, disabled } = props

const { register, currentValue } = useTabsContext()
const isActive = computed(() => currentValue.value === value)

function TabsInternalCell({
    onClick,
    onMouseOver,
    activeClassName,
    activeStyle,
    hideBorder,
}: {
    onClick?: (value: string) => void
    onMouseOver?: (event: MouseEvent) => void
    activeClassName?: string
    activeStyle?: Record<string, any>
    hideBorder?: boolean
}) {
    const tabRef = ref<HTMLDivElement | null>(null)
    const active = computed(() => currentValue.value === value)

    const clickHandler = () => {
        if (disabled) return
        onClick && onClick(value)
    }
}
</script>

<template>
    <template>
        <div
            ref="tabRef"
            class="tab"
            :class="[
                { active: active.value, disabled },
                active.value && activeClassName,
                { 'hide-border': hideBorder },
            ]"
            role="button"
            @mouseover="onMouseOver"
            @click="clickHandler"
            :style="active.value ? activeStyle : {}"
            data-geist="tab-item">
            {{ label }}
        </div>
    </template>
</template>

<style scoped>
.tab {
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    outline: 0;
    text-transform: capitalize;
    white-space: nowrap;
    background-color: transparent;
    color: var(--palette-accents-5);
    user-select: none;
    display: flex;
    align-items: center;
    font-size: calc(var(--scale-font) * 0.875);
    line-height: normal;
    width: calc(var(--scale-width) * 1);
    height: calc(var(--scale-height) * 1);
    padding: calc(var(--scale-padding-top) * 0.875)
        calc(var(--scale-padding-right) * 0.55)
        calc(var(--scale-padding-bottom) * 0.875)
        calc(var(--scale-padding-left) * 0.55);
    margin: calc(var(--scale-margin-top) * 0)
        calc(var(--scale-margin-right) * 0.2)
        calc(var(--scale-margin-bottom) * 0)
        calc(var(--scale-margin-left) * 0.2);
    z-index: 1;
}
.tab:hover {
    color: var(--palette-foreground);
}
.tab:after {
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    transform: scaleX(0.75);
    background-color: var(--palette-foreground);
    transition:
        opacity,
        transform 200ms ease-in;
    opacity: 0;
}
.active:after {
    opacity: 1;
    transform: scaleX(1);
}
.tab:first-of-type {
    margin-left: 0;
}
.active {
    color: var(--palette-foreground);
}
.disabled {
    color: var(--palette-accents-3);
    cursor: not-allowed;
}
</style>
