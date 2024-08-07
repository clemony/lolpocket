<script setup lang="ts">

import { useToast } from '@components/cn/toast';
import { Icon } from '@iconify/vue';
import Builds from '@pages/builds.vue';
import Champions from '@pages/champions.vue';
import Home from '@pages/home.vue';
import Items from '@pages/items.vue';
import Runes from '@pages/runes.vue';
import Settings from '@pages/settings.vue';
import { useDataStore } from '@stores/dataStore';
import { computed, DefineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Access tHe router instance to programmatically navigate
const router = useRouter();

// Function to navigate to a specific route
const navigateTo = (route: string) => {
    router.push(route);
};

// Access the current route
const route = useRoute();



type ValidPaths = '/builds' | '/home' | '/champions' | '/items' | '/runes' | '/settings' | '/tree';


const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
    '/builds': Builds,
    '/home': Home, // Adjust this if the component is incorrect
    '/champions': Champions,
    '/items': Items,
    '/runes': Runes,
    '/settings': Settings, // Adjust if necessary
    '/tree': null,
};


// Computed property for current view
const currentComponent = computed(() => {
    const currentPath = route.path as ValidPaths; // Adjust the type to match ValidPaths
    return componentMap[currentPath] || null;
});





const {
    toast
} = useToast();

const nodes = ref<any[]>([]);
const selectedKey = ref<string[]>([]);

const onNodeSelect = (node) => {
    toast({
        title: 'success!',
        description: 'node selected: ' + node.label,
    });
    navigateTo(node.data);
};

const onIconClick = (node) => {
    toast({
        title: 'success!',
        description: 'node icon clicked1!!: ' + node.label,
    });
};



onMounted(() => {
    useDataStore().fetchData();
    NodeService.getTreeNodes().then((data: null) => (nodes.value = data));
});


</script>
<template>
    <div class="panel-nav">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" id="tree1">

            <template #nodetoggleicon>
                <Icon icon="ph:caret-up" />
            </template>
            <template #nodetoggleicon.selected>
                <Icon icon="ph:caret-down" />
            </template>
            <template #default="slotProps">
                {{ slotProps.node.label }}

            </template>
            <template #addon="slotProps">
                <span>{{ slotProps.node.label }}</span>
                <Button variant="null" class="add-build" title="create new build">
                    <Icon icon='fluent:add-square-24-regular' class="add-reg" />
                    <Icon icon='fluent:add-square-24-filled' class="add-fill" />
                </Button>
            </template>
            <template #build="slotProps" :pt="{
                nodeicon: {
                    onClick: onIconClick,
                }
            }">

                <input :label='slotProps.node.label' :placeholder="slotProps.node.label"
                    class="w-full h-5 mr-2 overflow-scroll" />
            </template>
        </Tree>

    </div>


    <div class="data panel-nav">
        <h4 class="pt-3 pl-3 text-xs font-semibold border-none">BROWSE</h4>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" id="tree2">
            <template #browse="slotProps">
                {{ slotProps.node.label }}
            </template>
        </Tree>
    </div>

    <div class="panel-nav">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" id="tree3">
            <template #settings="slotProps">
                {{ slotProps.node.label }}
            </template>
        </Tree>
    </div>
</template>