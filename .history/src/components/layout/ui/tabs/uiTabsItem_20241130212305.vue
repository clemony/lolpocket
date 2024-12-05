<script setup lang="ts">
const props = defineProps<{
       label: [String, Number]
        value: [String, Number]
        active: Boolean
        icon: Object
}>()
    props: {

    },

   const data: () => ({
        isActive: false,
    })




       function updateSubscription() {
            this.isActive = this._group.isSelected(this.value)
        }
</script>

<template>.zi-tabs-content(v-show="isActive") slot</template>

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
