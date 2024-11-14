<script setup lang="ts">
import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'vue';
const props = defineProps<{
    class?: HTMLAttributes['class']
}>();
</script>

<template>
<div role="tablist"
    :class="cn('tabs tabs-lifted relative flex flex-col flex-1 overflow-hidden  w-full  border-base-300/70 scrollbar-hide *: [&_.tab-content]:!z-0 [&_.tab]:!z-30 [&_.tab]:!border-b-transparent [&_.tab]:font-medium !max-w-full h-[calc(100%-220px)] max-h-[calc(100%-220px)]', props.class)">
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