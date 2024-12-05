<script setup lang="ts">
const titles = []
const selected = ''
const subscribers = []

const props = defineProps<{
    disabled: Boolean
}>()

onMounted(() => {
    appendTabs(true)
})

function appendTabs(defaultSetting) {
    this.titles = []
    this.titles = this.$children
        .filter((item) => item.$options.name === 'zi-tabs-item')
        .map((item) => {
            const { label, value, active, icon } = item
            return { label, value, active, icon }
        })
    const activeTab = this.titles.find((item) => item.active)
    if (activeTab) {
        this.select(activeTab, defaultSetting)
        return
    }
    this.select(this.titles[0], defaultSetting)
}

function appendSubscriber(handler) {
    this.subscribers.push(handler)
}

function isSelected(value) {
    return value === this.selected
}

function select(item, defaultSetting = false) {
    if (this.disabled && !defaultSetting) return
    const { value, label } = item
    if (!defaultSetting && this.selected !== item.value) {
        this.$emit('label-selected', { label, value })
    }
    this.selected = item.value
    this.subscribers.forEach((func) => {
        if (typeof func !== 'function') return
        func()
    })
}
</script>

<template>
    <div class="zi-tabs-container">
        <div
            class="zi-item-wrapper"
            v-for="(item, index) in titles"
            :key="item.value + index"
            @click="select(item)"
            :class="{ disabled }">
            <div
                class="zi-tabs-item"
                :class="{ active: isSelected(item.value) }">
                <icon icon="item.icon" v-show="item.icon" class="icon" />
                <span>{{ item.label }}</span>
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.zi-tabs-container {
    border-bottom: 1px solid var(--b2);
    display: flex;
}
.zi-item-wrapper {
    padding: 0 var(--geist-gap-half);
    cursor: pointer;
}
.zi-item-wrapper:first-child {
    padding-left: 0;
}
.zi-tabs-item {
    display: flex;
    align-items: center;
    padding: rem(6) rem(2);
    border-bottom: 2px solid transparent;
    font-size: 16px;
    line-height: 18px;
    color: var(--b3);
    margin-bottom: -1px;
    user-select: none;
}
.zi-tabs-item .icon {
    width: rem(14);
    height: rem(14);
    margin-right: rem(3);
}
.zi-tabs-item.active {
    color: var(--b2);
    border-bottom-color: var(--b2);
}
.zi-tabs-content {
    padding-top: rem(10);
}
.disabled {
    cursor: not-allowed;
}
</style>
