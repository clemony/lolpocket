<script lang="ts" setup>
import { CollapsibleContent, CollapsibleTrigger } from 'reka-ui'
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'

const isOpen = ref(false)

const as = useAccountStore()

console.log(as.nexusTrinkets)

const filter = computed (() => {
  const a = as.nexusTrinkets.filter(m => m != null)
  return a.map(m => m.name)
})

//TODO rename as trinket pouch


const trinketSizes = [
  {
    name: 'mini',
    value: 'mini',
    isOpen: ref(false)
  },
  {
    name: 'small',
    value: 'sm',
    isOpen: ref(false)
  },
  {
    name: 'medium',
    value: 'md',
    isOpen: ref(false)
  },
  {
    name: 'large',
    value: 'lg',
    isOpen: ref(false)
  },
  ]
</script>

<template>
  <Collapsible v-model:open="isOpen" class="max-h-full size-full">
    <CollapsibleTrigger class="flex cursor-pointer w-full items-center pl-2.5  pr-4 gap-3">
              <i-ui-trinket-pouch class="size-6 opacity-70 dst" />
      <span class="grow flex items-center dst  font-medium tracking-tight ">Trinket Pouch</span>
    <icon name="left-sm" class="tldr-30 " :class="{ '-rotate-90': isOpen }" />
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent grid grow overflow-hidden max-h-full h-fit pt-3 w-full">
  <Collapsible  class="max-h-full grid grow h-full w-full px-4"  v-for="trinkets in trinketSizes" :key="trinkets.value" v-model:open="trinkets.isOpen.value">
    <CollapsibleTrigger class="flex py-2.5 cursor-pointer w-full items-center pr-5 pl-8 gap-3">
       <span class="grow flex items-center dst capitalize font-medium tracking-tight ">
        {{trinkets.name}} Trinkets
       </span>
    <icon name="left-sm" class="tldr-30 " :class="{ '-rotate-90': trinkets.isOpen.value }" />
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent grid max-h-full overflow-y-auto h-full grow relative">
            <div v-for="module in allTrinkets" :key="module.name" class="size-full max-w-81 max-h-44" :data-name="module.name">
              <component :is="ghostRegistry[module.name]" :data-name="module.name" :title="module.title" :queue="module.queue" />
            </div>
         
    </CollapsibleContent>
  </Collapsible>
    </CollapsibleContent>
  </Collapsible>



</template>