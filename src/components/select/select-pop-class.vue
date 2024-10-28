<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useDataStore } from '@stores/dataStore'
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
<VDropdown theme="select"
    class="btn join-item btn-sm flex w-24 justify-start border border-base-300 pr-0  group-hover/name:border-base-200"
    :skidding="0" :overflowPadding="10" :distance="-32">
    <button @click.stop.prevent class="flex h-full w-full items-center justify-start">
        <div class="-ml-1 w-16 justify-self-start overflow-hidden truncate">
            {{ typeText }}
        </div>
        <icon icon="teenyicons:down-small-outline" class="absolute right-1 size-3.5" />
    </button>

    <template #popper>
        <div
            class="relative grid max-h-32 w-24 gap-1 overflow-y-scroll px-1 py-1.5 [&_label]:badge hover:[&_label]:badge-neutral [&_label]:justify-start [&_label]: [&_label]:font-normal">
            <div class="py-[1px] pl-2">Class/Role</div>

            <label v-for="c in ds.typeOptions" v-close-popper>
                {{ c }}
                <input type="radio" v-model="type" :value="c" class="peer hidden" />
            </label>
            <label v-close-popper>
                none
                <input type="radio" v-model="type" value="" class="peer hidden" @change="update" />
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
