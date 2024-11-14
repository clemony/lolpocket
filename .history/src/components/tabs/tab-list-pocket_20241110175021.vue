<script setup lang="ts">
import { cn } from '@/lib/utils'

</script>

<template>
<div role="tablist"
    :class="cn('tabs tabs-lifted relative flex   w-full overflow-y-scroll border-base-300/70 scrollbar-hide *: [&_.tab-content]:!z-0 [&_.tab]:!z-30 [&_.tab]:!border-b-transparent [&_.tab]:font-medium !max-w-full h-full', props.class)">
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