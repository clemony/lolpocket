<script setup lang="ts">
import { ref, defineProps, provide } from 'vue';

const props = defineProps<{
    defaultTab: number;
    modelName: string;
}>();

const tabValue = ref(props.defaultTab);

provide('tabValue', tabValue);
provide('updateTab', (value: number) => {
    tabValue.value = value;
});
</script>

<template>
<div role="tablist"
    class="tabs tabs-lifted relative tabs-lg flex w-full overflow-y-scroll border-base-300/70 scrollbar-hide *: [&_.tab-content]:!z-0 [&_.tab]:!z-30 [&_.tab]:h-7 [&_.tab]:!border-b-transparent [&_.tab]:font-medium !max-w-full">
    <slot />
</div>
</template>

<style scoped></style>
<!-- 
how 2 use 


    <TabList modelName="" :defaultTab="">

        <Tab modelName="" :index="">
            <template #header>
                <input type="radio" class="peer hidden" name="" :value="" v-model="" />
                Name 1
            </template>

            <template #content>
                Tab content 1
            </template>
        </Tab>

 -->