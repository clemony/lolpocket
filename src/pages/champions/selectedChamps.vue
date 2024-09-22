<script setup lang="ts">
import { useChampStore } from '../../stores/champStore';
import {
    VueDraggable,
    UseDraggableReturn
} from 'vue-draggable-plus'
const cs = useChampStore();

function onUpdate() {
    console.log('update')
}
function onAdd() {
    console.log('add')
}
function remove() {
    console.log('remove')
}
</script>

<template>

    <div
        class=" border-b-base-300 border-b backdrop-blur-md absolute z-10 top-0 left-0 bg-base-100/90  items-center flex w-full  justify-end gap-3 !h-fit flex-wrap  py-1 px-4">

        <h2 class="justify-start sub-text grow">
            For...
        </h2>

        <div class="join">
            <button class="join-item grid   btn btn-xs  place-items-center group *:size-4.5" @click="cs.resetChamps()">
                <icon v-if="cs.champions2.length > 0" icon='iconoir:bin-full' class="" />
                <icon v-else icon='iconoir:bin' class="" />
            </button>

        </div>
    </div>



    <VueDraggable v-model="cs.champions2" :delay="0" :animation="300"
        :group="{ name: 'champs', pull: true, put: true, revertClone: false }" :prevent-on-filter='true'
        ghostClass="ghosty" @update="onUpdate" @add="onAdd" @remove="remove" :force-fallback="true"
        :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true" class="drag-draggable champion">

        <template v-if="cs.champions2.length > 0">
            <label v-for="(champion, index) in cs.champions2" :key="champion.name" :data-index="index"
                class="drag-label" dragClass="setDrag">

                <div class="drag-wrapper">

                    <img :src="champion.img" class="drag-img" />

                    <input type="radio" :value="champion" v-model="cs.selectedChampion" class="hidden" />
                </div>

            </label>
        </template>

        <div v-else
            class="p-1 drag-label ghosty w-[70px] after:ring-1 after:ring-neutral/15 after:z-50 after:w-[98%] after:h-[98%] after:absolute after:rounded-md bg-gradient-to-br from-base-200/80 to-base-200/20">
            <div class="grid items-center border-none drag-wrapper opacity-40 place-content-center">
                +
            </div>
        </div>
        <!--          <button
            class="group-hover/item:opacity-100 opacity-0 absolute top-0.5 right-0.5 bg-base-100/70 rounded-full"
            alt="Remove item from set" title="Remove">
            <icon icon='teenyicons:x-circle-solid' class="   size-3.5" />
        </button> -->




        <!--         <div class="overflow-hidden slot shadow-lil">
            <div class="flex rounded-md shadow-contrast size-full place-items-center place-content-center ">
                <icon icon="teenyicons:add-solid" class="opacity-50 size-4 drop-shadow-sm" />
            </div>

        </div> -->



    </VueDraggable>

</template>

<style scoped>
.active {}
</style>