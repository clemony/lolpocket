<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { useItemStore } from '../../stores/itemStore';
const is = useItemStore();

const sortNameText = computed(() => {
  let text = '';
  if (is.sortName == 'az') {
    text = 'From A';
  } else if (is.sortName == 'za') {
    text = 'From Z';
  } else {
    text = "Name"
  }
  return text;
})

const sortPriceText = computed(() => {
  let text = '';
  if (is.sortPrice == 'ascending') {
    text = 'From Low';
  } else if (is.sortPrice == 'descending') {
    text = 'From High';
  } else {
    text = 'Price';
  }
  return text;
})

var previousPriceValue = '';
var previousNameValue = '';

const verifyName = (value: string) => {
  // If the current value is the same as the previous value, clear it
  if (previousNameValue === value) {
    is.sortName = ''; // Clear the selection
  }
  previousNameValue = value;
};

// Function to verify value and clear if the active radio is clicked again
const verifyValue = (value: string) => {
  // If the current value is the same as the previous value, clear it
  if (previousPriceValue === value) {
    is.sortPrice = ''; // Clear the selection
  }
  previousPriceValue = value;
};

</script>
<template>

  <VDropdown theme="menuDark" placement="bottom-end" class="relative w-10 border-none join-item btn btn-xs btn-outline "
    :class="{ 'active': is.sortName || is.sortPrice }" @click="{ is.sortName = ''; is.sortPrice = '' }">

    <button class="">

      <icon icon="system-uicons:sort" class="size-4.5" />
    </button>


    <template #popper>


      <!--     <div v-if="is.sortName != '' || is.sortPrice != ''" class="z-10 flex items-center gap-3 justify-self-start btn-xs">
      <div
        class="filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success bg-success relative mb-2 top-[3px] right-[0px] after:rounded-full after:animate-ping">
      </div>

      <Icon icon="iconoir:bin-full" class="self-center  size-[1rem] p-0" @click="is.sortName = ''; is.sortPrice = ''"
        alt="Remove Sort" title="Remove Sort" />
    </div>
 -->








      <!-------------------------------⟢ Name ⟣-------------------------------->

      <div class="w-full px-2 font-semibold text-neutral-content/60">
        <div class=" pt-3 pb-1 px-1 border-b border-[groove] border-neutral-600 ">
          Sort
        </div>
      </div>

      <div class=" p-3  relative pt-0 grid grid-cols-[2rem_1.3rem_auto] gap-y-1 gap-x-1 items-center ">



        <span class="w-full col-span-3 py-1.5  text-mini   text-neutral-content/70 tracking-wide italic">Name
        </span>
        <label class="badge-btn-dark">
          <input type="radio" v-model="is.sortName" value="az" id="sortName" class="hidden peer"
            @click="verifyName('az')" />
          A

        </label>
        <div class="relative  opacity-80 *:top-0 *:left-0 size-3.5 *:size-3.5 *:absolute">
          <icon icon="teenyicons:arrow-left-outline" :class="{ 'opacity-0': is.sortName == 'az' }" class="mr-0.5" />
          <icon icon="teenyicons:arrow-left-outline" :class="{ 'opacity-0': is.sortName == 'za' }"
            class="ml-0.5 rotate-180" />
        </div>
        <label class="badge-btn-dark justify-self-end">
          <input type="radio" v-model="is.sortName" value="za" id="sortName" class="hidden peer"
            @click="verifyName('za')" />
          Z

        </label>

        <!-------------------------------⟢ Price ⟣-------------------------------->


        <span class="w-full col-span-3 py-1.5  text-mini   text-neutral-content/70 tracking-wide italic">Price
        </span>


        <label class="badge-btn-dark" role="button">
          <input type="radio" v-model="is.sortPrice" value="ascending" id="sortPrice" class="hidden peer"
            @click="verifyValue('ascending')" />
          $

        </label>

        <div class="relative opacity-80 *:top-0 *:left-0 size-3.5 *:size-3.5 *:absolute">
          <icon icon="teenyicons:arrow-left-outline" :class="{ 'opacity-0': is.sortPrice == 'ascending' }"
            class="mr-0.5" />
          <icon icon="teenyicons:arrow-left-outline" :class="{ 'opacity-0': is.sortPrice == 'descending' }"
            class="ml-0.5 rotate-180" />
        </div>

        <label role="button" class="!px-1.5  badge-btn-dark justify-self-end">
          <input type="radio" v-model="is.sortPrice" value="descending" id="sortPrice" class="hidden peer"
            @click="verifyValue('descending')" />
          $$
        </label>
      </div>


    </template>
  </VDropdown>

</template>

<style scoped>
label.active {
  @apply bg-neutral text-neutral-content border-neutral/70 hover:bg-neutral/80;
}

.active,
.v-popper--shown {
  @apply bg-neutral text-neutral-content;
}
</style>
