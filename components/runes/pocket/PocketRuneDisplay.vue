<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  isOpen?: boolean
}>()



const pocket = ref(props.pocket)
const set = computed (() => {
return pocket.value.runes.sets.find(s => s.key == pocket.value.runes.default)
})

</script>

<template>
 <div
        class="rounded-full   gap-3 cursor-pointer  px-1.5 py-3 bg-b2 border-b3 hover:shadow-warm-2 hover:shadow-black/6 hover:shadow-inset-sm transition-all duration-300  border-transparent items-center  shadow-sm  h-fit  flex flex-col group "
      >
      


            <div
          class="relative  shadow-outline shadow-black/19 grid aspect-square size-12  place-items-center items-center rounded-full
          transition-all duration-500"   :style="{
          background: `linear-gradient(110deg, transparent, var(--color-${set.primary.path.toLowerCase()}))`}"
          :class="{'!grayscale  !brightness-115 contrast-85': !isOpen}"
        >
   
          <div class="from-b1/90 to-b1/40 grid place-items-center rounded-full bg-gradient-to-br size-full backdrop-blur-md overflow-hidden">
            <div class="p-1 ">
            <img
      :src="set.primary.runes[0].name == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"

              class="drop-shadow-softer shrink-0 object-contain transition-all duration-200 hover:drop-shadow-sm"
            />
            </div>
          </div>




      </div>
           <div
          class="relative  shadow-outline shadow-black/15 grid aspect-square size-12 place-items-center items-center rounded-full  transition-all duration-500"   :style="{
          background: `linear-gradient(110deg, transparent, var(--color-${set.secondary.path.toLowerCase()}))`}"
          
        >
   
          <div class="from-b1/90 to-b1/40 grid size-full place-items-center rounded-full bg-gradient-to-br p-1 backdrop-blur-md overflow-hidden ">
            <img
      :src="set.secondary.path == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${set.secondary.path}.webp`"
              class="drop-shadow-softer shrink-0 h-8 w-auto object-contain transition-all duration-200 hover:drop-shadow-sm"
            />
          </div>
  
      
        </div>
 </div>
</template>

<style scoped>

</style>