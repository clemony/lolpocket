<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})



/*  @click="navigateTo(`/pocket/${pocket.key}`) */
  const menuOpen = ref(false)
</script>

<template>
    <label
      class="swap swap-flip **:select-none w-100 h-90">
<input type="checkbox"  v-model="menuOpen" />

      <div class=" w-100 h-90 swap-off hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl  shadow-warm gap-3 overflow-hidden ">
    <BackpackCardBackground :pocket="pocket" />

        <div
          key="card-wrapper"  class="absolute grid z-1  !pointer-events-auto inset-0 items-center rounded-xl overflow-hidden size-full">
          <div  class="  pointer-events-none py-3 px-4 size-full   inset-shadow grid relative">

              <BackpackRunes :pocket="pocket" />
     <icon name="radix-icons:open-in-new-window" class="absolute size-7 right-4 top-4" />
            <div class="flex gap-6 self-end w-full">
              <div  class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
   
                  <BackpackChampion :pocket="pocket" />
            
                <div class="group flex flex-col gap-1 pr-4">
                  <p class="grow pb-1">
                    {{ pocket.name }}
                  </p>

                  <BackpackRoles :pocket="pocket" />
                </div>

         
                    <BackpackItems :pocket="pocket" />
        
              </div>
            </div>
          </div>
        </div>

</div>
<div  class="swap-on bg-light  hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl  shadow-warm gap-3 overflow-hidden ">
      <BackpackMenu :pocket="pocket" :menu-open="menuOpen" />
  </div>
    </label>

</template>
