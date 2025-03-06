<script lang="ts" setup>


const is = useItemStore()



const isOpen = ref(false)
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <button
        class=" border-b3/70 bg-b1/60  inset-shadow-xs flex px-3 py-2 items-center border h-12 [&_svg]:size-4 transition-opacity  gap-4 text-bc/50 duration-100 rounded-lg w-90" :class="{'opacity-0': isOpen }">
      <icon name="search" class="size-4 dst" />
      <div class="grow pt-0.5 text-left dst">Search Items...</div>
      <slot  />
      </button>
    </PopoverTrigger>

    <PopoverContent class="w-90 rounded-lg  p-0" @open-auto-focus.prevent align="start" :side-offset="-38">
            <ItemSearch
        placeholder="Search Items"
        input-class=" text-bc"
        class=" shadow-none h-13 [&_svg]:size-4 bg-transparent rounded-t-lg  border-t-0 border-x-0 border-b border-b-b3/60 w-full" set-focus/>

      <p class="font-semibold tracking-tight mb-1.5 mt-4 pl-4">
        Search by Item Category
      </p>

      <div group class="flex flex-col  mb-2 px-1.5" :appear="false">
        <label v-for="type in itemTypes" :key="type" class="w-full rounded-md hover:bg-b2/60 capitalize py-1.5 pl-8">
          <input v-model="is.filterItemTypes" type="radio" name="item-types" class="peer hidden" :value="type" />
          {{ type }}
        </label>
      </div>

  
        <Separator class="bg-b3/60 my-1.5 " />
 
   <p class="font-semibold tracking-tight mb-1.5 mt-4 pl-4">
        Search by Item Stat
      </p>

        <div group class="flex flex-col  mb-2 px-1.5" :appear="false">
        <label v-for="type in itemTypes" :key="type" class="w-full rounded-md hover:bg-b2/60 capitalize py-1.5 pl-8">
          <input v-model="is.filterItemTypes" type="radio" name="item-types" class="peer hidden" :value="type" />
          {{ type }}
        </label>
      </div>
    </PopoverContent>
  </Popover>
</template>