<script lang="ts">
import {
    useRouter,
    useRoute,
    onBeforeRouteUpdate
} from 'vue-router';
import {
    useToast
} from '@/components/ui/toast/use-toast'

import Home from '@/pages/home.vue';
import Items from '@/pages/items.vue';
import Champions from '@/pages/champions.vue';
import Runes from '@/pages/runes.vue';
import Settings from '@/pages/settings.vue';
import Builds from '@/pages/builds.vue';

import {
    Icon
} from '@iconify/vue';

// Access the router instance to programmatically navigate
const router = useRouter();

// Function to navigate to a specific route
const navigateTo = (route: string) => {
    router.push(route);
};

// Access the current route
const route = useRoute();

/*
const componentMap: Record<ValidPaths, DefineComponent<any, any, any>> = {
    '/builds': Builds,
    '/home': Home, // Adjust this if the component is incorrect
    '/champions': Champions,
    '/items': Items,
    '/runes': Runes,
    '/settings': Settings, // Adjust if necessary
    '/tree': Tree,
};

// Computed property for current view
const currentComponent = computed(() => {
    const currentPath = route.path as ValidPaths; // Adjust the type to match ValidPaths
    return componentMap[currentPath] || null;
});
*/


const nodes = ref(null);
const selectedKey = ref(null);
const {
    toast
} = useToast();

onMounted(() => {


});

NodeService.getTreeNodes().then((data: null) => (nodes.value = data));

const onNodeSelect = (node) => {
    toast({
        title: 'success!',
        description: 'node selected: ' + node.label,
    });
    navigateTo(node.key);
};
</script>

<template>
    <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
        @nodeSelect="onNodeSelect" class="w-full md:w-[30rem]" :pt="{
        }">
        <template #collapsedIcon>

        </template>
    </Tree>

    <Toaster />
</template>
