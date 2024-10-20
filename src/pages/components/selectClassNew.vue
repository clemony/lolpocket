<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useDataStore } from '../../stores/dataStore'
const ds = useDataStore()

const props = defineProps<{
    type: string
}>()

const type = ref(props.type)

const emit = defineEmits(['update:type'])

function update(event) {
    type.value = event.target.value
    emit('update:type', event.target.value)
    console.log(event.target.value)
}

const typeText = computed(() => {
    if (type.value != '') {
        return type.value
    } else {
        return 'Class/Role'
    }
})
</script>

<template>
    <VDropdown
        theme="select"
        class="flex justify-start w-24 pr-0 text-xs border join-item btn btn-sm border-base-300 group-hover/name:border-base-200"
        :skidding="0"
        :overflowPadding="10"
        :distance="-32">
        <button
            @click.stop.prevent
            class="flex items-center justify-start w-full h-full">
            <div class="w-16 -ml-1 overflow-hidden truncate justify-self-start">
                {{ typeText }}
            </div>
            <icon
                icon="teenyicons:down-small-outline"
                class="size-3.5 absolute right-1" />
        </button>

        <template #popper>
            <div
                class="grid w-24 [&_label]:badge hover:[&_label]:badge-neutral [&_label]:text-xs [&_label]:font-normal [&_label]:justify-start px-1 py-1.5 gap-1 overflow-y-scroll max-h-32 relative">
                <div class="pl-2 py-[1px]">Class/Role</div>

                <label v-for="c in ds.typeOptions" v-close-popper>
                    {{ c }}
                    <input
                        type="radio"
                        v-model="type"
                        :value="c"
                        class="hidden peer" />
                </label>
                <label v-close-popper>
                    none
                    <input
                        type="radio"
                        v-model="type"
                        value=""
                        class="hidden peer"
                        @change="update" />
                </label>
            </div>
        </template>
    </VDropdown>
</template>

<style scoped>
.v-popper--theme-select .v-popper__inner {
    @apply !rounded-md;
}
</style>
