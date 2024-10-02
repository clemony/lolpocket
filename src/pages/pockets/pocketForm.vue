<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { useModal, useModalSlot } from 'vue-final-modal';
const ps = usePocketStore();


/*  */
export type FormData = {
    name: string
    description: string
    icon: string
}


const pocketName = ref('');
const pocketDescription = ref('');

const emit = defineEmits<{
    (e: 'submit', formData: FormData): void
}>()

const pocketForm = ({
    initialValues: {
        pocketName: '',
        password: '',
        icon: 'teenyicons:folder-outline',
    },
    onSubmit(values) {
        emit('submit', values)
    },
})

function handleSubmit() { };

</script>

<template>
    <div class="grid w-full gap-3 p-3">
        <div class="flex items-center gap-2">
            <h1 class="text-xl font-semibold tracking-tight ">{{ title }}</h1>


            <icon icon='simple-line-icons:info'
                class="after:content-['All data is optional and can be modified later.'] after:absolute after:text-xs" />


        </div>
        <form @submit="handleSubmit" class='grid grid-cols-2 gap-4'>

            <div class="field">
                <input type="text" v-model="pocketName" placeholder="Pocket Name">

            </div>

            <div class="pb-0.5  col-start-1">
                <span class="flex justify-end w-full label-text-alt">
                    <icon icon="ph:asterisk-simple" />
                    optional
                </span>
                <textarea class="!leading-5 textarea textarea-bordered" v-model="pocketDescription"
                    placeholder="Description, notes, a short blurb? "></textarea>

            </div>
            <div class="">
                <input type="submit" value="Complete" class="cursor-pointer btn btn-sm btn-neutral">
            </div>
        </form>
    </div>
</template>

<style>
.field {
    @apply input input-sm border-base-300 col-start-1;
}
</style>
