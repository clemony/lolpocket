<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})



/*  @click="navigateTo(`/pocket/${pocket.key}`) */
  const menuOpen = ref(false)
</script>

<template>
    <label
      class="swap swap-flip **:select-none w-100 h-80">
<input type="checkbox"  v-model="menuOpen" />

      <div class=" w-100 h-80 swap-off hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl  shadow-warm gap-3 overflow-hidden ">
    <BackpackCardBackground :pocket="pocket" />

        <div
          key="card-wrapper"  class="absolute grid z-1  !pointer-events-auto inset-0 items-center rounded-xl overflow-hidden size-full">
          <div  class="  pointer-events-none py-3 px-4 size-full   inset-shadow grid relative">

              <BackpackRunes :pocket="pocket" />

              <button @click="navigateTo(`/pocket/${pocket.key}`)" v-tippy="'Open Pocket'" class="btn-ghost cursor-pointer hover:bg-b2/60 btn btn-square backdrop-blur-md absolute right-3 top-2 pointer-events-auto">
     <icon name="open" class=" size-7 " />
     </button>

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
<div  class="swap-on bg-white  hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl  shadow-warm gap-3 overflow-hidden ">
      <BackpackMenu :pocket="pocket" :menu-open="menuOpen" />
  </div>
    </label>

</template>
