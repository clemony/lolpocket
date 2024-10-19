<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import TableContextMenu from './table-contextMenu.vue';
import { usePocketStore } from '../../../stores/pocketStore';
import { get } from '@vueuse/core/index.cjs';

const ps = usePocketStore();
const props = defineProps<{

    params?: {
        data: {
            key: string;
            bgColor: string;
            iconColor: string;
            icon: string;
            name: string;
            items: {};
            pinned: boolean;
        };
        api: any;
        node: any;
    };
    pocketKey?: string;
    type?: string;
}>();

const pocket = computed(() => {
    if (props.params) {
        return props.params.data;
    } else if (props.pocketKey) {
        return ps.getPocket(props.pocketKey);
    }
});

const bgColor = computed({
    get() {
        if (pocket.value) {
            return pocket.value.bgColor;
        }
    },
    set(newVal) {
        //bgColor.value = newValue;
        emit('update:bgColor', newVal);
    }
});

const iconColor = computed({
    get() {
        if (pocket.value) {
            return pocket.value.iconColor;
        }
    },
    set(newVal) {
        //iconColor.value = newValue;
        emit('update:iconColor', newVal);
    }
});

const emit = defineEmits(['update:bgColor', 'update:iconColor']);


// Watch for local `bgColor` and `iconColor` changes to update `pocket`
watch(() => bgColor.value, (newVal) => {
    if (pocket.value) {
        pocket.value.bgColor = newVal as string;
        emit('update:bgColor', newVal);
    }
});

watch(() => iconColor.value, (newVal) => {
    if (pocket.value) {
        pocket.value.iconColor = newVal as string;
        emit('update:iconColor', newVal);
    }
});

watch(() => bgColor.value, (newVal) => {
    if (pocket.value) {
        pocket.value.bgColor = newVal as string;
    } else {
        emit('update:bgColor', newVal);
    }
});

watch(() => iconColor.value, (newVal) => {
    if (pocket.value) {
        pocket.value.iconColor = newVal as string;
    } else {
        emit('update:iconColor', newVal);
    }
});
</script>

<template>
    <ContextMenu>
        <ContextMenuTrigger>
            <VDropdown v-if="pocket" theme="detail" class="flex items-center justify-center p-1 size-full"
                placement="right-start" :distance="0">
                <button :style="{ backgroundColor: pocket.bgColor, color: pocket.iconColor }"
                    :class="{ '!rounded-full': props.type == 'round' }"
                    class="grid p-4 transition-all duration-300 rounded-[4px] relative shadow-sm group place-items-center  apsect-square hover:shadow-warm hover:ring-1 hover:ring-[currentColor/60] size-12"
                    @click.stop>
                    <icon :style="{ color: pocket.iconColor }" :icon="`${pocket.icon}`" class="size-full" />

                    <div :style="{ backgroundColor: pocket.iconColor, color: pocket.bgColor, borderColor: pocket.bgColor }"
                        class="grid place-items-center p-[2px] absolute top-0 right-0 rounded-full size-4.5 border *:size-full group-hover:opacity-80 opacity-0 transition-all duration-300 shadow-sm">
                        <icon icon="ri:edit-fill" />
                    </div>
                </button>

                <template #popper>
                    <CreateIcon :selectedIcon="pocket.icon" v-model:bgColor="bgColor" v-model:iconColor="iconColor"
                        :pocketKey="pocket.key" />
                </template>
            </VDropdown>

            <TableContextMenu v-if="props.params" :pocketKey="props.params.data.key" />
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped>
.v-popper--shown button {
    @apply ring-1 ring-neutral/40 ring-offset-1 shadow-md;

    &>div {
        @apply opacity-80;
    }
}
</style>
