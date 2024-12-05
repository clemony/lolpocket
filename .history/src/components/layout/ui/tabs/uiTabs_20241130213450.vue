<script setup>
import { ref, reactive, watch, computed, provide, onMounted } from 'vue'
import useTheme from '../use-theme'
import { TabsContext, TabsHeaderItem } from './tabs-context'
import useScale from '../use-scale'
import Highlight from '../shared/highlight'
import { useRect } from '../utils/layouts'
import { isGeistElement } from '../utils/collections'
import useClasses from '../use-classes'

const props = defineProps({
    initialValue: String,
    value: String,
    hideDivider: { type: Boolean, default: false },
    hideBorder: { type: Boolean, default: false },
    highlight: { type: Boolean, default: true },
    onChange: Function,
    className: { type: String, default: '' },
    leftSpace: { type: String, default: '12px' },
    hoverHeightRatio: { type: Number, default: 0.7 },
    hoverWidthRatio: { type: Number, default: 1.15 },
    align: { type: String, default: 'left' },
    activeClassName: { type: String, default: '' },
    activeStyle: { type: Object, default: () => ({}) },
})

const theme = useTheme()
const { SCALES } = useScale()
const tabs = ref([])
const selfValue = ref(props.initialValue)
const refHeader = ref(null)
const displayHighlight = ref(false)
const { rect, setRect } = useRect()

// Register function for tabs
const register = (next) => {
    tabs.value =
        tabs.value.some((item) => item.value === next.value) ?
            tabs.value.map((item) =>
                item.value === next.value ? { ...item, ...next } : item
            )
        :   [...tabs.value, next]
}

// Provide initial value for TabsContext
const initialValue = computed(() => ({
    register,
    currentValue: selfValue.value,
    inGroup: true,
    leftSpace: props.leftSpace,
}))
provide(TabsContext, initialValue)

// Watch for external value changes
watch(
    () => props.value,
    (newVal) => {
        if (newVal !== undefined) selfValue.value = newVal
    }
)

// Handle tab click
const clickHandler = (value) => {
    selfValue.value = value
    if (props.onChange) props.onChange(value)
}

// Handle mouse over
const tabItemMouseOverHandler = (event) => {
    if (!isGeistElement(event.target)) return
    setRect(event, () => refHeader.value)
    if (props.highlight) {
        displayHighlight.value = true
    }
}
</script>

<template>
    <div :class="useClasses('tabs', props.className)" v-bind="$attrs">
        <header ref="refHeader" @mouseleave="displayHighlight = false">
            <Highlight
                :rect="rect"
                :visible="displayHighlight"
                :hoverHeightRatio="props.hoverHeightRatio"
                :hoverWidthRatio="props.hoverWidthRatio" />
            <div
                :class="
                    useClasses('scroll-container', {
                        'hide-divider': props.hideDivider,
                    })
                "
                :style="{
                    justifyContent: props.align,
                    paddingLeft: props.leftSpace,
                }">
                <div v-for="{ cell: Cell, value } in tabs" :key="value">
                    <Cell
                        @click="clickHandler(value)"
                        @mouseover="tabItemMouseOverHandler"
                        :activeClassName="props.activeClassName"
                        :activeStyle="props.activeStyle"
                        :hideBorder="props.hideBorder" />
                </div>
            </div>
        </header>
        <div class="content">
            <slot />
        </div>
        <style>
            .tabs {
                font-size: var(--scale-font);
                width: var(--scale-width);
                height: var(--scale-height);
                padding: var(--scale-padding);
                margin: var(--scale-margin);
            }
            header {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                overflow-y: hidden;
                overflow-x: scroll;
                scrollbar-width: none;
                position: relative;
            }
            .scroll-container {
                width: 100%;
                height: 100%;
                flex: 1;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                border-bottom: 1px solid var(--theme-border);
            }
            header::-webkit-scrollbar {
                display: none;
            }
            .hide-divider {
                border-color: transparent;
            }
            .content {
                padding-top: 0.625rem;
            }
        </style>
    </div>
</template>
