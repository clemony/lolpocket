<script setup lang="ts">
const emit = defineEmits(['update:model'])

const is = useItemStore()


const selectedTypes = ref(null)



const route = useRoute()
function handleUpdate(){
 if (route.path == '/items/stats'){
  is.itemGridApi.setGridOption('rowData', filterItems())
}
}

function handleReset(){
  is.dbItemTiers = null
  is.itemGridApi.setGridOption('rowData', filterItems())
}
</script>

<template>

    <transition-slide group class="flex w-full flex-wrap gap-4 relative ">
    <input
      class="btn btn-sm   before:size-14 absolute  left-0 !text-5 font-normal "
      aria-label="All"
      type="reset"
      value="×"
      @click="handleReset()" />

    <label
        v-for="tier in itemTiers"
        :key="tier.id"
     class="font-medium text-3  btn btn-sm  capitalize group/filter  mr-0  " :class="{ 'bg-neutral border-neutral text-nc shadow-neutral/20 shadow-sm order-first  ml-12': is.dbItemTiers == tier.id, 'first-of-type:ml-12': !is.dbItemTiers || is.dbItemTiers == null}">

      <input
        v-model="is.dbItemTiers" class="peer hidden absolute"
        type="radio"
        :value="tier.id"
        @change="handleUpdate()"
        name="item-types" />
   {{tier.name}}
    </label>


    <label
        v-for="tier in itemTags"
        :key="tier.id"
     class="font-medium text-3  btn btn-sm  capitalize group/filter  mr-0  " :class="{ 'bg-neutral border-neutral text-nc shadow-neutral/20 shadow-sm order-first  ml-12': is.dbItemTiers == tier.id, 'first-of-type:ml-12': !is.dbItemTiers || is.dbItemTiers == null}">

      <input
        v-model="is.dbItemTiers" class="peer hidden absolute"
        type="radio"
        @change="handleUpdate()"
        :value="tier.id"
        name="item-types" />
   {{tier.name}}
    </label>
  </transition-slide>
</template>

<style scoped></style>
