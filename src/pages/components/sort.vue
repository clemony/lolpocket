<script setup lang="ts">
import { computed } from 'vue';
  import { useBStore } from '../../stores/buildStore';
  const bs = useBStore();

  const sortNameText = computed(() => {
    let text = '';
    if (bs.sortName == 'az'){
      text = 'From A';
    } else {
      text = 'From Z';
    }
    return text;
  })

  const sortPriceText = computed(() => {
    let text = '';
    if (bs.sortPrice == 'ascending'){
      text = 'From Low';
    } else {
      text = 'From High';
    }
    return text;
  })

</script>
<template>
  <div class="join mx-1">
 
    <label for="sortPrice" :class="{'active': bs.sortPriceActive == 'on'}"
      class="btn dropdown dropdown-hover dropdown-bottom join-item btn-xs z-10 pointer-events-auto flex content-center">
     

    <div tabindex="0"
      role="button" class="">
      <input
      type="checkbox"
      v-model="bs.sortPriceActive"
      true-value="on"
      false-value="off"
      id="sortPrice"
      class="peer hidden " @change="console.log(bs.sortPriceActive)"/>

      
        
      <icon
        icon="teenyicons:sort-up-outline"
        alt="price from low to high"
        :class="{'!block': bs.sortPriceActive == 'off'}" class="hidden" />
      <icon
        icon="teenyicons:sort-down-outline"
        :class="{'!block': bs.sortPriceActive == 'on'}" class="hidden"
        alt="price from high to low" />


      <div
        tabindex="0"
        class="dropdown-content z-[1] w-48 -left-1 ">
        <div class=' menu menu-glass bg-base-100 rounded-t-none rounded-b-box mt-[6px] shadow  p-3 text-base-content font-normal text-xs'>
    <label class='flex gap-6 items-center'>
            <span class="text-base-content font-semibold col-start-1">PRICE </span> 

          
          
       
            
            <!-- <span class="col-start-2"> {{ bs.sortPriceActive }} </span> -->
             <div class="flex gap-2 font-semibold">
            <input type="checkbox" v-model="bs.sortPrice" true-value="descending" false-value="ascending" class="toggle toggle-xs rounded rotate-180" checked />
            <span class="">{{sortPriceText}}</span>
             </div>
            </label>


      </div>
    </div>
</div>

</label>


    <label for="sortName" :class="{'active': bs.sortNameActive == 'on'}"
      class="btn dropdown dropdown-hover dropdown-bottom join-item btn-xs z-10 pointer-events-auto flex content-center">
     

    <div tabindex="0"
      role="button" class="">
      <input
      type="checkbox"
      v-model="bs.sortNameActive"
      true-value="on"
      false-value="off"
      id="sortName"
      class="peer hidden " @change="console.log(bs.sortNameActive)"/>

      
        
      <icon
        icon="teenyicons:sort-alphabetically-outline"
        alt="Current sort a-z"
        :class="{'!block': bs.sortName == 'az'}" class="hidden" />
      <icon
        icon="teenyicons:sort-reverse-alphabetically-outline"
        :class="{'!block': bs.sortName == 'za'}" class="hidden"
        alt="Current sort z-a" />


      <div
        tabindex="0"
        class="dropdown-content z-[1] w-44 -left-8 ">
        <div class=' menu menu-glass bg-base-100 rounded-t-none rounded-b-box mt-[6px] shadow  p-3 text-base-content font-normal text-xs'>
    <label class='flex gap-6 items-center'>
            <span class=" font-semibold col-start-1">NAME </span> 

          
          
       
            
            <!-- <span class="col-start-2"> {{ bs.sortNameActive }} </span> -->
             <div class="flex gap-2 font-semibold">
            <input type="checkbox" v-model="bs.sortName" true-value="az" false-value="za" class="toggle toggle-xs rounded rotate-180" checked />
            <span class="">{{sortNameText}}</span>
             </div>
            </label>


      </div>
    </div>
</div>

</label>
  </div>
</template>

<style scoped>
label.active {
  @apply bg-neutral text-neutral-content  border-neutral/70 hover:bg-neutral/80;
}
</style>
